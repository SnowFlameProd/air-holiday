import React from 'react';
import leftFlags from '../img/left-flags.svg';
import rightFlags from '../img/right-flags.svg';
import leftHat from '../img/left-hat.svg';
import rightHat from '../img/right-hat.svg';
import cake from '../img/cake.svg';

const Main = () => {
    return (
        <>
            <div className="main-wrapper position-relative" id="main">
                <div className="container py-3">
                    <div className="main-text d-flex flex-column align-items-center justify-content-center pt-5">
                        <div className="hello mb-8">Привет</div>
                        <div className="name mb-8">Хена</div>
                        <div className="happy">С Днем Рождения!</div>
                        <div className="wishes mb-7">Пускай все твои желания исполнятся!</div>
                        <div className="desc">Специально для тебя я подготовил этот поздравительный сайт! На этом сайте ты найдешь много всего - поздравления, смешные фото, наши с тобой моменты, а самое главное подсказки, чтобы найти свой подарок!</div>
                    </div>
                </div>

                <img className="main-bg-image left-flags position-absolute" src={leftFlags} alt="left flags"/>

                <img className="main-bg-image right-flags position-absolute" src={rightFlags} alt="right flags"/>

                <img className="main-bg-image left-hat position-absolute" src={leftHat} alt="left hat"/>

                <img className="main-bg-image right-hat position-absolute" src={rightHat} alt="right hat"/>

                <img className="main-bg-image cake position-absolute" src={cake} alt="cake"/>
            </div>
        </>
    );
};

export default Main;