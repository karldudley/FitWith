import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './Layout'
import { Register, Upload, View } from './pages'
import './App.css';

const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="upload" element={<Upload />}/>
        <Route path="view" element={<View />}/>
      </Routes>

      <Footer/>
    </>
  )
};

export default App;
