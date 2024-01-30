import datetime
from collections import Counter,defaultdict,OrderedDict
from pathlib import Path
import shutil

# datetimeモジュールの使い方
# 現在時刻の表示する
now = datetime.datetime.now()
print(now)

# 自分で日時を決める
date = datetime.datetime(year=2022,month=5,day=15,hour=22,minute=5,second=5)
print(date)

#n日後に進む,b.tex
delta = datetime.timedelta(days=3)
print(date + delta)

# collectionモジュールの使い方
# counterメソッド　リスト内の要素の数を数える

my_list = [1,1,1,5,1,2,5,1]
counter = Counter(my_list)
print(counter.most_common(2))
 
# dictメソッドの使い方 辞書のデフォルト値を入れられる。
# my_dict = defaultdict(int)
# print(my_dict['narito'])

my_dict = OrderedDict()
my_dict['food'] = 'カレー'
my_dict['juice'] = 'コーラ'

for key,value in my_dict.items():
    print(key,value )
    
# pathlibモジュールの使い方　ファイルパスを表示する

current = Path()
for path in current.iterdir():
    print(path.resolve)

shutil.copytree('A','a.txt')
shutil.mode('a.txt')