from bs4 import BeautifulSoup
import requests
import json

def import_colors():
    "Returns an array containing all colors listed on Wikipedia page"
    try:
        r = requests.get(f"https://fr.wikipedia.org/wiki/Liste_de_noms_de_couleur")
    except:
        print("Aucune connexion Internet")
        exit()
        
    if r.status_code != 200:
        print(f"Erreur HTTP : {r.status_code}")
        exit()
    
    html = r.text
    soup = BeautifulSoup(html, features="html.parser")
    
    names = []
    hexas = []
    
    rows = soup.find("table").find("tbody").find_all("tr")

    for row in rows:
        cells = row.find_all("td")
        if len(cells) == 0:
            continue
        name = cells[0].get_text()
        hexa = cells[1].get("bgcolor")

        names.append(name)
        hexas.append(hexa)

    result = {}
    i = 0
    while i < len(names):
        result[names[i]] = hexas[i]
        i += 1

    print(result)
    file = open("colors.json", "w+")
    json.dump(result, file)

import_colors()