import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import {useCtx} from './context/MovieContext';
import CardLayout from './Layout/CardLayout';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  const {movies, isLoading, errorMessage, isError} = useCtx();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<h1>Page not found!</h1>} />
          <Route path="/:movieId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
