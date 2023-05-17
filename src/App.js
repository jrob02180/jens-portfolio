import React, { useState } from 'react';
import Header from './components/Header';   
// import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// const App = () => <PortfolioContainer />;

function App() {
    const [currentPage, setCurrentPage] = useState('About');
  
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
        <>
          <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
        <div>
            <main>
                {renderPage()}
            </main> 
        </div>
        </div>
            <Footer />
        </div>
        </>
    );
  }
  

export default App;
