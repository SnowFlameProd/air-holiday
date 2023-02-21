import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar d-flex align-items-center">
            <div className="logo">
                <a href="Navbar#">
                    <img className="logo-image" src="https://via.placeholder.com/150" alt="Logo"/>
                </a>
            </div>

            <div className="navigation-wrapper h-100">
                <div className="d-flex align-items-center h-100">
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#">
                        <div>Main page</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#">
                        <div>Congratulations</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#">
                        <div>Game</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#">
                        <div>Reasons</div>
                    </a>
                    <a className="px-4 h-100 d-flex align-items-center justify-content-between navigation-link" href="#">
                        <div>Moments</div>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;