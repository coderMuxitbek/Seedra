import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import HeadPage from './Pages/HeadPage/HeadPage';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Nav />
      <div className="BiggestParent">
        <div className="appCont">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
