document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const originalImage = document.getElementById('originalImage');
    const qualityInput = document.getElementById('quality');
    const formatSelect = document.getElementById('format');
    const convertButton = document.getElementById('convertButton');
    const downloadLink = document.getElementById('downloadLink');
    const modifiedImageContainer = document.getElementById('modifiedImageContainer');
    const modifiedImage = document.getElementById('modifiedImage');

    // Función para cargar la imagen seleccionada por el usuario
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            originalImage.src = e.target.result;
            modifiedImageContainer.style.display = 'none';
        };

        reader.readAsDataURL(file);
    });

    // Función para convertir la imagen
    convertButton.addEventListener('click', function () {
        // Implementa la lógica para la conversión de imágenes aquí
        // Asegúrate de mostrar la imagen modificada y el enlace de descarga
        // después de la conversión.
        modifiedImageContainer.style.display = 'block';
        downloadLink.style.display = 'block';
    });

    // Función para actualizar el enlace de descarga
    downloadLink.addEventListener('click', function () {
        // Implementa la lógica para la descarga de la imagen modificada aquí
    });
});

