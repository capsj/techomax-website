import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/roofs-0.jpg'
import pic02 from '../assets/images/roofs-1.jpg'
import pic03 from '../assets/images/roofs-2.jpg'
import pic04 from '../assets/images/roofs-3.jpg'
import pic05 from '../assets/images/roofs-4.jpg'
import pic06 from '../assets/images/team.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="TechoMax Argentina"
                    meta={[
                        { name: 'description', content: 'Mantenimiento y Garantía: 10 años. Expertos - Solicite Cotización.' },
                        { name: 'keywords', content: 'Mantenimiento Planificado. Impermeabilización. Respuesta a desastres. Reparación y Servicios. Soluciones Ambientales. Servicios: Registro de Servicios, Fotografía, Propuesta Detallada, Atendemos Emergencias.' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Inspecciones</h3>
                                <p>Nuestros técnicos capacitados examinan el sistema de techo exterior, al tiempo que observa las condiciones de los paneles de pared, separadores de área, parapetos y penetraciones del techo y la documentación de las condiciones de control aplicables en el futuro.
                                </p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Limpieza</h3>
                                <p>Todos los desechos se eliminan de la superficie del techo, canaletas, desagües interiores ya través de la pared imbornales para evitar que se acumule el agua que pueden causar envejecimiento prematuro y daños en el techo.
                                </p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Mantenimiento</h3>
                                <p>Según sea necesario, reemplazamos el sellador deteriorado en sellos de metal,  re-sellamos  tapajuntas  y perímetros. También aseguramos drenajes y revisamos zinguería y cañerías de desagote.
                                </p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Informes</h3>
                                <p>Proporcionamos una reporte  del trabajo realizado, la evaluación de las condiciones del techo, incluyendo planos y fotografías del techo actualizados.
                                </p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Soluciones ambientales</h3>
                                <p>
                                    Los lugares de trabajo saludables son buenos para los negocios. Considere TechoMax Soluciones Ambientales.
                                </p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Equipo</h3>
                                <p>Conozca al Equipo</p>
                            </header>
                            <Link to="/team" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Sobre Nosotros</h2>
                            </header>
                            <p>TechoMax Argentina, es el contratista de impermeabilización para techos y cubiertas más importante del país.</p>
                            <ul className="actions">
                                <li><Link to="/about" className="button next">Conocé Más</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
