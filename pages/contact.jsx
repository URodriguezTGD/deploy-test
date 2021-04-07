import React from 'react';
import Head from "next/head";
import { TitleSection } from '../components/TitleSection';
import { FormContainer } from '../components/FormContainer';
import { MapsContainer } from '../components/MapsContainer';

export default function contact() {
    return (
        <div>
            <Head>
                <title>Contacto | BrainTax</title>
                <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <TitleSection title='Contáctanos' desc='Con gusto nos pondremos en contacto contigo a la breveda.' />
            <FormContainer />
            <TitleSection title='Oficinas' desc='Agradecemos tu confianza y estamos a tus órdenes.' />
            <MapsContainer />
        </div>
    )
}
