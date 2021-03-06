import React from 'react';
import minimal from '../../assets/minimal-logo.png';

const NavTabs = (props) => {

    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <div className="navigation">
            <section className="my-2 d-flex">
                <a href="/" alt="Homepage"><img src={minimal} alt="E.Y. logo"className="pr-3" ></img></a>
                <ul className="nav align-items-center">
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