const setActiveClass = (elem, index) => {
    elem[index].classList.add('active')
}

const removeActiveClass = (elem, index) => {
    elem[index].classList.remove('active')
}

const hideElement = (elem, index) => {
    elem[index].style.display = 'none';
}

const showElement = (elem, index) => {
    elem[index].style.display = 'flex';
}
export {setActiveClass,removeActiveClass, hideElement, showElement}