import React from 'react';
import './App.css';
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import style from "./common/styles/Container.module.css"
import MyWorks from "./MyWorks/MyWorks";
import HireMe from "./HireMe/HireMe";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";


function App() {
  return (
    <div className="App" >
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <MyWorks/>
            <HireMe/>
            <Contacts/>
            <Footer/>
    </div>
  );
}

export default App;
