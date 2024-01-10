var addBtn = document.getElementById('add');

var remBtn = document.querySelector('remove');

var blk = document.getElementById('container');

addBtn.addEventListener('click', function() {
    blk.classList.add('yellow');
});
remBtn.addEventListener('click', function() {
    blk.classList.remove('white');
});