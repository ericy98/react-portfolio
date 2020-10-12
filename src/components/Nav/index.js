import React from 'react';

const NavTabs = (props) => {

    const tabs = ['Home', 'About', 'Portfolio', 'Contact'];

    return (
        <div>
            {/* <h2>Eric Yarbrough</h2> */}
            <ul className="nav nav-tabs px-5">
                {tabs.map(tab => (
                    <li className="nav-item tab" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active ' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavTabs;