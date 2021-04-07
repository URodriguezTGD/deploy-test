import React from 'react';
import { MapFooter } from '../components/MapFooter';
import MapsContainerStyle from "../styles/MapsContainer.module.css";

export const MapsContainer = () => {
    return (
        <div className={MapsContainerStyle.mapsContainer}>
            <MapFooter title='Mexicali, BC' />
            <iframe className={MapsContainerStyle.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.7744769258397!2d-115.45182927075926!3d32.656838627912656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7706ac6fd1d25%3A0xe50e132eef7f653a!2sCalzada%20Cuauht%C3%A9moc%2050%2C%20Aviaci%C3%B3n%2C%2021230%20Mexicali%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1617825558976!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy"></iframe>
            <MapFooter title='CDMX' />                 
            <iframe className={MapsContainerStyle.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.9950412219791!2d-99.18180131998986!3d19.369582099871685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8fb09bdf8f%3A0x29accf46f7415e8a!2sAv.%20Insurgentes%20Sur%201431%2C%20Insurgentes%20Mixcoac%2C%20Benito%20Ju%C3%A1rez%2C%2003920%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1617825383850!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}
