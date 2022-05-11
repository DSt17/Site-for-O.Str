import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
