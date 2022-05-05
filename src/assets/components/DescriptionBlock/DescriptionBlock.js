import React from "react";
import s from "./Description.module.css"


function DescriptionBlock(props) {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.titleAndDescription}>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
            </div>
            <div>
                <a href="" className={s.btn}>
                    Open
                </a>
            </div>
        </div>
    )
}

export default DescriptionBlock