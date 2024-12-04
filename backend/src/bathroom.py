from enum import Enum

class Gender(Enum):
    Male = 0,
    Female = 1,
    Family = 2,
    Unisex = 3

class Bathroom:
    def __init__(self, id = 0, address = '', gender: Gender = Gender.Male, id_access = False, numb_stalls = 0,
                 numb_urinals = 0, water_fountain = False, bottle_filler = False, needs_payment = False,
                 rating = False, ada_access = False, diaper_change = False) -> None:
        self.id = id
        self.address = address
        self.gender = gender
        self.id_access = id_access
        self.numb_stalls = numb_stalls
        self.numb_urinals = numb_urinals
        self.water_fountain = water_fountain
        self.bottle_filler = bottle_filler
        self.needs_payment = needs_payment
        self.rating: float = rating
        self.ada_access = ada_access
        self.diaper_change = diaper_change

    def serialize(self) -> dict:
        bathroom_body = {
            "id" : self.id,
            "address" : self.address,
            "gender" : self.gender.name,
            "id_access" : self.id_access,
            "numb_stalls" : self.numb_stalls,
            "numb_urinals" : self.numb_urinals,
            "water_fountain" : self.water_fountain,
            "bottle_filler" : self.bottle_filler,
            "needs_payment" : self.needs_payment,
            "rating" : self.rating,
            "ada_access" : self.ada_access,
            "diaper_change" : self.diaper_change
        }
        return bathroom_body