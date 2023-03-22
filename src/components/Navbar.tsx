import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar d-flex align-items-center justify-content-end">
            <div className="navigation-wrapper h-100">
                <div className="d-flex align-items-center h-100">
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#main">
                        <div>Главная</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#congratulations">
                        <div>Поздравления</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#game">
                        <div>Игра</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#moments">
                        <div>Смешные моменты</div>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;