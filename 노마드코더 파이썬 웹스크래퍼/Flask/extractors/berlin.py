from bs4 import BeautifulSoup
import cloudscraper
import time

class JobScraper:
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
        jobs = soup.find("div", id="content").find_all("div", class_='bjs-jlid__wrapper')

        for job in jobs:
            title = job.find("h4", class_="bjs-jlid__h")
            company = job.find("a", class_="bjs-jlid__b")
            # explanation = job.find("div", class_="bjs-jlid__description")
            url_tag = job.find("h4", class_="bjs-jlid__h").find("a")

            if url_tag:
                # 상대 경로를 처리해 절대 경로로 변환
                job_url = url_tag["href"]
                if not job_url.startswith("http"):
                    job_url = f'https://berlinstartupjobs.com{job_url}'

            job_data = {
                "position": title.text.strip() if title else "No title",
                "company": company.text.strip() if company else "No company",
                "link": job_url if job_url else "No URL"
            }
            self.all_jobs.append(job_data)

    def scrape_jobs_by_keyword(self, keyword, pages=1):
        base_url = f"https://berlinstartupjobs.com/skill-areas/{keyword}/"
        for page in range(1, pages + 1):
            url = f"{base_url}page/{page}/" if page > 1 else base_url
            self.scrape_page(url)
            time.sleep(1)  # 서버 요청 시 대기 시간을 추가해 과부하 방지

        return self.all_jobs

# Flask에서 사용할 수 있도록 함수화
def extract_berlin_jobs(keyword):
    scraper = JobScraper()
    jobs = scraper.scrape_jobs_by_keyword(keyword, pages=3)  # 여러 페이지에서 데이터를 가져옴
    return jobs
