import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdAccountCircle } from 'react-icons/md';

import Routes from './routes/Routes';
import Container from './components/Container/Container';
import NavLink from './components/NavLink/NavLink';

function App() {
  return (
    <div className="app flex flex-col min-h-screen" data-testid="app">
      <header className="app-header shadow">
        <Container className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <MdHome className="mr-1" />
            <span className="uppercase">
              My <span className="font-bold">SPA</span>
            </span>
          </Link>
          <div className="flex items-center">
            <nav className="flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
            <nav className="ml-2">
              <button className="h-12 inline-flex items-center justify-center px-3 text-gray-700 hover:text-black">
                <MdAccountCircle size="1.5rem" />
              </button>
            </nav>
          </div>
        </Container>
      </header>
      <main className="pt-4 flex-grow">
        <Container>
          <Routes />
        </Container>
      </main>
      <footer className="py-4 bg-gray-100 border-t border-gray-200">
        <Container>
          <p className="text-xs text-gray-700">
            All rights reserved. &copy; {new Date().getFullYear()}
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
