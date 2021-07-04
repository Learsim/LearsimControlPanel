from bs4 import BeautifulSoup
import json
simvarFile = open("./simvars.html")
simVarText = simvarFile.read()
bsoup = BeautifulSoup(simVarText,features="html.parser")
simVars = bsoup.find_all("tr")
simvarsobject = []
for i in range(1,len(simVars)):
    simvarsobject.append({"simvar":str(simVars[i].find_all("td")[0].find("code").contents[0]),"desc":str(simVars[i].find_all("td")[1].contents[0]),"units" : str(simVars[i].find_all("td")[2].contents[0]),"type":str(simVars[i].find_all("td")[3].contents[0])})

f = open("simvarsout.json", "a")
f.write(json.dumps(simvarsobject))
f.close()