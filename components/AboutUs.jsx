import React from 'react'
import aboutUsStyles from "../styles/AboutUs.module.css";

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/AboutUs/AboutUs_es';
import en from '../locales/AboutUs/AboutUs_en';

export const AboutUs = () => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={`${ aboutUsStyles.container } container`}>
            <h2>{t.title}</h2>
            <p>{t.desc}</p>
        </div>
    )
}
