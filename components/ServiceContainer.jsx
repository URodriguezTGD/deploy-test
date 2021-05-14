import React from 'react';
import { Service } from '../components/Service';
import serviceContainerStyle from '../styles/ServiceContainer.module.css'

export const ServiceContainer = ({title, services, gray}) => {
    return (
        <div className={ gray ? `${serviceContainerStyle.serviceContainer} ${serviceContainerStyle.grayBackground}` : serviceContainerStyle.serviceContainer }>
            <h2>{title}</h2>
            { services.map((service, index) => {
                return(
                    <Service 
                        key={index} 
                        src={service.src} 
                        title={service.title} 
                        desc={service.desc} 
                        desc2={service.desc2 ? service.desc2 : undefined} 
                        desc3={service.desc3 ? service.desc3 : undefined} 
                        desc4={service.desc4 ? service.desc4 : undefined}
                        desc5={service.desc5 ? service.desc5 : undefined} 
                        desc6={service.desc6 ? service.desc6 : undefined}
                        desc7={service.desc7 ? service.desc7 : undefined}
                        desc8={service.desc8 ? service.desc8 : undefined}
                        reverse={service.reverse} 
                        small={service.small}/>
            )})}
        </div>
    )
}
