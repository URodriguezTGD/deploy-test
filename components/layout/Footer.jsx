import React from "react";
import WhiteLogo from '../brand/WhiteLogo'

// imports i18n
import { useRouter } from 'next/router';
import es from '../../locales/Footer/Footer_es';
import en from '../../locales/Footer/Footer_en';

export default function Footer() {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l5 s12">
                        <div className='valign-wrapper'>
                            <WhiteLogo width={43} height={36} />
                            <hr style={{width:'1px', height:'36px', margin:'0 10px 0 20px'}} className='white'/>
                            <span className="mdi mdi-instagram"></span>
                            <span className="mdi mdi-linkedin"></span>
                            <span className="mdi mdi-twitter"></span>
                        </div>
                        <ul>
                            <li>
                                <a href={ locale === 'es' ? '/privacy' : '/en/privacy'} className="grey-text text-lighten-4">
                                    {t.privacidad}
                                </a>
                            </li>
                            <li>
                                <a href='/terms-and-conditions' className="grey-text text-lighten-4">
                                    {t.terminos}
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col l1 s12 hide-on-small-only"><hr style={{width:'1px', height:'10em', margin:'0 0px'}} className='white'/></div>
                    <div className="col l3 s12">
                        <h5 className="white-text">{t.mxli}</h5>
                        <ul>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    {t.mxliEmail}
                                </a>
                            </li>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    {t.mxliTelefono}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">{t.cdmx}</h5>
                        <ul>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    {t.cdmxEmail}
                                </a>
                            </li>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    {t.cdmxTelefono}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    {t.copy}
                    <a className="grey-text text-lighten-4 right" href="#!">
                        {t.links}
                    </a>
                </div>
            </div>
        </footer>
    );
}
