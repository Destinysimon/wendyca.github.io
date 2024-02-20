const menu = document.querySelector('.menuicon');
const list = document.querySelector('#menu')

menu.addEventListener('click', () => {
    if (list.style.display == 'none'){
        list.style.display = 'flex';
    }else if (list.style.display = 'flex'){
        list.style.display = 'none';
    }
    // if (list.style.display = 'flex') {
    //     list.style.display = 'none';
    // }
})