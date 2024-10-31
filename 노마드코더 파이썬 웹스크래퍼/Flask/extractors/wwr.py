from bs4 import BeautifulSoup
import cloudscraper

class WWRJobScraper:
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
        categories = ["category-2", "category-18"]  # 카테고리 2와 18

        # 각 카테고리에서 직업 리스트를 스크래핑
        for category in categories:
            section = soup.find("section", id=category)  # section을 찾음
            if section:
                jobs = section.find_all("li", class_="feature")  # 모든 li.feature 태그를 찾음

                for job in jobs:
                    title = job.find("span", class_="title")
                    company = job.find("span", class_="company")
                    url_tag = job.find("a")

                    if url_tag and title and company:  # 직업 정보가 모두 있을 때만 추가
                        job_data = {
                            "position": title.text.strip(),
                            "company": company.text.strip(),
                            "link": f"https://weworkremotely.com{url_tag['href']}"
                        }
                        self.all_jobs.append(job_data)

# Flask에서 사용할 수 있도록 별도 함수로 정의
def extract_wwr_jobs(keyword):
    scraper = WWRJobScraper()
    url = f"https://weworkremotely.com/remote-jobs/search?term={keyword}"
    scraper.scrape_page(url)
    return scraper.all_jobs
