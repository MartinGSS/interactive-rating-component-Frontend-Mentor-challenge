function submit() {
    if (document.getElementById('rating-selected').innerHTML != ''){
        document.getElementById('rating-container').style.display = 'none';
        document.getElementById('thanks-container').style.display = 'flex';
        console.log(document.activeElement)
    }
}

function rating(n) {
    if (document.getElementById('rating-selected').innerHTML != '') {
        document.getElementById(document.getElementById('rating-selected').innerHTML).style.backgroundColor = '#2E3845';
        document.getElementById(document.getElementById('rating-selected').innerHTML).style.color = 'hsl(217, 12%, 63%)';  
    }
    document.getElementById(n).style.backgroundColor = 'hsl(25, 97%, 53%)';
    document.getElementById(n).style.color = '#ffffff';
    document.getElementById('rating-selected').innerHTML = n
}