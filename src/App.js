import React, { Fragment } from 'react';
import Header from './component/Header'
import Footer from './component/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/home/Home';
import About from './component/about/About';
import Talk from './component/talk/Talk';
import Blog from './View/Blog/Blog';


function App() {



  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Talk" element={<Talk />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
