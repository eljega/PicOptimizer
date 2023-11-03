from flask import Flask, request, render_template, send_file
from PIL import Image
import io
import base64
import os




app = Flask(__name__, static_url_path='/static')

from PIL import Image

@app.route('/', methods=['GET', 'POST'])
def upload_and_process_image():
    original_image = None
    processed_image = None
    processed_format = None
    download_url = None
    original_size_kb = None
    converted_size_kb = None
    reduction_percentage = None

    if request.method == 'POST':
        if 'file' not in request.files:
            return "No file part"

        file = request.files['file']

        if file:
           
            original_size = request.content_length

            
            img_stream = io.BytesIO(file.read())
            img = Image.open(img_stream)
            

           
            img = img.convert('RGBA')

            original_buffer = io.BytesIO()
            img.save(original_buffer, format='PNG')
            original_image = base64.b64encode(original_buffer.getvalue()).decode()

           
            output_format = request.form['output_format']
            quality = int(request.form['quality'])

            # Guardar la imagen procesada en memoria
            output_buffer = io.BytesIO()

            if output_format == 'jpeg':
                # Si el formato de salida es JPEG, convierte a modo RGB antes de guardar
                img = img.convert('RGB')
            
            if output_format == 'png':
                img.save(output_buffer, output_format, optimize=True)
            else:
                img.save(output_buffer, output_format, quality=quality)

           
            processed_image = base64.b64encode(output_buffer.getvalue()).decode()
            processed_format = output_format

           
            converted_size = output_buffer.tell()

            original_size_kb = round(original_size / 1024, 2)  
            converted_size_kb = round(converted_size / 1024, 2) 

            if original_size > 0:  
                reduction_percentage = round(((original_size - converted_size) / original_size) * 100, 2)

          
            download_url = f"data:image/{output_format};base64,{processed_image}"
    
    return render_template('upload.html', original_image=original_image, processed_image=processed_image, processed_format=processed_format, download_url=download_url, original_size=original_size_kb, converted_size=converted_size_kb, reduction_percentage=reduction_percentage)


port = int(os.environ.get('PORT', 8080))
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=os.environ.get('DEBUG', False))
