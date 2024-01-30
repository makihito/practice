class A:
    def __init__(self, ):
        self._value = 1    # _を頭にいるといじってほしくないという意味
        self.__info = 2    # __とするとクラスの外からアクセスできなくなる。
