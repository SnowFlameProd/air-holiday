import React from 'react';

const Main = () => {
    return (
        <>
            <div className="main-wrapper position-relative">
                <div className="container py-3">
                    <div className="main-text d-flex flex-column align-items-center justify-content-center pt-5">
                        <div className="hello mb-8">Привет</div>
                        <div className="name mb-8">Хена</div>
                        <div className="happy">С Днем Рождения!</div>
                        <div className="wishes mb-7">Пускай все твои желания исполнятся!</div>
                        <div className="desc">Специально для тебя я подготовил этот поздравительный сайт! На этом сайте ты найдешь много всего - поздравления, смешные фото, наши с тобой моменты, а самое главное подсказки, чтобы найти свой подарок!</div>
                    </div>
                </div>

                <img className="main-bg-image left-flags position-absolute" src="../img/left-flags.svg" alt=""/>

                <img className="main-bg-image right-flags position-absolute" src="../img/left-flags.svg" alt=""/>
            </div>
        </>
    );
};

export default Main;