from glob import glob
import os
import shutil


files = glob("/Users/maetaakihito/Downloads/*.csv")

sorted_ files = sorted(files,key=os.path.getmtime)

shutil.move(sorted_files[-1],os.getcwd())