import React from 'react';
import charter from '../img/charter.png';
import print from '../img/print.png';

const Charter = () => {
    return (
        <div className="container d-flex align-items-center justify" id="charter">
            <div className="custom-card justify-content-center row w-100 position-relative">
                <img className="charter-img" src={charter} alt=""/>
                <div className="charter-container text-center position-absolute">
                    <div className="charter-title mb-3">Награждается</div>
                    <div className="charter-name mb-7"><i>Чан Тху Хиен</i></div>
                    <div className="charter-text">За заслуги в отсутствии пиздостраданий</div>
                    <img className="charter-print position-absolute" src={print} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Charter;