import React from "react";
import heroStyles from "../styles/Hero.module.css";

export const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <div className={heroStyles.heroContent}>
                <h1 className={heroStyles.heroTitle}>Asesoria y servicios legales enfocados a los negocios.</h1>
                {/* <p></p> */}

                <a href="/contact">Contáctanos</a>
            </div>
        </div>
    );
};
