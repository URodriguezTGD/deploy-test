import React from 'react';
import { Service } from '../components/Service';
import serviceContainerStyle from '../styles/ServiceContainer.module.css'

export const ServiceContainer = ({title, services, gray}) => {
    return (
        <div className={ gray ? `${serviceContainerStyle.serviceContainer} ${serviceContainerStyle.grayBackground}` : serviceContainerStyle.serviceContainer }>
            <h2>{title}</h2>
            { services.map((service, index) => {
                return(
                    <Service key={index} src={service.src} title={service.title} desc={service.desc} reverse={service.reverse} small={service.small}/>
            )})}
        </div>
    )
}
