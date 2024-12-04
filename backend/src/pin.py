class Pin:
    def __init__(self, id: int, name: str, lat: float, long: float) -> None:
        self.id = id
        self.name = name
        self.lat = lat
        self.long = long

    def serialize(self) -> dict:
        pin_body = {
            'id': self.id,
            'name': self.name,
            'lat': self.lat,
            'long': self.long
        }
        return pin_body