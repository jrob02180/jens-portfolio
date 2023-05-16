import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    const { currentPage, handlePageChange } = props;
    return (
        <>
        <header className="navflex-row px-1">
            <div>

        <h1 className="name">Jen Roberson</h1>
        </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* {Navigation} */}
        </header>
        </>
    );
    }

export default Header;