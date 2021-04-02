import React, { useEffect } from "react";
import Logo1 from "../brand/Logo1";

// import styles from '../../styles/NavBar.jsx'
// import M from  'materialize-css/dist/js/materialize.min.js';

export default function NavBar() {
    useEffect(() => {
        // let sidenav = document.querySelector('#mobile-demo');
        // M.Sidenav.init(sidenav, {});
        return () => {
            
        }
    }, [])
    return (
        <header>
            <nav>
                <div className="nav-wrapper container">
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
                        className="sidenav-trigger"
                    >
                        {/* <i className="material-icons">menu</i> */}
                        <span className='mdi mdi-judaism red-text'></span>
                    </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/services">Servicios</a>
                        </li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <a href="sass.html">Sass</a>
                </li>
                <li>
                    <a href="badges.html">Components</a>
                </li>
                <li>
                    <a href="collapsible.html">Javascript</a>
                </li>
                <li>
                    <a href="mobile.html">Mobile</a>
                </li>
            </ul>
        </header>
    );
}
