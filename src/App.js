import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="details/" element={<Details />} />
        <Route exact path="details/:coin_id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
