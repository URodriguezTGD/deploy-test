import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../components/Service';
import servicesStyles from "../styles/Services.module.css";
// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Services/Services_es';
import en from '../locales/Services/Services_en';

export const Services = () => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={servicesStyles.container}>
            <div className={servicesStyles.imageContainer}>
                <img src='/images/bt-services.png' alt='Foto'  />
            </div>
            <div className={servicesStyles.servicesContainer}>
                <Link  href={ locale === 'es' ? '/es/services' : '/en/services' }>
                    <a><h2>{t.title}</h2></a>
                </Link>
                <p className={servicesStyles.servicesDesc}>{t.desc}</p>
                <div className={servicesStyles.servicesList}>
                    {t.services.map(service => {
                        return (
                            <Link key={service.id} href='/service/[id]' as={`/service/${service.id}`} >
                                <a>
                                    <Service src={service.src} title={service.title} desc={service.desc} reverse={service.reverse} small={service.small} />
                                </a>
                            </Link>
                    )})}
                </div>
            </div>
        </div>
    );
};
