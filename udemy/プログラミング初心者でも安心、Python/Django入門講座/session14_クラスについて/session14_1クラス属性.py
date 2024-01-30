class A:
    def __init__(self, ):
        self.number = 10
        
        
class B:
    number = 10
    
a = A()
print(a.number)

b = B()
print(b.number)

b1 = B()
b2 = B()
B.number = 100
b1.number = 2
print(B.number,b1.number,b2.number)