import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import "./slider.css"
import slide1 from "../../../src/assets/images/image2.jpg"
import slide2 from "../../../src/assets/images/image3.jpg"
import slide3 from "../../../src/assets/images/image5.jpg"
import slide4 from "../../../src/assets/images/image6.jpg"
import slide5 from "../../../src/assets/images/image7.jpg"
import slide6 from "../../../src/assets/images/image1.jpg"


const slides = [
    slide1, slide2, slide3, slide4, slide5, slide6
];

function PauseOnHover() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0'
    }

    return (
        <div className={ 'slide-container' }>
            <h2 className={ 'coming-soon' }>Coming soon</h2>
            <Slider { ...settings }>
                { slides.map((slide, index) => (
                    <div key={ index } className="slide">
                        <img className={ 'slide-img' } src={ slide } alt={ `image${ index }` } />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover