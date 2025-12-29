// Search Function
function searchImage() {
    let filter = document.getElementById('searchBox').value.toLowerCase();
    let cards = document.querySelectorAll('.image-card');

    cards.forEach(card => {
        let name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(filter) ? "block" : "none";
    });
}

// View Image Function
function viewImage(src) {
    document.getElementById('imageModal').style.display = "block";
    document.getElementById('fullImage').src = src;
}

// Close Modal Function
function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}