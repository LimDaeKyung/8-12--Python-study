from flask import Flask, render_template, request, redirect, send_file
from extractors.berlin import extract_berlin_jobs
from extractors.web3 import extract_web3_jobs
from extractors.wwr import extract_wwr_jobs
from file import save_to_file

app = Flask("JobScrapper", template_folder='templates')

db = {}  # 가짜 데이터베이스이기 때문에 서버가 켜져있을때에만 저장이 가능하다.

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search')
def search():
    keyword = request.args.get("keyword")
    if keyword is None:
        return redirect("/")
    
    keyword = keyword.lower()  # None이 아닌 경우에만 .lower() 호출
    if keyword in db:
        jobs = db[keyword]
    else:
        # 각 스크래퍼에서 직업 정보를 가져옴
        berlin_jobs = extract_berlin_jobs(keyword)
        web3_jobs = extract_web3_jobs(keyword)
        wwr_jobs = extract_wwr_jobs(keyword)
        # 세 개의 사이트에서 가져온 직업 정보를 합침
        jobs = berlin_jobs + web3_jobs + wwr_jobs
        db[keyword] = jobs

    # 데이터를 CSV 파일로 저장
    save_to_file(f"{keyword}_jobs", jobs)

    # 검색 결과 페이지로 직업 정보를 넘김
    return render_template('search.html', keyword=keyword, jobs=jobs)

@app.route("/export")
def export():
    keyword = request.args.get("keyword")
    if keyword is None: 
        return redirect("/")
    
    if keyword.lower() not in db:
        return redirect(f"/search?keyword={keyword}")

    # CSV 파일 저장
    save_to_file(keyword, db[keyword])
    
    # 파일을 클라이언트에게 전송
    return send_file(f"{keyword}.csv", as_attachment=True)

app.run("0.0.0.0", port=5001)
