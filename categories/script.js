var column = document.getElementById('column');
var row = document.getElementById('row');
var card_row = document.getElementById('card-row');
var card_column = document.getElementById('card-column');

column.addEventListener('click', function(){
    card_column.style.display = 'block';
    card_row.style.display = 'none';
    card_row.classList.remove('d-none')
    column.style.color='#CAA46A'
    row.style.color='#000'

});
row.addEventListener('click', function(){
    card_column.style.display = 'none';
    card_row.style.display = 'block';
    card_row.classList.remove('d-none')
    column.style.color='#000'
    row.style.color='#CAA46A'



});