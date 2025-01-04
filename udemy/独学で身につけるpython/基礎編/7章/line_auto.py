token = "9Tk38UCfCPQtZqRLKpCyvffJQGmaltKVgaWLbP8sV2u"
url = "https://notify-api.line.me/api/notify"

import requests
# leneトークンを入力してメッセージを表示させる

from bs4 import BeautifulSoup

tenki_url = "https://weather.yahoo.co.jp/weather/jp/13/4410.html"
response = requests.get(tenki_url)
# response.text
html = BeautifulSoup(response.text,"html.parser")

forecast = html.find_all("div",attrs={"class":"forecastCity"})[0]

tommorow = forecast.find_all("div")[1]

whether =  tommorow.find_all("p",attrs={"class","pict"})[0].text.replace("\n","").replace(" ","")

high = tommorow.find_all("li")[0].text
low = tommorow.find_all("li")[1].text

tommorow.find_all("td")


rain_06 = tommorow.find_all("td")[4].text

rain_612 = tommorow.find_all("td")[5].text


rain_1218 = tommorow.find_all("td")[6].text

rain_1824 = tommorow.find_all("td")[7].text

message = """
明日の天気は{}
最高気温は{}
降水確率は
0-6時:{}
6-12時:{}
12-18時:{}
18-24時:{}
""".format(whether,high,low,rain_06,rain_1218,rain_1824,rain_1824)

auth = {"Authorization":"Bearer "+token}
content = {"message":message}

requests.post(url,headers=auth,data=content)

