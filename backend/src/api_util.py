from flask import Flask, jsonify
from flask_cors import CORS

from src.bathroom import Bathroom
from src.db_util import get_pins, get_bathroom

app = Flask(__name__)
CORS(app)

@app.route('/pins', methods=['GET'])
def pins():
    try:
        index = 0
        out = {}
        for pin in get_pins():
            out[index] = pin.serialize()
            index += 1

        return jsonify(out), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500



@app.route('/bathroom/<int:pin_id>', methods=['GET'])
def bathroom(pin_id):
    try:
        return jsonify(get_bathroom(pin_id).serialize()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
