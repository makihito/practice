text = """おはよう
こんにちは
こんばんは
"""
with open('hello.txt','w',encoding='utf-8') as file:
  file.write(text)

# file.close()
# withを使うといらない

