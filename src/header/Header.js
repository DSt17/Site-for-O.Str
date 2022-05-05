import React from "react";
import s from "./Header.module.css";
import Nav from "../nav/Nav";
import HeaderImg from "../assets/image/drill-milling-milling-machine-drilling-51320.jpeg"

function Header() {
    const HeaderImage = {
        backgroundImage: `url(${HeaderImg})`,
    }

    return (
        <div className={s.headerBlock} style={HeaderImage}>
            <Nav/>
        </div>
    )
}

export default Header