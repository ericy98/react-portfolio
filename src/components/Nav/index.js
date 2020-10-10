import React from 'react';

const Nav = (props) => {

    const { contactSelected, setContactSelected } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Eric Yarbrough
            </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={"mx-2"}>
                        <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className={`mx-2 ${contactSelected}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;