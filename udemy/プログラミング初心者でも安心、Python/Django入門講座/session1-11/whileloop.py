
count = 0
while count < 10:
  print(count)
  count += 1

while True:
  user_input = input()
  if user_input == 'exit':
    break
  elif user_input == 'skip':
    continue
  message = 'あなたの入力は{0}でした'.format(user_input)
  print(message)
  
names = ['田中太郎','佐藤次郎','鈴木一郎']
is_found = False
for name in names:
    if name.endswith('一郎'):
        is_found = True

if is_found:
    print('いました')
else:
  print('いません')

