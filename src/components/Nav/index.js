import React from 'react';
import logo from '../../assets/logo.png';

const NavTabs = (props) => {

    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <div>
            <section className="mx-5 d-flex">
                <a href="/" alt="Homepage"><img src={logo} alt="E.Y. logo" ></img></a>
                <ul className="nav">
                    {tabs.map(tab => (
                        <li className="nav-item p-1" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                alt={`${tab} webpage`}
                                className={
                                    props.currentPage === tab ? 'nav-link active ' : 'nav-link '
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default NavTabs;