"""Public Illinois Courts opinion-index reader. Metadata only, no court records downloaded.
Usage: python audit/judicial-2026/inventory-opinions.py --query Lampkin --court "First District Appellate Court" --all-pages --output audit/judicial-2026/inventory-opinions-lampkin.json
Requirements: requests, beautifulsoup4. Requests public ASP.NET search/pagination forms.
Search matches need PDF review: a name can identify a panel member, trial judge, party, attorney, or cited authority.
"""
import argparse,datetime,hashlib,json,re,time
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
BASE='https://www.illinoiscourts.gov'
URL=BASE+'/top-level-opinions?t=appellate'

def form_data(soup):
    d={x['name']:x.get('value','') for x in soup.select('input[name]')}
    for x in soup.select('select[name]'):
        selected=x.find('option',selected=True) or x.find('option')
        d[x['name']]=selected.get('value','')
    return d

def read_page(html):
    soup=BeautifulSoup(html,'html.parser');table=soup.find('table',id='ctl04_gvDecisions');rows=[]
    if table is None:raise RuntimeError('Official opinion result table missing; do not interpret retrieval failure as zero results')
    if table:
        for tr in table.find_all('tr',recursive=False):
            td=tr.find_all('td',recursive=False)
            if len(td)!=7 or not td[1].find('span',id=re.compile('lblCitationNum')):continue
            link=td[0].find('a',href=True)
            cells=[x.get_text(' ',strip=True) for x in td]
            rows.append(dict(zip(['caseName','citation','filingDate','court','decisionType','status','notes'],cells),url=urljoin(BASE,link['href']) if link else None))
    pages=[]
    if table:
        for a in table.select('a[href]'):
            m=re.search(r"'Page\$(\d+)'",a['href'])
            if m:pages.append(int(m[1]))
    current=1
    if table:
        pager=table.find('table')
        if pager:
            for span in pager.find_all('span'):
                if span.get_text(strip=True).isdigit():current=int(span.get_text(strip=True))
    return soup,rows,sorted(set(pages)),current

def query_index(query,court='',all_pages=False,max_pages=100):
    session=requests.Session();response=session.get(URL,timeout=45);response.raise_for_status();soup=BeautifulSoup(response.text,'html.parser')
    d=form_data(soup);d.update({'__EVENTTARGET':'ctl00$ctl04$btnSearch','__EVENTARGUMENT':'','ctl00$ctl04$txtFilterName':query,'ctl00$ctl04$ddlFilterFilingDate':'Search All Years','ctl00$ctl04$ddlFilterCourtType':court})
    response=session.post(URL,data=d,timeout=45);response.raise_for_status();soup,rows,pages,current=read_page(response.text)
    results=list(rows);page_audit=[{'page':current,'rows':len(rows),'sha256':hashlib.sha256(response.content).hexdigest()}]
    while all_pages and any(p>current for p in pages) and len(page_audit)<max_pages:
        next_page=min(p for p in pages if p>current);d=form_data(soup);d.update({'__EVENTTARGET':'ctl00$ctl04$gvDecisions','__EVENTARGUMENT':f'Page${next_page}'})
        time.sleep(.3);response=session.post(URL,data=d,timeout=45);response.raise_for_status();soup,rows,pages,current=read_page(response.text)
        if current!=next_page:raise RuntimeError(f'Pagination did not reach {next_page}; got {current}')
        results.extend(rows);page_audit.append({'page':current,'rows':len(rows),'sha256':hashlib.sha256(response.content).hexdigest()})
    return {'sourceUrl':URL,'retrievedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'query':query,'courtFilter':court or 'Search All','filingDateFilter':'Search All Years','completePagination':not any(p>current for p in pages),'pages':page_audit,'resultCount':len(results),'interpretation':'Search hits only, not verified judge rulings. Review the actual decision and distinguish trial judge, author, concurrence, dissent, party/attorney, and cited precedent. No hits does not mean no rulings.','results':results}

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--query',required=True);p.add_argument('--court',default='');p.add_argument('--all-pages',action='store_true');p.add_argument('--max-pages',type=int,default=100);p.add_argument('--output',required=True);a=p.parse_args();result=query_index(a.query,a.court,a.all_pages,a.max_pages);out=Path(a.output);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n',encoding='utf8');print(json.dumps({k:result[k] for k in ['query','resultCount','completePagination','pages']},indent=2))
