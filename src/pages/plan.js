import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/roofs-5.jpg'

const Plan = () => (
    <Layout>
        <Helmet>
            <title>PLAN - TECHOMAX</title>
            <meta name="description" content="TECHO MAX PLAN" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>TECHO MAX PLAN</h1>
                    </header>
                    {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
                    <p>El Plan de TechoMax, le da toda la información que necesita para gestionar una cartera de las cubiertas y las herramientas para optimizar su mantenimiento de la azotea y los presupuestos de capital.<br/>
                      Diseñado para proporcionar una gestión más eficaz de su cartera de techos. Comienza con una evaluación rigurosa y la recolección de datos relevantes que impulsa las decisiones informadas para techos. Todos nuestros Técnicos Certificados Tecta Rastreador deben someterse a una amplia formación y las pruebas para calificarlos para esta distinción.
                      <br/>
                      <br/>
                      El Plan de Mantenimiento Programado de TechoMax está diseñado para tener la preocupación de la gestión de activos de techo, al tiempo que protege y prolonga la vida de su techo por: <br/>
                    </p>
                      <ul>
                        <li>Proporcionar los gastos previsibles para techos y menores costos generales.<br/></li>
                        <li>Ayudar a presupuestar dólares de mantenimiento y asignar los reemplazos de capital.<br/></li>
                        <li>Mantener sus garantías válidas y sus techos de realizar en su mejor momento.<br/></li>
                        <li>Adaptación de un programa de ajuste específicamente a su techo y su negocio.<br/></li>
                      </ul>
                    <p>En consecuencia, el Mantenimiento Programado le ayuda a evitar problemas de presupuesto inesperado, el tiempo de inactividad de instalaciones y una falla prematura del techo o su reemplazo.<br/></p>

                </div>
            </section>
        </div>

    </Layout>
)

export default Plan
