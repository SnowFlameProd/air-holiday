import React from 'react';
import cloud from '../img/cloud.gif';

const Congratulations = () => {
    return (
        <>
            <div className="container d-flex align-items-center" id="congratulations">
                <div className="custom-card row">
                    <div className="col-md-6">
                        <img className={"w-100"} src={cloud} alt="Cloud"/>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <div className="congratulations-title text-center pb-3">
                            С Днем рождения!
                        </div>
                        <div className="congratulations-text mb-3">
                            Дорогая Хена! Мы с тобой не так уж долго знакомы, но я уже успел тебя полюбить всем сердцем. Спасибо тебе за все, я очень рад, что познакомился с тобой и согласился пойти пить пиво :)
                        </div>
                        <div className="congratulations-text mb-3">
                            Поздравляю тебя с Днем рождения! Желаю тебе в этой жизни самого главного - найти себя, а что еще важнее не потерять! Ты целеустремленная, сильная, смелая, сообразительная, добрая, поэтому также желаю тебе преумножать свои хорошие качества и быть счастливой! Встречай трудности с широко распростертыми плечами, не опускай руки, продолжай двигаться вперед и у тебя все обязательно получится, я в тебя верю! С Днем рождения!
                        </div>
                        <div className="congratulations-text text-lg-end">
                            Люблю тебя, твой Женя
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Congratulations;