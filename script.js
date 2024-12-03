document.getElementById('removeButton').addEventListener('click', () => {
    const colorSelect = document.getElementById('colorSelect');

    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    if (selectedOption) {
        // Remove the selected option
        colorSelect.remove(colorSelect.selectedIndex);
    } else {
        alert('No color selected to remove.');
    }
});
