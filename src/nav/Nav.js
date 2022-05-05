import React from "react";
import s from './Nav.module.css';

function Nav() {
    return (
        <div className={s.NavBlockBox}>
            <div className={s.title}>
                <a href="">
                    <h1>ALLIANS</h1>
                    <span>www.industrpersonal.com</span>
                </a>
            </div>
            <div className={s.navBlockLink}>
                <div>
                    <a href=""> Tjasnster</a>
                    <a href=""> Om oss</a>
                    <a href=""> jobba hos oss</a>
                    <a href=""> Kontakt</a>
                </div>
            </div>
        </div>
    )
}

export default Nav