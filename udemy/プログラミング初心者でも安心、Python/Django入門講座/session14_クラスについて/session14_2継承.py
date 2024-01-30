# クラスの定義
import profile


class Character:
    def __init__(self,name):
      self.name = name
    def show_profile(self):
        profile = '名前:{0} 種族:Character'.format(self.name)
        print(profile)
# 継承する
class Monster(Character):
    def __init__(self,name):
        self.name = name
        self.hp = 20
    def show_profile(self):
        profile = '名前:{0} 種族:Character HP:{1}'.format(self.name,self.hp)
        print(profile) 


char_a = Character('キャラA')
print(char_a.name)

monster_a = Monster('モンスターA')
print(monster_a.name)
monster_a.show_profile( )