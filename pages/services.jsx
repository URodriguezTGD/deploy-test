import React from 'react';
import Head from "next/head";
import { TitleSection } from '../components/TitleSection';
import { ServiceContainer } from '../components/ServiceContainer';

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Services/Services_Page_es';
import en from '../locales/Services/Services_Page_en';

export default function services() {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    return (
        <div>
            <Head>
                <title>{t.head}</title>
            </Head>
            <TitleSection title={t.title} desc={t.desc} />
            {locale === 'es' ?
                <>
                    <ServiceContainer title={t.titleAdmin} services={t.servicesAdmin} gray={true} />
                    <ServiceContainer title={t.titleCorpo} services={t.servicesCorpo} gray={false} />
                    <ServiceContainer title={t.titleFiscal} services={t.servicesFiscal} gray={true} />    
                </>
                :
                <>
                    <ServiceContainer title={t.titleCorpo} services={t.servicesCorpo} gray={false} />
                    <ServiceContainer title={t.titleFiscal} services={t.servicesFiscal} gray={true} />
                    <ServiceContainer title={t.titleAdmin} services={t.servicesAdmin} gray={true} />

                </>
            }
        </div>
    )
}
