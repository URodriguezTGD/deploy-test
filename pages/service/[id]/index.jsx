import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import { TitleSection } from '../../../components/TitleSection';
import { ServiceContainer } from '../../../components/ServiceContainer';

// imports i18n
import es from '../../../locales/Services/Services_Page_es';
import en from '../../../locales/Services/Services_Page_en';

function index() {
    const router = useRouter();

    const { locale } = router;
    const t = locale === 'es' ? es : en;

    return (
        <div>
            <Head>
                <title>{ router.query.id === "administrativo" ? t.headAdmin : router.query.id === "fiscal" ? t.headFiscal : t.headCorpo }</title>
            </Head>
            <TitleSection title={t.title} desc={t.desc} />
            {(() => {
                switch (router.query.id) {
                    case "administrativo":   return (<ServiceContainer title={t.titleAdmin} services={t.servicesAdmin} gray={true} />);
                    case "corporativo": return (<ServiceContainer title={t.titleCorpo} services={t.servicesCorpo} gray={true} />);
                    case "fiscal":  return (<ServiceContainer title={t.titleFiscal} services={t.servicesFiscal} gray={true} />);
            }
      })()}
        </div>
    )
}

export default index
