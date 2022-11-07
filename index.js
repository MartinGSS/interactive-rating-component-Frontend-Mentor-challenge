function submit() {
    if (document.getElementById('rating-selected').innerHTML != ''){
        document.getElementById('rating-container').style.display = 'none';
        document.getElementById('thanks-container').style.display = 'flex';
    }
}

function rating(n) {
    if (document.getElementById('rating-selected').innerHTML != '') {
        document.getElementById(document.getElementById('rating-selected').innerHTML).classList.remove('selected-button'); 
    }
    document.getElementById(n).classList.add('selected-button');
    document.getElementById('rating-selected').innerHTML = n
}