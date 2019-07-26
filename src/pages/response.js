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
            <h1>TECHO MAX RESPONDE</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p>En algún lugar, hay una tormenta con el nombre de su techo. <br/>
            Cuando se trata de las tormentas que nadie sabe a ciencia cierta cuándo, dónde o cómo ocurrirán.
            Todo lo que sabemos es que una tormenta que va a ocurrir en alguna parte en algún momento.<br/>

            Los daños por granizo en la Argentina se acercan a 70 millones de dólares al año y los efectos de la acumulación de agua son aún más devastadores.
            Si se suma todo y su techo y los negocios son vulnerables a consecuencias destructivas como la intrusión de agua, pérdida de energía, daños en equipos, el colapso del techo y otros problemas importantes que podrían causar graves pérdidas financieras.
            El manejo del caos después de la tormenta.<br/>
            Muchos contratistas de techado pueden rápidamente ser abrumados en situaciones de desastre, a veces incluso tomarse semanas para inspeccionar su propiedad.<br/>
            <strong>TechoMax tiene los recursos y la logística en el lugar para asegurarse de que la mano de obra y materiales adecuados lleguen a su sitio de manera urgente, oportuno. Y estamos certificados por los principales fabricantes de materiales de manera que las reparaciones se harán bien la primera vez.</strong>

          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Plan
