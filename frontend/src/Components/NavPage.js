import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import BrowseDeveloper from "./Pages/BrowseDeveloper";
import Contact from "./Pages/Contact";
import DeveloperRegister from "./Pages/DeveloperRegister";
import Home from "./Pages/Home";
import SEO from "./Pages/SEO";
/*import Angular from '../pages/Angular'
import Css from '../pages/Css'
import Figma from '../pages/Figma'
import Git from '../pages/Git'
import Home from '../pages/Home'
import Java from '../pages/Java'
import Node from '../pages/Node'
import Php from '../pages/Php'
import PageReact from '../pages/PageReact'*/

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/seo" element={<SEO />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<DeveloperRegister/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/browse' element={<BrowseDeveloper/>}/>

        {/*<Route path="/java" element={<Java />} />
        <Route path="/css" element={<Css />} />
        <Route path="/php" element={<Php />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/git" element={<Git />} />
        <Route path="/node" element={<Node />} />
        <Route path="/react" element={<PageReact />} />
        <Route path="/angular" element={<Angular />} />*/}
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;