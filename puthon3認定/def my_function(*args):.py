def my_function(*args):
    for arg in args:
        print(arg)

my_function(1,2,)
my_function(1, 2, 3)
my_function("hello", "world")

def my_function(**kwargs):
    for key, value in kwargs.items():
        print(key, value)

my_function(name="Alice", age=25)
my_function(city="Tokyo", country="Japan", population=13929286)
