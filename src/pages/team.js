import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic08 from '../assets/images/CNO.jpg'
import BannerTeam from '../components/BannerTeam'

const Landing = () => (
  <Layout>
    <Helmet>
      <title>Conozca al Equipo- TECHOMAX</title>
      <meta name="description" content="Team Page" />
    </Helmet>

    <BannerTeam />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Equipo de Gestion</h2>
          </header>
          {/*<ul className="actions">*/}
          {/*  <li><Link to="/repairs" className="button">Ver más</Link></li>*/}
          {/*</ul>*/}
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h2>Claudio G. Falcon,<br/> C.E.O.</h2>
              </header>
              {/*<ul className="actions">*/}
              {/*  <li><Link to="/plan" className="button">Ver más</Link></li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </section>
        <section>
          <Link to="/" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h2>Diego Harte, <br/>Presidente MH Consult Dirección Comercial Corporativa</h2>
              </header>
              {/*<ul className="actions">*/}
              {/*  <li><Link to="/response" className="button">Ver más</Link></li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </section>
        <section>
        <Link to="/" className="image">
          <img src={pic08} alt="" />
        </Link>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h2>Ernesto S. Frega, <br/>Dirección de Obras</h2>
            </header>
            {/*<ul className="actions">*/}
            {/*  <li><Link to="/solutions" className="button">Ver más</Link></li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </section>
        <section>
          <Link to="/" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h2>Maria Esther de Mena,<br/> Dirección de Productos</h2>
              </header>
              {/*<ul className="actions">*/}
              {/*  <li><Link to="/solutions" className="button">Ver más</Link></li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </section>
      </section>
    </div>

  </Layout>
)

export default Landing
