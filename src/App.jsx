import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Connect from './Pages/Connect.jsx';
import Home from './Pages/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Copyright from './Components/Copyright/Copyright.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Copyright />
    </>
  );
};

export default App;
