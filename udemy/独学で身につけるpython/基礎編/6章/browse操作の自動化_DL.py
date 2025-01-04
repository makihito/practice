from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()
browser.get("https://www.mhlw.go.jp/stf/covid-19/open-data.html")

yousei = browser.find_element(By.XPATH,"/html/body/div[1]/main/div[2]/div/div/div[2]/div/strong/span/a[1]")

yousei.click()

