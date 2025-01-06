def loadAndPrint(path):
    s=""
    with open(path, mode="r",encoding="utf-8") as f:
        for line in f:
            for elem in line:
                s+=elem
    return s

print(loadAndPrint("exampleArticle.txt"))



