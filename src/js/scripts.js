const switchBlocks = document.querySelector('.form-js');
const switchImgBlocks = document.querySelector('.radio-js');
const tshirt = document.querySelector('.img-js');
let selectedLi;

switchBlocks.addEventListener('click', function(event) {
    let target = event.target;
    while (target != this) {
        if (target.tagName == 'LABEL' || target.tagName == target.textContent) {
            border(target);
            return;
        }
        target = target.parentNode;
    }
});

function border(node) {
    if (selectedLi) {
        selectedLi.classList.remove('border');
    }
    selectedLi = node;
    selectedLi.classList.add('border');
}

switchImgBlocks.addEventListener('click', function(event) {
    const objectImg = {
        white: 'img/tshirts/tshirt_white.jpg',
        yellow: 'img/tshirts/tshirt_yellow.jpg',
        green : 'img/tshirts/tshirt_green.jpg'
    };
    for (var key in objectImg) {
        if(event.target.getAttribute('data-img') == key){
            tshirt.src = objectImg[key];
        }
    }
});
