import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Values = () => (
  <Layout>
    <Helmet>
      <title>Valores - TECHOMAX</title>
      <meta name="values" content="Nuestros valores fundamentales - TechoMax" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Nuestros valores fundamentales</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><b>Por encima de todo... más allá de Techos</b><br/>
            Un techo es algo más que un refugio. Un techo ofrece un enorme potencial y una gran variedad de oportunidades.
            Puede ser un compromiso con el medio ambiente. Una oportunidad para innovar. Una fuente de energía. Una ventaja para ser atendido.
            Nuestros Valores Fundamentales en TechoMax nos guían mientras dirigimos la industria hacia adelante y continuar ofreciendo a nuestros
            clientes los productos y servicios de primera clase que excedan sus expectativas.
            <br/>
            <br/>

            <b>Construyendo Nuestro Equipo</b>
            <br/>
            La construcción es un deporte de equipo. El trabajo en equipo es un requisito previo para nuestra reputación y el éxito.
            Estamos en el negocio para ayudar a nuestros empleados a alcanzar su potencial.
            Juntos podemos atraer y retener a los mejores trabajadores de techado en el país a través de nuestras oportunidades de seguridad,
            capacitación, remuneración y de carrera.
            <br/>
            <br/>

            <b>Nuestra Reputación</b>
            <br/>
            La construcción es un deporte de equipo. El trabajo en equipo es un requisito previo para nuestra reputación y el éxito.
            Estamos en el negocio para ayudar a nuestros empleados a alcanzar su potencial.
            Juntos podemos atraer y retener a los mejores trabajadores de techado en el país a través de nuestras oportunidades de seguridad,
            capacitación, remuneración y de carrera.
            <br/>
            <br/>

            <b>Impulsar Nuestro Crecimiento</b>
            <br/>
            Impulsamos el crecimiento de oportunidades, con inversión, y dando responsabilidades a nuestros empleados,
            para generar mayor satisfacción de nuestros clientes y rentabilidad para nuestros accionistas.
            Al concentrarnos en el crecimiento rentable estamos en control de nuestro destino sin depender excesivamente en los vaivenes de los mercados.
            <br/>
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Values
