import React from 'react';

const NavTabs = (props) => {

    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <div>
            <section className="mx-5 d-flex">
                <h1  className="flex-grow-1">
                    <a href="/">Eric Yarbrough</a>
                </h1>
                <ul className="nav nav-tabs">
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
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