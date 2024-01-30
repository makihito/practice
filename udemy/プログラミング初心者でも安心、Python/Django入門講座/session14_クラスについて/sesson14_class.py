class Student:
  def __init__(self,name):
      self.name = name
      self.score = {}
  def add_score(self,subject_name,point):
      self.score[subject_name] = point

  def get_score(self,subject_name):
      return self.score.get(subject_name,'その強化はまだ')


narito = Student('narito')
narito.add_score('math',50)

saitou = Student('narito')
saitou.add_score('math',100)

print(narito.score)
print(saitou.score)