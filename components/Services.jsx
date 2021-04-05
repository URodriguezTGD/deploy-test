import React from "react";
import Image from 'next/image'
import servicesStyles from "../styles/Services.module.css";

export const Services = () => {
    return (
        <div className={servicesStyles.container}>
            <Image
                src='/images/bt-services.png'
                alt="Picture of the author"
                width={500}
                height={500}

            />
        </div>
    );
};
