import React from 'react';
import Slider from 'react-slick';
import buster from '../img/buster.png';
import data from '../data/data.json';

const Game = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [gameStarted, setGameStarted] = React.useState(false);
    const [gameFinished, setGameFinished] = React.useState(false);
    const [inputValue, setValueInput] = React.useState('');
    const [status, setStatus] = React.useState('normal');

    const phrase = 'Хена Чан это Матвей Ильков';

    const submit = (value: string) => {
        if (value === phrase) {
            setStatus('success');
        } else {
            setStatus('fail');
        }
    }

    return (
        <>
            <div className="container d-flex align-items-center" id="game">
                <div className="custom-card row">
                    <div className="col-md-5">
                        <img className="w-100" src={buster} alt="Buster"/>
                    </div>
                    <div className="col-md-7">
                        {
                            gameStarted && !gameFinished ?
                                <div className="d-flex flex-column h-100 justify-content-center">
                                    <Slider {...settings}>
                                        {data.questions.map((question, index) => {
                                            return(
                                                <div>
                                                    <h3 className="mb-3">Подсказка №{question.number}</h3>
                                                    <div>{question.text}</div>

                                                    {
                                                        index === 21 ?
                                                            <div className="mt-3">
                                                                <div className="mb-3">Если ты справилась со всеми подсказками и нашла все подарки, нажми кнопку ниже</div>
                                                                <button className="btn btn-primary" onClick={() => {setGameFinished(true)}}>Закончить игру</button>
                                                            </div> : ''
                                                    }
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                </div> :
                                !gameFinished ? <div className="align-items-center d-flex flex-column h-100 justify-content-center">
                                    <div>
                                        <p>Привет, Хена! Меня зовут Бастер, и сегодня я буду помогать тебе искать твои подарки!</p>
                                        <p>У тебя дома спрятаны куча подарков, некоторые из них являются частью головоломки, решив которую ты получишь свой основной подарок! Желаю тебе удачи в твоих поисках!</p>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => setGameStarted(true)}>Начать игру!</button>
                                </div> : ''
                        }
                        {
                            gameFinished && (status === 'normal' || status === 'fail') ?
                                <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                                    <div className="mb-3">А теперь, когда ты завершила поиски, введи получившуюся фразу:</div>
                                    <input className="form-control mb-3" type="text" onChange={(e) => setValueInput(e.target.value)} value={inputValue}/>
                                    {status === 'fail' ? <div className="text-danger mb-3">Неправильно, думай еще!</div> : ''}
                                    <button className="btn btn-primary" onClick={() => submit(inputValue)}>Отправить фразу</button>
                                </div> :
                                status === 'success' ?
                                    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                                        <div className="text-success">
                                            Поздравляю! Ищи свой подарок на балконе :)
                                        </div>
                                    </div> : ''
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Game;