import React from 'react';
import FormContainerStyle from '../styles/FormContainer.module.css';

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/FormContainer/FormContainer_es';
import en from '../locales/FormContainer/FormContainer_en';

export const FormContainer = () => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={FormContainerStyle.formContainer}>
            <form id="contactForm" className={FormContainerStyle.form} autoComplete="off" onSubmit={e => {
                e.preventDefault();
                console.log(document.getElementById('fullName').value);
                console.log(document.getElementById('email').value);
                console.log(document.getElementById('asunto').value);
                console.log(document.getElementById('message').value);
                document.getElementById('contactForm').reset();
            }}>
                <div className={FormContainerStyle.row}>
                    <input type="text" id="fullName" name="fullName" placeholder={t.nombrePH} required />
                    <label htmlFor="fullName">{t.nombre}</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <input type="text" id="email" name="email" placeholder={t.emailPH} required />
                    <label htmlFor="email">{t.email}</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <input type="text" id="asunto" name="asunto" placeholder={t.asuntoPH} required />
                    <label htmlFor="asunto">{t.asunto}</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <textarea id="message" name="message" placeholder={t.mensajePH} required />
                    <label htmlFor="message">{t.mensaje}</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <input type="checkbox" name="terms" id="terms" required/>
                    <label htmlFor="terms"></label>
                    <label className={FormContainerStyle.terms}>{t.acepto} <a href={t.privacidadLink}>{t.privacidad}</a></label>
                </div>
                <div className={FormContainerStyle.row}>
                    <button type="submit">{t.boton}</button>
                </div>
            </form>
        </div>
    )
}
