import React from 'react';
import TitleStyle from '../styles/TitleSection.module.css'

export const TitleSection = ({ title, desc }) => {
    return (
        <div className={ TitleStyle.container }>
            <h2>{ title }</h2>
            <p>{ desc }</p>
        </div>
    )
}
