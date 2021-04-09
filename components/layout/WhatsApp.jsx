import React, { useState } from 'react';
import WhatsAppLogo from '../images/WhatsAppLogo';
import WhatsAppStyle from '../../styles/WhatsApp.module.css'

// imports i18n
import { useRouter } from 'next/router';
import es from '../../locales/WhatsApp/WhatsApp_es';
import en from '../../locales/WhatsApp/WhatsApp_en';

export const WhatsApp = () => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');
    return (
        <div className={ isOpen ? `${WhatsAppStyle.whatsappContainer} ${WhatsAppStyle.open}` : `${WhatsAppStyle.whatsappContainer} ${WhatsAppStyle.close}`} onClick={() => {
            if(!isOpen){
                setIsOpen(true);
                setMessage('');
                setNombre('');
                setNumero('');
            }
        }}>
            <WhatsAppLogo width={25} height={25} className={ isOpen ? `${WhatsAppStyle.logo} ${WhatsAppStyle.displaynt}` : WhatsAppStyle.logo} />
            <h5 className={ isOpen ? WhatsAppStyle.displaynt : WhatsAppStyle.mobileTitle } >{t.title}</h5>
            <div className={ isOpen ? `${WhatsAppStyle.formContainer} ${WhatsAppStyle.show}` : `${WhatsAppStyle.formContainer}` } >
                <div className={WhatsAppStyle.cardHeader} onClick={()=>setIsOpen(false)}>
                    <WhatsAppLogo width={25} height={25} />
                    <h5>WhatsApp</h5>
                    <span className={`mdi mdi-close ${WhatsAppStyle.equis}`}></span>
                </div>
                <div className={WhatsAppStyle.form} >
                    <h6>{t.subtitle}</h6>
                    <p>{t.desc}</p>
                    <form autoComplete="off">
                        <label htmlFor="whatsNombre">{t.nombre}</label>
                        <input type="text" name="whatsNombre" id="whatsNombre" placeholder={t.nombreDesc} value={nombre} onChange={e => setNombre(e.target.value)} required />
                        <label htmlFor="whatsNumero">{t.numero}</label>
                        <input type="text" name="whatsNumero" id="whatsNumero" placeholder={t.numeroDesc} value={numero} onChange={e => setNumero(e.target.value)} />
                        <label htmlFor="whatsMensaje">{t.mensaje}</label>
                        <textarea id="whatsMensaje" name="whatsMensaje" placeholder={t.mensajeDesc} className="materialize-textarea" value={message} onChange={e => setMessage(e.target.value)} />
                        <a className={WhatsAppStyle.boton} 
                            href={`https://web.whatsapp.com/send?phone=526861123010&text=${message}`}
                            target="_blank"
                            onClick={()=>{
                                setIsOpen(false);
                            }}
                            >{t.boton}</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
