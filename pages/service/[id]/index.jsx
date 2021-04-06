import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import { TitleSection } from '../../../components/TitleSection';
import { ServiceContainer } from '../../../components/ServiceContainer';
import { route } from 'next/dist/next-server/server/router';

function index() {
    const router = useRouter();
    const { id } = router.query;

    const servicesAdmin = [
        {src: '/images/fiscal.jpeg', title:'Litigio', desc:'Ofrecemos atención especializada en todo tipo de controversias que deriven de la actividad del Estado, ya sea federal o local. Esto sea a través de los recursos administrativos ante la misma autoridad o a través de la via judicial.', reverse: false, small: false },
        {src: '/images/administrativo.jpeg', title:'Regulatorio', desc:'En el ámbito regulatorio, te asesoramos en materia de regulación pública en todo tipo de industrias, y los apoyamos en sus trámites y/o gestiones ante las autoridades competentes en todos los niveles de gobierno.', reverse: true, small: false }
    ];
    const servicesCorpo = [
        {src: '/images/corporativo.jpeg', title:'Litigio', desc:'En cuanto al derecho corporativo, brindamos asesoría y servicio en la constitución de empresas a través de los vehículos establecidos en las leyes mexicanas, celebración de actas de asamblea, elaboración de contratos, entre otros.', reverse: false, small: false}
    ];
    const servicesFiscal = [
        {src: '/images/bt-services.png', title:'Litigio', desc:'Brindamos servicio asesorando, elaborando e interponiendo medios de defensa en contra de las actuaciones de las autoridades fiscales que transgredan los derechos del contribuyente.', reverse: true, small: false }
    ];

    return (
        <div>
            <Head>
                <title>Derecho { id } | BrainTax</title>
            </Head>
            <TitleSection title='Soluciones' desc='Expertos en la práctica del derecho administrativo, corporativo y fiscal.' />
            {(() => {
                switch (router.query.id) {
                    case "administrativo":   return (<ServiceContainer title='Derecho Administrativo' services={servicesAdmin} gray={true} />);
                    case "corporativo": return (<ServiceContainer title='Derecho Corporativo' services={servicesCorpo} gray={true} />);
                    case "fiscal":  return (<ServiceContainer title='Derecho Fiscal' services={servicesFiscal} gray={true} />);
            }
      })()}
        </div>
    )
}

export default index
