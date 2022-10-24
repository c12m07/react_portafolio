import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Proyects from '../components/proyects';
import Contact from '../components/contact'
import Header from '../components/header';
import Footer from '../components/footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/proyectos' element={<Proyects />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
