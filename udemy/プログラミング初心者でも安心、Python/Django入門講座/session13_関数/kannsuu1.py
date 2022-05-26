import numbers


def create_int_list(numbers=[]):
    for i in range(10):
        numbers.append(i)
    return numbers

numbers = create_int_list([1,2,3])
print(numbers)

num = 1

def test():
    global num    #グルーバル変数の書き換えを宣言した
    num = 100
    print(num)

print(num)
test()
print(num)
