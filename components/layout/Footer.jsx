import React from "react";
import WhiteLogo from '../brand/WhiteLogo'

// imports i18n
import { useRouter } from 'next/router';
import es from '../../locales/Footer/Footer_es';
import en from '../../locales/Footer/Footer_en';
import Link from "next/link";

export default function Footer() {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l3 s12">
                        <div className='valign-wrapper' style={{marginTop:'16.4px'}}>
                            <Link href='/'>
                                <a>
                                    <WhiteLogo width={43} height={36} />
                                </a>
                            </Link>
                            <hr style={{width:'1px', height:'36px', margin:'0 10px 0 20px',display:'block'}} className='white'/>
                            <a href="https://www.Instagram.com/braintaxlegal" target='_blank'><span className="mdi mdi-instagram"></span></a>
                            <a href="https://twitter.com/braintaxlegal" target='_blank'><span className="mdi mdi-twitter"></span></a>
                            <a href="https://www.linkedin.com/company/braintaxlegal" target='_blank'><span className="mdi mdi-linkedin"></span></a>
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
                    <div className="col l1 s12 hide-on-small-only"><hr style={{width:'1px', height:'10em', margin:'16.4px 0 0 0'}} className='white'/></div>
                    <Link href='/contact#mxli'>
                        <div className="col l4 s12"  style={{cursor:'pointer'}}>
                            <h5 className="white-text">{t.mxli}</h5>
                            <ul>
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                    >
                                        {t.mxliDir}
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                    >
                                        {t.mxliEmail}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                    >
                                        {t.mxliTelefono}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Link>
                    <Link href='/contact#cdmx'>
                        <div className="col l4 s12"  style={{cursor:'pointer'}}>
                            <h5 className="white-text">{t.cdmx}</h5>
                            <ul>
                            <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                    >
                                        {t.cdmxDir}
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                    >
                                        {t.cdmxEmail}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="grey-text text-lighten-3"
                                    >
                                        {t.cdmxTelefono}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    {t.copy}
                    <a className="grey-text text-lighten-4 right">
                        {t.links}
                    </a>
                </div>
            </div>
        </footer>
    );
}
