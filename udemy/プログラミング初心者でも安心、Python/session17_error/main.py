# 例外時のtry~exceptのエラー処理

your_input = input('数字を入れて＞')
try:
    number = int(your_input)
    print(10/number)
except ValueError:
    print('文字が入力された')
except ZeroDivisionError:
    print('0はダメです')
except:
    print('それ以外のエラー')

try:
    file = open('hello.txt','x',encoding='etf-8')
except FileExistsError:
    print('ファイルが存在しています')
else:
    file.write('hello')
finally:
    file.close()