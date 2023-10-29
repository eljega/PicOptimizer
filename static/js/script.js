document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const originalImage = document.getElementById('originalImage');
    const qualityInput = document.getElementById('quality');
    const formatSelect = document.getElementById('format');
    const convertButton = document.getElementById('convertButton');
    const downloadLink = document.getElementById('downloadLink');
    const modifiedImageContainer = document.getElementById('modifiedImageContainer');
    const modifiedImage = document.getElementById('modifiedImage');

  
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            originalImage.src = e.target.result;
            modifiedImageContainer.style.display = 'none';
        };

        reader.readAsDataURL(file);
    });

   
    convertButton.addEventListener('click', function () {

        modifiedImageContainer.style.display = 'block';
        downloadLink.style.display = 'block';
    });

 
    downloadLink.addEventListener('click', function () {
   
    });
});

