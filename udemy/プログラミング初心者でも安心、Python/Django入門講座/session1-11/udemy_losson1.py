from email import message
from operator import index


names = ['田中','鈴木','さという']
for index,name in enumerate(names):
		message = '{0}番目{1}'.format(index,name)
		print(message)
  
foods = ('納豆','ヨーグルト','チャーハン')
juices = ('コーラ','コーヒー','カフェラテ')

for food,juice in zip(foods,juices):
		print(food,juice)