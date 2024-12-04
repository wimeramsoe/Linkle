from pymongo import MongoClient

from src.bathroom import Bathroom, Gender
from src.pin import Pin

connection_string = "mongodb+srv://gagnonl_mongo:plzdonothack@cluster0.wxqwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(connection_string)
db = client.get_database("linkle")
bathrooms = db.get_collection("bathrooms")

def get_bathroom(id) -> Bathroom:
    doc = bathrooms.find_one({"bathroom_id": id})
    return Bathroom(
        doc["bathroom_id"],
        doc["address"],
        Gender[doc["gender"]],
        doc["id_access"],
        doc["numb_stalls"],
        doc["numb_urinals"],
        doc["water_fountain"],
        doc["bottle_filler"],
        doc["needs_payment"],
        doc["rating"],
        doc["ada_access"],
        doc["diaper_change"]
    )


def get_pins() -> list:
    pins = list()
    for doc in bathrooms.find():
        pins.append(Pin(
            doc["bathroom_id"],
            doc["name"],
            doc["lat"],
            doc["lng"]
        ))
    return pins

def main():
    pins = get_pins()
    for item in pins:
        print(item.serialize())

    print(get_bathroom(2).serialize())

if __name__ == "__main__":
    main()

