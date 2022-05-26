import numbers


numbers = [1,5,6,8,7,4,3]
squares = [num**2 for num in numbers ]
print(squares)

words = ['python','ruby','html']
upper_words = {word.upper() for word in words}
print(upper_words)

even_numbers = [x for x in range(1,11) if x % 2 != 0]
print(even_numbers)

table = [[0 for x in range(5)] for y in range(5)]
print(table)

sets = {x for x in range(10)}
print(sets)

dicts = {x:'デフォ' for x in range(10)
    }
print(dicts)

score = {'math':80,'eng':20}
new_score = {value:key for key,value in score.items()}
print(new_score)

square_gen = (num**2 for num in numbers)
print(square_gen)
# ジェネレータ方式 