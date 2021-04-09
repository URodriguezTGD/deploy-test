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
        <div className={PrivacyTextStyle.container}>
            <p>
                {t.intro}<br /><br />
                {t.s1_1} <br /><br />
                {t.s1_2} <br /><br />
                {t.s2_1} <br />
                {t.s2_2} <br /><br />
                {t.s2_3} <br />
                {t.s2_4} <br />
                {t.s2_5} <br /><br />
                {t.s3_1}  <br /><br />
                {t.s3_2} <br />
                {t.s3_3} <br />
                {t.s3_4} <br />
                {t.s3_5} <br />
                {t.s3_6} <br /><br />
                {t.s4_1} <br /><br />
                {t.s4_2} <br /><br />
                {t.s4_3} <br /><br />
                {t.s4_4} <br />
                {t.s4_5} <br />
                {t.s4_6} <br />
                {t.s4_7} <br />
                {t.s4_8} <br />
                {t.s4_9} <br /><br />
                {t.s5_1} <br />
                {t.s5_2} <br /><br />
                {t.s6_1} <br />
                {t.s6_2} <br /><br />
                {t.s7_1} <br />
                {t.s7_2} 
                <br /><br />
            </p>
        </div>
    )
}
