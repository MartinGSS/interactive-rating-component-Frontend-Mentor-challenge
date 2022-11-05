 function submit() {
    document.getElementById('rating-container').style.display = 'none';
    document.getElementById('thanks-container').style.display = 'flex';
}

function rating(n) {
    let rating = 0;
    document.getElementById('rating-selected').innerHTML = n
}