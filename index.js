

var keyRow = document.querySelector('.keyrow');

var whiteKeys = keyRow.querySelectorAll('.key');
var blackKeys = keyRow.querySelectorAll('.blackKey');


function pressedCallback(e) {
    var key = e.target;
    key.classList.add('pressed');
}


function enterCallback(e) {
    if (e.buttons === 1) {
        pressedCallback(e);
    }
}

function releasedCallback(e) {
    var key = e.target;
    key.classList.remove('pressed');
}





function addListeners() {
    whiteKeys.forEach(function (key) {
        key.draggable = false;
        key.addEventListener('mousedown', pressedCallback);
        key.addEventListener('mouseenter', enterCallback);
        key.addEventListener('mouseup', releasedCallback);
        key.addEventListener('mouseleave', releasedCallback);
    });

    blackKeys.forEach(function (key) {
        key.draggable = false;
        key.addEventListener('mousedown', pressedCallback);
        key.addEventListener('mouseenter', enterCallback);
        key.addEventListener('mouseup', releasedCallback);
        key.addEventListener('mouseleave', releasedCallback);
    });
}

addListeners();