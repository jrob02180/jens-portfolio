import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

// const App = () => <PortfolioContainer />;

function App() {
    const [currentPage, setCurrentPage] = useState('Portfolio');
  
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  

export default App;
