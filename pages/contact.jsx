import React from 'react';
import Head from "next/head";
import { TitleSection } from '../components/TitleSection';
import { FormContainer } from '../components/FormContainer';
import { MapsContainer } from '../components/MapsContainer';

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Contact/Contact_es';
import en from '../locales/Contact/Contact_en';

export default function contact() {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div>
            <Head>
                <title>{t.head}</title>
                <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <TitleSection title={t.title} desc={t.desc} />
            <FormContainer />
            <TitleSection title={t.sectionTitle} desc={t.sectionDesc} />
            <MapsContainer />
        </div>
    )
}
