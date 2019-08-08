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
import nProject from '../assets/images/new-project.jpg'
import reports from '../assets/images/informes.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="TechoMax Argentina"
                    meta={[
                        { name: 'description', content: 'Mantenimiento y Garantía: 10 años. Expertos - Solicite Cotización.' },
                        { name: 'keywords', content: 'Mantenimiento Planificado. Impermeabilización. Respuesta a desastres. Reparación y Servicios. Soluciones Ambientales. Servicios: Registro de Servicios, Fotografía, Propuesta Detallada, Atendemos Emergencias. Garantizamos nuestras obras 10 años.\n' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%,rgba(20, 20, 20, 0.2) 100%), url(${pic02})`}}>
                            <header className="major">
                                <h3>Reparaciones</h3>
                                <p>Las goteras son impredecibles, su adecuada reparación no debe serlo.
                                </p>
                            </header>
                            <Link to="/services/repairs" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%,rgba(20, 20, 20, 0.2) 100%), url(${nProject})`}}>
                            <header className="major">
                                <h3>Evaluación de nuevos proyectos</h3>
                                <p>
                                    Rendimiento. A tiempo. Ajustado al presupuesto.
                                    Si usted está construyendo desde cero o busca realizar una expansión,
                                    es muy importante seleccionar un contratista que pueda ofrecer
                                    las mejores condiciones.
                                </p>
                            </header>
                            <Link to="/services/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%,rgba(20, 20, 20, 0.2) 100%), url(${pic03})`}}>
                            <header className="major">
                                <h3>Mantenimiento</h3>
                                <p>Según sea necesario, reemplazamos el sellador deteriorado en sellos de metal, re-sellamos tapajuntas y perímetros. También aseguramos drenajes y revisamos zinguería y cañerías de desagote.
                                </p>
                            </header>
                            <Link to="/services/maintenance" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%,rgba(20, 20, 20, 0.2) 100%), url(${pic04})`}}>
                            <header className="major">
                                <h3>Reemplazos</h3>
                                <p>
                                    Cada techo tiene una vida útil definida. Y cuando llega el momento de reemplazar su techo,
                                    tiene que encontrar el sistema adecuado para su construcción, presupuesto, metas y objetivos.
                                </p>
                            </header>
                            <Link to="/services/replacements" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%,rgba(20, 20, 20, 0.2) 100%), url(${pic05})`}}>
                            <header className="major">
                                <h3>Soluciones ambientales</h3>
                                <p>
                                    Los lugares de trabajo saludables son buenos para los negocios. Considere TechoMax Soluciones Ambientales.
                                </p>
                            </header>
                            <Link to="/services/green" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%,rgba(20, 20, 20, 0.2) 100%), url(${reports})`}}>
                            <header className="major">
                                <h3>Informes</h3>
                                <p>Proporcionamos un reporte  del trabajo realizado, la evaluación de las condiciones del techo, incluyendo planos y fotografías del techo actualizados.
                                </p>
                            </header>
                            <Link to="/services/reports" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Sobre Nosotros</h2>
                            </header>
                            <p>
                                TechoMax Argentina es el contratista de impermeabilización para techos más importante de Argentina, con operaciones
                                tanto en Capital y GBA así como en el interior del país. Nuestro compromiso inquebrantable con la calidad,
                                experiencia y profesionalismo es lo que nos hace el líder del sector. La instalación, la reparación,
                                la respuesta ante daños en casos de emergencia, así como las opciones de sustentabilidad que usted o su
                                empresa necesiten. Le ofrecemos la capacidad de respuesta de un contratista de techos de su zona respaldada por
                                los recursos financieros, el tamaño y la estabilidad que necesita de una solución para techos comerciales de gran
                                envergadura.
                            </p>
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
