import json
import re
import requests
import time
import hmac
import hashlib
import base64
import datetime

# Credenciales para la API de Amazon Product Advertising
ACCESS_KEY = 'AKIAIUMCZYMWBF6S374Q'
SECRET_KEY = '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'
PARTNER_TAG = 'lakastron-21'
REGION = 'eu-west-1'
ENDPOINT = 'webservices.amazon.es'
SERVICE = 'ProductAdvertisingAPI'

# Función para firmar la solicitud (AWS Signature Version 4)
def sign(key, msg):
    return hmac.new(key, msg.encode('utf-8'), hashlib.sha256).digest()

def get_signature_key(key, date_stamp, region_name, service_name):
    k_date = sign(('AWS4' + key).encode('utf-8'), date_stamp)
    k_region = sign(k_date, region_name)
    k_service = sign(k_region, service_name)
    k_signing = sign(k_service, 'aws4_request')
    return k_signing

# Función para hacer la solicitud a la API de Amazon
def hacer_solicitud_paapi(asin):
    host = ENDPOINT
    endpoint = f"https://{host}/paapi5/getitems"

    # Parámetros de la solicitud
    payload = {
        "ItemIds": [asin],
        "Resources": ["Offers.Listings.Price"],
        "PartnerTag": PARTNER_TAG,
        "PartnerType": "Associates",
        "Marketplace": "www.amazon.es"
    }

    # Fecha y hora
    t = datetime.datetime.utcnow()
    amz_date = t.strftime('%Y%m%dT%H%M%SZ')
    date_stamp = t.strftime('%Y%m%d')

    # Crear el contenido de la solicitud
    canonical_uri = '/paapi5/getitems'
    canonical_querystring = ''
    canonical_headers = f'content-encoding:amz-1.0\nhost:{host}\nx-amz-date:{amz_date}\nx-amz-target:com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems\n'
    signed_headers = 'content-encoding;host;x-amz-date;x-amz-target'
    payload_hash = hashlib.sha256(json.dumps(payload).encode('utf-8')).hexdigest()

    canonical_request = f'POST\n{canonical_uri}\n{canonical_querystring}\n{canonical_headers}\n{signed_headers}\n{payload_hash}'

    algorithm = 'AWS4-HMAC-SHA256'
    credential_scope = f'{date_stamp}/{REGION}/{SERVICE}/aws4_request'
    string_to_sign = f'{algorithm}\n{amz_date}\n{credential_scope}\n{hashlib.sha256(canonical_request.encode("utf-8")).hexdigest()}'

    signing_key = get_signature_key(SECRET_KEY, date_stamp, REGION, SERVICE)
    signature = hmac.new(signing_key, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()

    authorization_header = f'{algorithm} Credential={ACCESS_KEY}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}'

    headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Amz-Date': amz_date,
        'Authorization': authorization_header,
        'Content-Encoding': 'amz-1.0',
        'X-Amz-Target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems',
        'Host': host,
    }

    # Hacer la solicitud a la API
    response = requests.post(endpoint, headers=headers, json=payload)
    
    if response.status_code == 200:
        json_response = response.json()
        
        # Verificar que la respuesta tiene Items y Offers disponibles
        items = json_response.get("ItemsResult", {}).get("Items", [])
        if items and 'Offers' in items[0]:
            listings = items[0].get("Offers", {}).get("Listings", [])
            if listings:
                # Retornar el precio formateado (DisplayAmount)
                return listings[0].get("Price", {}).get("DisplayAmount", "No price available")
            else:
                return "No listings available"
        else:
            return "No offers available or item not found"
    else:
        print(f"Error en la solicitud de la API: {response.status_code}, {response.text}")
        return None

# Función para extraer el ASIN (itemID) de la URL ampliada
def obtener_asin(url):
    # Usar una expresión regular para encontrar el ASIN (10 caracteres alfanuméricos)
    match = re.search(r'/([A-Z0-9]{10})(?:[/?]|$)', url)
    if match:
        return match.group(1)
    return None

# Función para recorrer el JSON, obtener el itemID y actualizar el campo precio
def extraer_itemid_y_actualizar_precio(diccionario):
    for key, value in diccionario.items():
        if isinstance(value, dict):
            extraer_itemid_y_actualizar_precio(value)
        elif isinstance(value, list):
            for item in value:
                if isinstance(item, dict):
                    extraer_itemid_y_actualizar_precio(item)
        elif key == 'urlAmpliada':  # Si existe la clave 'urlAmpliada'
            itemid = obtener_asin(value)
            if itemid:
                print(f"ItemID (ASIN) encontrado: {itemid}")
                # Mostrar el precio actual de la base de datos
                precio_actual = diccionario.get('precio', 'No price available')
                print(f"Precio actual en la DB: {precio_actual}")
                
                # Hacer la solicitud a la API de Amazon para obtener el precio
                precio_actualizado = hacer_solicitud_paapi(itemid)
                time.sleep(2)  # Pausa de 2 segundos para evitar problemas con la tasa de solicitud

                # Si la respuesta no es "No offers available or item not found", actualizamos el precio
                if precio_actualizado and precio_actualizado not in ["No offers available or item not found", "No listings available"]:
                    print(f"Nuevo precio desde la API: {precio_actualizado}")
                    # Actualizar el campo 'precio' en el diccionario
                    diccionario['precio'] = precio_actualizado
                    print(f"Precio actualizado de {precio_actual} a {precio_actualizado}")
            else:
                print(f"No se encontró un ASIN en la URL: {value}")

# Cargar el archivo JSON
json_file_path = 'src/data/DBAmazon.json'
with open(json_file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extraer el itemID y actualizar el precio de las URLs ampliadas
extraer_itemid_y_actualizar_precio(data)


# Guardar el JSON actualizado, reemplazando el archivo original
with open(json_file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("Actualización completada. El archivo JSON original ha sido sobrescrito con los precios actualizados.")
