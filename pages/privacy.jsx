import React from 'react';
import Head from "next/head";
import { TitleSection } from '../components/TitleSection';
import { PrivacyText } from '../components/PrivacyText';

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Privacy/Privacy_es';
import en from '../locales/Privacy/Privacy_en';

export default function privacy() {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div>
            <Head>
                <title>{t.head}</title>
            </Head>
            <TitleSection title={t.title} />
            <PrivacyText />
        </div>
    )
}
