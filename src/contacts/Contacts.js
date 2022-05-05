import React from "react";
import s from "./Contacts.module.css"
import contactsImage from "../assets/image/11_Rityta-1.png"


function Contacts(){

    const ContactsImage = {
        backgroundImage: `url(${contactsImage})`,
    }
    return(
        <div className={s.contactsBlock} style={ContactsImage}>

        </div>
    )
}

export default Contacts