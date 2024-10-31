from bs4 import BeautifulSoup
import cloudscraper
import time

class Web3JobScraper:
    def __init__(self):
        self.scraper = cloudscraper.create_scraper()
        self.all_jobs = []

    def scrape_page(self, url):
        print(f"Scrapping {url}...")
        response = self.scraper.get(url)
        if response.status_code != 200:
            print(f"Failed to fetch page: {url}, Status code: {response.status_code}")
            return

        soup = BeautifulSoup(response.content, "html.parser")
        jobs = soup.find("tbody", class_="tbody").find_all("tr", class_="table_row")  

        for job in jobs:
            title = job.find("h2", class_="fs-6 fs-md-5 fw-bold my-primary")
            company = job.find("h3")
            url_tag = job.find("a")  # 먼저 'a' 태그를 찾음

            if url_tag and title and company:  # url_tag가 존재할 때 href 추출
                job_data = {
            "position": title.text.strip(),
            "company": company.text.strip(),
            "link": f"https://web3.career{url_tag['href']}"  # 링크 추출
        }
                self.all_jobs.append(job_data)


    def scrape_jobs_by_keyword(self, keyword, pages=1):
        base_url = f"https://web3.career/{keyword}-jobs"
        for page in range(1, pages + 1):
            url = f"{base_url}?page={page}" if page > 1 else base_url
            self.scrape_page(url)
            time.sleep(1)  # 서버 요청 시 대기 시간 추가

        return self.all_jobs

# Flask에서 사용할 수 있도록 함수화
def extract_web3_jobs(keyword):
    scraper = Web3JobScraper()
    jobs = scraper.scrape_jobs_by_keyword(keyword, pages=10)  # 여러 페이지에서 데이터를 가져옴
    return jobs

