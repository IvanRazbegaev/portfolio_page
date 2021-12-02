import {Autoplay, Pagination, Swiper} from "swiper";

const slider = () => {

    const slider = new Swiper ('.mySwiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type:"bullets",
        }
    });
}

export default slider;