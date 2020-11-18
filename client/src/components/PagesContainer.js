import React, { useState } from 'react';
import NavTabs from './Nav'
import Home from './Homepage';
import About from './About';
import Portfolio from './Portfolio';
import ContactForm from './Contact';
import Resume from './Resume'

function Page() {
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <ContactForm />;
            case 'Resume':
                return <Resume/>;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <section>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                <div>{renderPage(currentPage)}</div>
            </section>
        </div>
    )
}

export default Page;
