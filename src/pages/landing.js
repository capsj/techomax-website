import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/roofs-0.jpg'
import pic09 from '../assets/images/roofs-1.jpg'
import pic10 from '../assets/images/roofs-2.jpg'

const Landing = () => (
    <Layout>
        <Helmet>
            <title>Acerca de - TECHOMAX</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>TechoMax Repara</h2>
                    </header>
                    <p>Las goteras en los techos son impredecibles, y su reparación debe ser la adecuada en cada caso.
                        Todos los techos son vulnerables a las deficiencias que pueden conducir a fugas. El clima extremo - tornados, granizo, nieve, árboles caídos, incluso el  congelamiento y descongelado estacional puede dañar el techo.
                    </p>
                  <ul className="actions">
                    <li><Link to="/repairs" className="button">Ver más</Link></li>
                  </ul>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/plan" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TechoMax Plan</h3>
                            </header>
                            <p>El Plan de Mantenimiento Programado de TechoMax está diseñado para tener la preocupación de la gestión de activos de techo, al tiempo que protege y prolonga la vida de su techo.</p>
                            <ul className="actions">
                                <li><Link to="/plan" className="button">Ver más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/plan" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TechoMax Responde</h3>
                            </header>
                            <p>En algún lugar, hay una tormenta con el nombre de su techo.
                                Cuando se trata de las tormentas que nadie sabe a ciencia cierta cuándo, dónde o cómo ocurrirán.
                                Todo lo que sabemos es que una tormenta que va a ocurrir en alguna parte en algún momento.
                            </p>
                            <ul className="actions">
                                <li><Link to="/response" className="button">Ver más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TechoMax Soluciones</h3>
                            </header>
                            <p>No se limite a esperar lo inesperado, el genere un plan de acción antes de que ocurra.
                                Daño de hielo, fuertes vientos, lluvia y nieve se cobran su precio en cualquier techo.
                                Y aunque no se puede saber cuando estos fenómenos meteorológicos tendrán lugar, usted debe saber que usted está preparado para ellos.
                            </p>
                            <ul className="actions">
                                <li><Link to="/solutions" className="button">Ver más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
