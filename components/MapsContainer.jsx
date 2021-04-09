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
        <div className={MapsContainerStyle.mapsContainer}>
            <MapFooter title='Mexicali, BC' />
            <iframe className={MapsContainerStyle.map} src={t.mxliLink} loading="lazy"></iframe>
            <MapFooter title='CDMX' />                 
            <iframe className={MapsContainerStyle.map} src={t.cdmxLink} loading="lazy"></iframe>
        </div>
    )
}
