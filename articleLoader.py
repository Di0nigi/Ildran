from docx import Document
import unicodedata as ud


def loadAndPrint(path):
    s=""
    with open(path, mode="r",encoding="utf-8") as f:
        for line in f:
            for elem in line:
                s+=elem
    return s

#print(loadAndPrint("exampleArticle.txt"))

def convertDocs(ogFile, dsFile):
    d= Document(ogFile)
    with open(dsFile,mode="w",encoding="utf-8") as f:
        for paragraph in d.paragraphs:
            pNormal= ud.normalize("NFKC",paragraph.text)
            pNormal= ud.normalize("NFC",pNormal)
            f.write(pNormal)
            f.write("\n")

        
        



    return



convertDocs("articles\SampleArticle.docx","articles\SampleArticle.txt")