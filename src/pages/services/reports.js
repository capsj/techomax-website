import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Reports = () => (
  <Layout>
    <Helmet>
      <title>Informes - TECHOMAX</title>
      <meta name="Informes" content="Informes - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Informes</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><h3><b>Conozca el estado de su techo en cada momento.</b></h3>
            Nuestros técnicos capacitados examinan el sistema de techo exterior, al tiempo que observa las condiciones de los
            paneles de pared, separadores de área, parapetos y penetraciones del techo y la documentación de las condiciones de
            control aplicables en el futuro.

            <br/>
            <br/>

            <b>Evite el tiempo de inactividad</b>
            <br/>
            La inversión en un programa de mantenimiento que proporciona inspecciones exhaustivas del techo
            puede ayudar a evitar costosas fugas y mantener su operación funcionando sin problemas.
            <br/>
            <br/>

            <b>Haga que sus inversiones de mantenimiento vayan más lejos</b>
            <br/>
            La prolongación de la vida en la azotea, el programa de mantenimiento planificado que proporciona inspecciones
            exhaustivas y rigurosas en sus techos.
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Reports
