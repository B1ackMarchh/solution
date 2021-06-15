let textSize = document.getElementsByClassName('box__item');
let showHead = document.getElementsByClassName('header');
let textChangeColor = document.getElementsByClassName('header__label');

function randomC() {
    return Math.floor(Math.random() * 256);
}

function setBackgroundColor() {
    document.body.style.backgroundColor =
        "rgb(" + randomC() + "," + randomC() + "," + randomC() + ")";

}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "rgb(17, 160, 160)";
}

function resizeTextEl(textBox) {
    if (textBox.checked) {
        for (var i = 0; i < 4; i++) {
            textSize[i].classList.add('grow-size');
        }
    } else {
        for (var i = 0; i < 4; i++) {
            textSize[i].classList.remove('grow-size');
        }
    }
};

function сolorСhanger(boxEl) {
    if (boxEl.checked) {
        setBackgroundColor();
    } else {
        resetBackgroundColor();
    }
};



function hederAder(head) {
    if (head.checked) {
        showHead[0].classList.add('show-head');
        textChangeColor[0].classList.add('transparent-color');
    } else {
        showHead[0].classList.remove('show-head');
        textChangeColor[0].classList.remove('transparent-color');
    }
};


function checkinForAll(param) {
    if (param.checked) {
        var x = document.querySelectorAll('input');
        for (var i = 0; i < x.length; i++) {
            if (x[i].id == 'changeColor' && x[i].checked != true) {
                setBackgroundColor();
            }
            x[i].checked = true;
            textSize[i].classList.add('grow-size');

        }
        showHead[0].classList.add('show-head');
        textChangeColor[0].classList.add('transparent-color');
    } else {
        deleteAllChecked();
    }

};

function deleteAllChecked() {
    var y = document.querySelectorAll('input');
    for (var i = 0; i < y.length; i++) {
        y[i].checked = false;
        textSize[i].classList.remove('grow-size');
    }
    showHead[0].classList.remove('show-head');
    textChangeColor[0].classList.remove('transparent-color');
    resetBackgroundColor();
};