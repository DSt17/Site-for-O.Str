import React from "react";
import s from "./Contacts.module.css"
import contactsImage from "../assets/image/11_Rityta-1.png"
import KontaktaOss from "../assets/components/KontaktaOss/KontaktaOss";


function Contacts() {

    const ContactsImage = {
        backgroundImage: `url(${contactsImage})`,
    }
    return (
        <div className={s.contactsBlock} style={ContactsImage}>
            <KontaktaOss
                title={"Slå oss\n" +
                "en signal!"}
                description={"Vi är processindustrins problemlösare och go-to partner för alla typer av projekt. Ring eller mejla oss och få rätsida på dina frågor om hur vi kan stötta och erbjuda lösningar åt ditt företag"}
            />
        </div>
    )
}

export default Contacts