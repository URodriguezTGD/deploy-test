import React from 'react';
import { MapFooter } from '../components/MapFooter';
import MapsContainerStyle from "../styles/MapsContainer.module.css";

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/MapContainer/MapContainer_es';
import en from '../locales/MapContainer/MapContainer_en';

export const MapsContainer = () => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={`${MapsContainerStyle.mapsContainer}`}>
            <div id="mxli">
                <h2>Mexicali, BC</h2>
                <p>Calzada Cuauhtémoc #50 Interior F, <br/> Col. Cuauhtémoc, C.P. 21230</p>
                <iframe className={MapsContainerStyle.map} src={t.mxliLink} loading="lazy"></iframe>
            </div>
            <div id="cdmx">
                <h2>CDMX</h2>
                <p>Avenida Insurgentes Sur #1431 Piso 10, Interior A, <br/> Col. Insurgentes Mixcoac, C.P. 03920 Benito Juárez</p>
                <iframe className={MapsContainerStyle.map} src={t.cdmxLink} loading="lazy"></iframe>
            </div>
        </div>
    )
}
