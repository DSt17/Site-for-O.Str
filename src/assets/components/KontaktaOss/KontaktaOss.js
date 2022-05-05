import React from "react";
import s from "./KontaktaOss.module.css"

function KontaktaOss(props) {
    return (
        <div className={s.titleAndDescription}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div>
                <a href="">Kontakta oss</a>
            </div>
        </div>
    )
}

export default KontaktaOss