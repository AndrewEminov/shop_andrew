const Dispatcher = document.getElementById('doc');
let selectedLi;
class PropertySelector {
    constructor(el) {
        this.el = el;
        this.el.addEventListener('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];
            const target = ev.target;
            this.dispatchEvent(type, value);

            if (target.tagName != 'LABEL') return;
            setBorder(target);
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });
        // Pub/Sub
        Dispatcher.dispatchEvent(event);
    }
}
Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        changePicture(data.value);
    }
    if(data.type === 'size'){
        changeSize(data.value);
    }
});
function setBorder(node) {
    if (selectedLi) {
        selectedLi.classList.remove('border');
    }
    selectedLi = node;
    borderForColor.style.border = '1px solid black';
    borderForColor.style.height = '50px';
    borderForColor.style.weight = '65px';
    borderForSize.style.border = '1px solid black';
    borderForSize.style.height = '50px';
    borderForSize.style.weight = '65px';
    selectedLi.classList.add('border');
}
function changePicture(color) {
    document.getElementById('productPicture').src = 'img/tshirts/tshirt_' + color + '.jpg';
    localStorage.setItem('currentColor', color);
}
function changeSize(size){
    localStorage.setItem('currentSize', size);
}

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

const currentColor = localStorage.getItem('currentColor');
document.getElementById('productPicture').src = 'img/tshirts/tshirt_' + currentColor + '.jpg';
const borderForColor = document.querySelector('.radio__block--' + currentColor);
const currentSize = localStorage.getItem('currentSize');
const borderForSize = document.querySelector('.radio__block--' + currentSize);

borderForColor.style.border = '4px solid #c00';
borderForColor.style.height = '45px';
borderForColor.style.weight = '60px';

borderForSize.style.border = '4px solid #c00';
borderForSize.style.height = '45px';
borderForSize.style.weight = '60px';
