import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import pic04 from '../../assets/images/roofs-3.jpg'

const Replacements = () => (
  <Layout>
    <Helmet>
      <title>Reemplazo total de la cubierta - TECHOMAX</title>
      <meta name="Reemplazo total de la cubierta" content="Reemplazo total de la cubierta - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one" style={{backgroundImage:  `linear-gradient(rgba(0,48,85), rgba(0,59,85,0.8)), url(${pic04})`}}>
        <div className="inner">
          <header className="major">
            <h1>Reemplazo total de la cubierta</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><h3><b>La experiencia para reemplazar cualquier sistema de techo.</b></h3>
            Cada techo tiene una vida útil definida. Y cuando llega el momento de reemplazar su techo, tiene que
            encontrar el sistema adecuado para su construcción, presupuesto, metas y objetivos.
            Vamos a trabajar estrechamente con usted para crear el sistema adecuado para las necesidades de su instalación.
            Usted tendrá la tranquilidad de saber que su sistema de techo se construyó con una planificación experta y la instalación.

            <br/>
            <br/>

            <b>Una interrupción mínima</b>
            <br/>
            El hecho de que sea momento de reemplazar el techo no significa que sus operaciones puedan parar.
            Nos aseguraremos de que su negocio siga funcionando sin problemas y sufra la menor interrupción posible.
            <br/>
            <br/>

            <b>Todas las marcas, todos los sistemas</b>
            <br/>
            Trabajamos con todo tipo de fabricante y somos expertos en todos los sistemas de techo.
            Vamos a explicar las alternativas para que pueda tomar las mejores decisiones para usted y su negocio.
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Replacements
