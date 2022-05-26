import numbers
# デコレーターについて

def decorator(function):
    print('decorator')
    return function

@decorator
def sey_hello():
    print('hello')

# sey_hello = decorator(sey_hello)
sey_hello()

# ジェネレーターについて
def make_squares(n):
    for i in range(1,n+1):
      yield i**2

suqares = make_squares(10)
for i in suqares:
    print(i)


def my_range(start,end,step):
    current_number = start
    while current_number < end:
      yield current_number
      current_number += step

for i in my_range(1,10,0.1):
    print(i)


# ラムダ関数について　

# def my_sort(string):
#     return string[-1]

my_list = ['python','django','tkinter','kivy']
my_list.sort(key=lambda tpl:tpl[-1])
print(my_list)

# lamda 引数：返す値

numbers = [1,2,3,4,5]
for num in map(lambda num:num**2,numbers):
    print(num)