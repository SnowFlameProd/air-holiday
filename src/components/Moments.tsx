import React from 'react';
import Slider from 'react-slick';
import data from '../data/data.json';

function importAll(r: any) {
    let images: any = {};
    r.keys().forEach((item: any, index: any) => {
        images[item.replace('./', '')] = r(item);
    })
    return images;
}

const images = importAll(require.context('../img/photos', false, /\.(png|jpe?g|svg)$/));

const Moments = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="container d-flex align-items-center justify" id="moments">
            <div className="custom-card justify-content-center row w-100">
                <div className="text-center w-100 mb-3 moments-title">А тут у нас приготовлен прикол, который я собирал полгода...</div>
                <Slider {...settings}>
                    {Object.keys(images).map((image, index) => {
                        return (
                            <>
                                <img className="moments-image d-block mb-3" src={images[image]} key={index} alt=""/>
                                <div>{data.imagedesc[index].text}</div>
                            </>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Moments;