import React, { useEffect, useState } from "react";
import Logo1 from "../brand/Logo1";
import Logo2 from "../brand/Logo2";

// import styles from '../../styles/NavBar.jsx'
// import M from  'materialize-css/dist/js/materialize.min.js';

export default function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false);

    useEffect(() => {
        // let sidenav = document.querySelector('#mobile-demo');
        // M.Sidenav.init(sidenav, {});
        return () => {
            
        }
    }, [])
    return (
        <header>
            <nav>
                <div className={ menuClicked ? 'nav-wrapper': "nav-wrapper container" }>
                    <a
                        href="/"
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
                        {/* <i className="material-icons">menu</i> */}
                        <span className={ menuClicked ? 'mdi mdi-close ham' : 'mdi mdi-menu ham' }></span>
                    </a>
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/services">Servicios</a>
                        </li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contacto</a>
                        </li>
                    </ul>
                    <ul className={ menuClicked ? 'nav-menu-mobile active' : "nav-menu-mobile" }>
                        <li>
                            <a href="/"><span className={ menuClicked ? 'mdi mdi-home ham' : 'none' }></span>Inicio</a>
                        </li>
                        <li>
                            <a href="/services"><span className={ menuClicked ? 'mdi mdi-scale-balance ham' : 'none' }></span>Servicios</a>
                        </li>
                        <li className="only-mobile">
                            <a href="/blog"><span className={ menuClicked ? 'mdi mdi-post ham' : 'none' }></span>Blog</a>
                        </li>
                        <li className="only-mobile">
                            <a href="/contact"><Logo2 className="logoMenu" width={43} height={36}/>Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </header>
    );
}
