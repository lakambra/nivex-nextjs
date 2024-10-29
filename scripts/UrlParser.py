import json
import requests
import time  # Importar el módulo para agregar retrasos

# URL base de la API y token (reemplaza con tu token)
#posibles tokens
#OuvGBfXjGbfRbvqSVr2bHgjEbGLeI4c5XHsuPZqy

#yH10zoztNeMTmrW1Eir4Yb3fCa10CBhhwgNIRA42

#6vRgOkvB5ux8TuTFagQYNNsQGMvz72PRAPJdAq8G

#LrUTuO25vhF675FnqlJlnigrKMs9KYddTgkVQHwd
api_url = "https://onesimpleapi.com/api/unshorten"
token = "LrUTuO25vhF675FnqlJlnigrKMs9KYddTgkVQHwd"

# Función para extraer enlaces y agregar urlAmpliada
def extraer_y_actualizar_enlaces(diccionario):
    # Crear una lista de claves para evitar modificar el diccionario durante la iteración
    keys = list(diccionario.keys())
    
    for key in keys:
        value = diccionario[key]
        if isinstance(value, dict):
            extraer_y_actualizar_enlaces(value)
        elif isinstance(value, list):
            for item in value:
                if isinstance(item, dict):
                    extraer_y_actualizar_enlaces(item)
        elif key in ['linkAmazon', 'linkProductoAmazon']:  # Buscar las claves con los enlaces
            # Verificar si ya existe 'urlAmpliada', si es así no hacer la petición
            if 'urlAmpliada' not in diccionario:
                # Hacer la petición a la API para descomprimir el enlace
                params = {
                    "token": token,
                    "url": value
                }
                response = requests.get(api_url, params=params)
                if response.status_code == 200:
                    # Añadir un nuevo campo "urlAmpliada" con la URL descomprimida
                    diccionario['urlAmpliada'] = response.text.strip()  # La respuesta de la API es un texto plano (URL)
                    #time.sleep(5)
                    print("esperando 5 segundos")  # Pausa para evitar el error 429
                else:
                    print(f"Error al descomprimir el enlace {value}, código de error: {response.status_code}")
                    #time.sleep(5)

# Cargar el archivo JSON
with open('src/data/DBAmazon.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Actualizar el JSON con los nuevos campos urlAmpliada
extraer_y_actualizar_enlaces(data)

# Guardar el JSON actualizado con los campos 'urlAmpliada'
with open('src/data/DBAmazon2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("Actualización completada. JSON guardado en 'DBAmazon_actualizado.json'.")
