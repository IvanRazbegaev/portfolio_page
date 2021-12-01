import {removeActiveClass, setActiveClass} from "./helpers";

const navigationSidebar = () => {
    const sidebar = document.getElementById('header')
    const navItems = sidebar.querySelectorAll('nav>ul>li>a');

    let currentActiveElem = 0

    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            const href = document.querySelector(item.getAttribute('href'));

            e.preventDefault();
            href.scrollIntoView({block:"center", behavior: "smooth"});

            removeActiveClass(navItems, currentActiveElem);
            currentActiveElem = index;
            setActiveClass(navItems, currentActiveElem);
        })
    })

}

export default navigationSidebar;