import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    const { currentPage, handlePageChange } = props;
    return (
        <>
        <header className="">
        <h1 className="name">Jen Roberson</h1>
        <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* {Navigation} */}
        </div>
        </header>
        </>
    );
    }

export default Header;