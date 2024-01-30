color = 'red'

if color == 'red' :
  print('赤です')
elif color == 'blue':
		print('青です')
elif color == 'white':
		print('しろです')
else:
		print('その他の色')

numbers = [1,2,3,4,]

if 1 in numbers:
		print('1あり')

if not 200 in numbers:
  	print('なし')

names = ['佐藤','吉田','鈴木']

if names:
  print(names[0])
else:
		print('からでした')
  
for name in names:
		for char in name:
			print(char)

band_members = {'ボーカル':'佐藤','ギター':'鈴木'}

for part in band_members:
		name = band_members[part]
		message = '{0}は{1}さん'.format(name,part)
		print(message)