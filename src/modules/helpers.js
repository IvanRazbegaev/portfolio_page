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


/*
Пока что данная функция не требуется. Нужно поднимать свою отправку почты (Go, php?)
 */
// const sendData = async (service, data) => {
//     const sendingData = fetch(service, {
//         method: 'POST',
//         body:JSON.stringify(data)
//     })
//     return (await sendingData).json();
// }
export {setActiveClass,removeActiveClass, hideElement, showElement}