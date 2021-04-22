import React from "react";
import heroStyles from "../styles/Hero.module.css";

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Hero/Hero_es';
import en from '../locales/Hero/Hero_en';
import Link from "next/link";

export const Hero = () => {

    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    return (
        <div className={heroStyles.hero}>
            <div className={heroStyles.heroContent}>
                <h1 className={heroStyles.heroTitle}>{t.title}</h1>
                {/* <p></p> */}

                <Link href="/contact"><a>{t.button}</a></Link>
            </div>
        </div>
    );
};
