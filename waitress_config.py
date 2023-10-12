# gunicorn_config.py
from waitress import serve
from app import app  # Asegúrate de que app importa tu aplicación Flask


serve(app, host="0.0.0.0", port=8080)
