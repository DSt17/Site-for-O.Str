import React from "react";
import s from "./OmOss.module.css"

function OmOss(props){
    return(
        <div className={s.omOssDescription}>
            <h2>{props.title}</h2>
            <p>
                {props.description}
            </p>
            <a href="" className={s.btn}>Open</a>
        </div>
    )
}

export default OmOss