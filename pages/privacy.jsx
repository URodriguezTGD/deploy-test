import React from 'react';
import Head from "next/head";
import { TitleSection } from '../components/TitleSection';
import { PrivacyText } from '../components/PrivacyText';

export default function privacy() {
    return (
        <div>
            <Head>
                <title>Aviso de privacidad | BrainTax</title>
            </Head>
            <TitleSection title='Aviso de privacidad' />
            <PrivacyText />
        </div>
    )
}
