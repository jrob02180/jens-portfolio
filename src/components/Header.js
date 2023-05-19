import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  const { currentPage, handlePageChange } = props;
  return (
    <header className="container">
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          <div className="row justify-content-md-center" style={{fontSize: 100}}>Jen Roberson</div>
    </header>
  );
}

export default Header;
