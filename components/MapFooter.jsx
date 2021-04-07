import React from 'react';
import MapFooterStyle from '../styles/MapFooter.module.css'

export const MapFooter = ({ title }) => {
    return (
        <div className={MapFooterStyle.mapFooter}> 
            <h2>{title}</h2>
        </div>
    )
}
