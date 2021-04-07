import React from 'react';
import FormContainerStyle from '../styles/FormContainer.module.css';

export const FormContainer = () => {
    return (
        <div className={FormContainerStyle.formContainer}>
            <form className={FormContainerStyle.form} autoComplete="off">
                <div className={FormContainerStyle.row}>
                    <input type="text" id="fullName" name="fullName" placeholder="Escribe tu nombre y apellido..." />
                    <label htmlFor="fullName">Nombre</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <input type="text" id="email" name="email" placeholder="Escribe tu email..." />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <input type="text" id="asunto" name="asunto" placeholder="Escribe el asunto a tratar..." />
                    <label htmlFor="asunto">Asunto</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <textarea id="message" name="message" placeholder="Describe de manera breve en que podemos ayudarte..." />
                    <label htmlFor="message">Mensaje</label>
                </div>
                <div className={FormContainerStyle.row}>
                    <input type="checkbox" name="terms" id="terms"/>
                    <label htmlFor="terms"></label>
                    <label className={FormContainerStyle.terms}>He leido y acepto el <a href="/privacy">aviso de privacidad</a></label>
                </div>
                <div className={FormContainerStyle.row}>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}
