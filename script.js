document.getElementById('dataEntryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect data
    let data = {
        entry1: document.getElementById('entry1').value,
        entry2: document.getElementById('entry2').value,
        entry3: document.getElementById('entry3').value,
        entry4: document.getElementById('entry4').value,
        entry5: document.getElementById('entry5').value
    };

    // Save data to local storage
    localStorage.setItem('data', JSON.stringify(data));

    // Display saved data
    displayData();
});

function displayData() {
    let savedData = JSON.parse(localStorage.getItem('data')) || {};
    document.getElementById('savedData').textContent = JSON.stringify(savedData, null, 2);
}

// Initial display of data
displayData();
