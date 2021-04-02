import React from "react";
import WhiteLogo from '../brand/WhiteLogo'


export default function Footer() {
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
                                <a href='/' className="grey-text text-lighten-4">
                                    Aviso de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href='/terms-and-conditions' className="grey-text text-lighten-4">
                                    Términos y Condiciones
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col l1 s12 hide-on-small-only"><hr style={{width:'1px', height:'10em', margin:'0 0px'}} className='white'/></div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Mexicali, BC</h5>
                        <ul>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    mexicali@braintax.mx
                                </a>
                            </li>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    +52 686 123 4567
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">CDMX</h5>
                        <ul>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    cdmx@braintax.mx
                                </a>
                            </li>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    +52 55 2112 3456
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2021 BrainTax
                    <a className="grey-text text-lighten-4 right" href="#!">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
}
