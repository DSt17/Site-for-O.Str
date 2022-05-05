import React from "react";
import s from "./Main.module.css"
import ProjectOrWhitePaper from "../assets/image/projectOrWhitePaper.gif"
import DescriptionBlock from "../assets/components/DescriptionBlock/DescriptionBlock";
import OmOss from "../assets/components/OmOss/OmOss";
import JobbaHosOss from "../assets/components/JobbaHosOss/JobbaHosOss";

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={s.devProject}>
                <img src={ProjectOrWhitePaper}/>
                <DescriptionBlock
                    title={"Personal-\n" +
                    "uthyrning"}
                    description={"Allians i Värmland är ett bemanningsföretag för tung industri med verkstadspersonal, arbets- och projektledare. Vi har bred kompetens och stort kontaktnät."}/>
                <DescriptionBlock
                    title={"Underhållsserv ice & montage"}
                    description={" Företaget har kompetens och utrustning för montage av ny utrustning samt mångårig erfarenhet av service och underhåll."}/>
            </div>
            <div className={s.omOss}>
                <OmOss
                    title={"Vi bemannar industrin"}
                    description={"Vi är ett bemanningsföretag som fungerar som partner åt Sveriges industriföretag. Allians\n" +
                    "                hjälper till med allt från produktions- och rekryteringslösningar till renodlade service-,\n" +
                    "                montage-, och underhållsprojekt.\n" +
                    "\n" +
                    "                Vi åtar oss även internationella uppdrag."}
                />
            </div>
            <div className={s.JobbaHosOss}>
                <JobbaHosOss
                    title={"Jobba hos oss"}
                    description={"Allians i Värmland letar ständigt efter nya medarbetare. Vi söker dig som gillar att göra skillnad i verksamheter rika på utmaningar och driv.\n" +
                    "\n" +
                    "Känner du igen dig?\n" +
                    "\n" +
                    "Skicka en spontanansökan nu."}
                />
            </div>
        </div>
    )
}

export default Main