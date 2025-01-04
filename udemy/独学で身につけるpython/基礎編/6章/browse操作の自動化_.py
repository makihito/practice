import pandas as pd
import matplotlib.pyplot as plt
# %ma^12wtplotlib.inline


# dはhデータフレームの略
df = pd.read_csv("/Users/maetaakihito/programing/github/udemy/独学で身につけるpython基礎編/6章/newly_confirmed_cases_daily (1).csv")

# df["ALL"].sum()

# df["ALL"].mean()

# df["ALL"].max()

# df["ALL"].idxmax()

# df.iloc[358,0]

plt.bar(df.index,df["ALL"])