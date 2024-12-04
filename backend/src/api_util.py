from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/pins', methods=['GET'])
def pins():
    return

@app.route('/bathroom/<int:pin_id>', methods=['GET'])
def bathroom(pin_id):
    return