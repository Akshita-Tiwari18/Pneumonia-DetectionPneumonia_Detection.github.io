document.getElementById('upload-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview');
    const resultDiv = document.getElementById('result');

    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        // Corrected the innerHTML assignment
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;

        setTimeout(() => {
            // Mock result for pneumonia detection
            const mockResult = Math.random() < 0.5 ? "No Pneumonia Detected" : "Pneumonia Detected";
            resultDiv.innerText = mockResult;
        }, 1000);
    };

    reader.readAsDataURL(file);
});
