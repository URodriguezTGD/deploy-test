import React from 'react';
import Image from 'next/image';
import ServiceStyle from '../styles/Service.module.css'

export const Service = ({ src, title, desc, desc2, desc3, desc4, desc5, desc6, desc7, desc8, reverse, small }) => {
    return (
        <>
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
                {title === '' ? null : <h3>{title}</h3>}
                <p>{desc}</p>
            </div>
        </div>
        <div style={{ flexDirection: "column", maxWidth: "600px", paddingLeft: "2rem" }}>
            {desc2 ? <p>{desc2}</p> : null}
            {desc3 ? <p>{desc3}</p> : null}
            {desc4 ? <p>{desc4}</p> : null}
            {desc5 ? <p>{desc5}</p> : null}
            {desc6 ? <p>{desc6}</p> : null}
            {desc7 ? <p>{desc7}</p> : null}
            {desc8 ? <p>{desc8}</p> : null}
        </div>
        </>
    )
}
