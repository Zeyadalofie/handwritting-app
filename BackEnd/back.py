from flask import Flask, request, jsonfly
from PIL import Image
from tensorflow.python.keras.models import load_model
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonfly({'error' : 'No image uploaded'}), 400
    
    file = request.files['image']
    img = Image.open(file.stream)


    model = load_model('E:/Project/HandWritting/TheGoodHW_Version/HandWriting_model.h5')
    prediction = model.predict(img)


    return jsonfly({'prediction' : 'handwritten text'})


if __name__ == '__main__':
    app.run(debug=True)
