from email import message
from tkinter.simpledialog import askinteger


def hello(name):
  message = '{0}さん、こんにちは'.format(name)
  print(message)

hello('aki')

def check_name(name):
    if len(name) >= 6:
        return True
    else:
        return False

# name = input()
# result = check_name(name)
# if result:
#     print('登録完了')
# else:
#     print('名前が短い')


def hello(text,name = '匿名'):  #デフォルト値を匿名とする。デフォルト引数は後ろにする。

    print(name,text)

hello(text='お￥こんにちは')
hello(name='aki',text= 'konbanha')

def hello(*args,**kwargs):
  print(args,kwargs)

hello()
hello('こんにちは',a=1)
hello('こんばんは','haro-','aaaa',a=1,b=2,c=3)


