import {Navigation, Pagination, Swiper} from "swiper";

const slider = () => {

    const slider = new Swiper ('.mySwiper', {
        modules: [Pagination, Navigation],
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }
    });
}

export default slider;