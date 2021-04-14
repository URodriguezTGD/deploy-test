import React, { useEffect, useState } from "react";
import Logo1 from "../brand/Logo1";
import Logo2 from "../brand/Logo2";

// imports i18n
import { useRouter } from 'next/router';
import es from '../../locales/Navbar/Navbar_es';
import en from '../../locales/Navbar/Navbar_en';

export default function NavBar() {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const current = locale;
    const t = locale === 'es' ? es : en;

    const changeLanguage = () => {
        const locale = current === 'es' ? 'en' : 'es';
        router.push(router.asPath,router.asPath,{ locale: locale });
      };

    const [menuClicked, setMenuClicked] = useState(false);
    return (
        <header>
            <nav>
                <div className={ menuClicked ? 'nav-wrapper': "nav-wrapper container" }>
                    <a
                        href={ locale === 'es' ? '/' : '/en' }
                        className="brand-logo center blue-text hide-on-small-only"
                        style={{ paddingTop: ".2em" }}
                    >
                        <Logo1 />
                    </a>
                    <a
                        href='#'
                        data-target="mobile-demo"
                        className={ menuClicked ? "sidenav-trigger ham-container" : "sidenav-trigger" }
                        onClick={() => { setMenuClicked(!menuClicked) }}
                    >
                        <span className={ menuClicked ? 'mdi mdi-close ham' : 'mdi mdi-menu ham' }></span>
                    </a>
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <a href={ locale === 'es' ? '/' : '/en' }>{t.inicio}</a>
                        </li>
                        <li>
                            <a href={ locale === 'es' ? '/services' : '/en/services' }>{t.servicios}</a>
                        </li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href={ locale === 'es' ? '/blog' : '/en/blog' }>{t.blog}</a>
                        </li>
                        <li>
                            <a href={ locale === 'es' ? '/contact' : '/en/contact' }>{t.contacto}</a>
                        </li>
                        <li>
                            <a className="selector" onClick={changeLanguage}>{locale}</a>
                        </li>
                    </ul>
                    
                    <ul className={ menuClicked ? 'nav-menu-mobile active' : "nav-menu-mobile" }>
                        <li>
                            <a href={ locale === 'es' ? '/' : '/en' }><span className='mdi mdi-home ham'></span>{t.inicio}</a>
                        </li>
                        <li>
                            <a href={ locale === 'es' ? '/services' : '/en/services' }><span className='mdi mdi-scale-balance ham'></span>{t.servicios}</a>
                        </li>
                        <li className="only-mobile">
                            <a href={ locale === 'es' ? '/blog' : '/en/blog' }><span className='mdi mdi-post ham'></span>{t.blog}</a>
                        </li>
                        <li className="only-mobile">
                            <a href={ locale === 'es' ? '/contact' : '/en/contact' }><Logo2 className="logoMenu" width={43} height={36}/>{t.contacto}</a>
                        </li>
                        <li>
                            <a className="selector" onClick={changeLanguage}>{locale}</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </header>
    );
}
