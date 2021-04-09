import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../components/Service';
import servicesStyles from "../styles/Services.module.css";

export const Services = () => {
    const services = [
        {id: 'administrativo', src:'/images/administrativo.jpeg', title:'Derecho Administrativo', desc:'Atencion especializada en todo tipo de controversias que deriven de la actividad del Estado, ya sea federal o local.', reverse:false, small:true},
        {id: 'corporativo', src:'/images/corporativo.jpeg', title:'Derecho Corporativo', desc:'Servicio en la constitución de empresas a través de los vehiculos establecidos en las leyes mexicanas.', reverse:false, small:true},
        {id: 'fiscal', src:'/images/fiscal.jpeg', title:'Derecho Fiscal', desc:'Elaboramos e interpretamos medios de defensa en contra de las actuaciones de las autoridades fiscales.', reverse:false, small:true}
    ];
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
                <h2>Servicios</h2>
                <p className={servicesStyles.servicesDesc} >Entregas comprometidas a ser flexibles, transparentes y sin costos innecesarios.</p>
                {services.map(service => {
                    return (
                        <Link href='/service/[id]' as={`/service/${service.id}`} key={service.id}>
                            <a>
                                <Service src={service.src} title={service.title} desc={service.desc} reverse={service.reverse} small={service.small} />
                            </a>
                        </Link>
                )})}
                {/* <Link href='/service/[id]' as={`/service/${services.id}`}>
                    <a>
                        <Service src='/images/administrativo.jpeg' title='Derecho Administrativo' desc='Atencion especializada en todo tipo de controversias que deriven de la actividad del Estado, ya sea federal o local.' reverse={false} small={true}/>
                    </a>
                </Link>
                <Link href='/service/[id]' as={`/service/2`}>
                    <a>
                        <Service src='/images/corporativo.jpeg' title='Derecho Corporativo' desc='Servicio en la constitución de empresas a través de los vehiculos establecidos en las leyes mexicanas.' reverse={false} small={true}/>
                    </a>
                </Link>
                <Link href='/service/[id]' as={`/service/3`}>
                    <a>
                        <Service src='/images/fiscal.jpeg' title='Derecho Fiscal' desc='Elaboramos e interpretamos medios de defensa en contra de las actuaciones de las autoridades fiscales.' reverse={false} small={true}/>
                    </a>
                </Link> */}
            </div>
        </div>
    );
};
