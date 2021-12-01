const setActiveClass = (elem, index) => {
    elem[index].classList.add('active')
}

const removeActiveClass = (elem, index) => {
    elem[index].classList.remove('active')
}

export {setActiveClass,removeActiveClass}