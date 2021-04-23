import React from 'react';
import PrivacyTextStyle from '../styles/PrivacyText.module.css';

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Privacy/PrivacyText_es';
import en from '../locales/Privacy/PrivacyText_en';

export const PrivacyText = () => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={`${PrivacyTextStyle.container} container`}>
            {
                Object.entries(t).map(keypair => {
                    return(
                        <p>{keypair[1]}</p>
                    )
                })
            }
        </div>
    )
}
