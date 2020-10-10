import React from 'react';

function Nav() {

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Eric Yarbrough
            </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="mx-2"> 
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;