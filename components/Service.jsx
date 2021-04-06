import React from 'react';
import Image from 'next/image';
import ServiceStyle from '../styles/Service.module.css'

export const Service = ({ src, title, desc, reverse, small }) => {
    return (
        <div className={ reverse ? `${ServiceStyle.serviceContainer} ${ServiceStyle.reverse}` : ServiceStyle.serviceContainer }>
            <h3 className={ServiceStyle.title}>{title}</h3>
            <div className={ small ? ServiceStyle.imageContainerSmall : ServiceStyle.imageContainerMed}>
                <Image
                    src={src}
                    alt={title}
                    width={350}
                    height={300} 
                    className={ServiceStyle.serviceImage}
                />
            </div>
            <p className={ServiceStyle.par}>{desc}</p>
            <div className={ reverse ? `${ServiceStyle.serviceText} ${ServiceStyle.reverseText}` : ServiceStyle.serviceText}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
