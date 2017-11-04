const productForm = document.querySelector('.js-form');
const switchImgBlocks = document.querySelector('.js-radio');
const tshirt = document.querySelector('.js-img');
let selectedLi;

productForm.addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName != 'LABEL') return;
    setBorder(target);

});

function setBorder(node) {
    if (selectedLi) {
        selectedLi.classList.remove('border');
    }
    selectedLi = node;
    selectedLi.classList.add('border');
}

switchImgBlocks.addEventListener('click', function(event) {
    const target = event.target;
    if(!target.hasAttribute('data-img')) return;

    tshirt.src = target.getAttribute('data-img');

});
