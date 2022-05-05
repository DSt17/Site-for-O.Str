import React from "react";
import s from "./JobbaHosOss.module.css";
import JobbaHosOssImage from "../../image/20211011-Mekan-WEBB-15.jpg"




function JobbaHosOss(props){
    return(
        <div className={s.imgAndDescriptionContainer}>
                <img src={JobbaHosOssImage}/>
            <div className={s.titleAndDescription}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href="" className={s.btn}>Jobba hos oss</a>
            </div>

        </div>
    )
}


export default JobbaHosOss