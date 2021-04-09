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
            <Image
                src='/images/bt-services.png'
                alt="Picture of the author"
                width={1320}
                height={1000}
            />
            </div>
            <div className={servicesStyles.servicesContainer}>
                <h2>{t.title}</h2>
                <p className={servicesStyles.servicesDesc}>{t.desc}</p>
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
    );
};
