from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()

browser.get("https://www.yahoo.co.jp/")

box = browser.find_element(By.NAME,"p")
box.send_keys("python")

serch_button = browser.find_element(By.XPATH,"/html/body/div[1]/div[1]/header/section[1]/div/form/fieldset/span/button")

serch_button.click()

browser.close()