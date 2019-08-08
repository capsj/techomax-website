import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Career = () => (
  <Layout>
    <Helmet>
      <title>Carrera - TECHOMAX</title>
      <meta name="Carrera" content="Carrera - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Carrera en TechoMax</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p>
            <blockquote>
              Hay tantas grandes oportunidades aquí. Desde que me uní a TechoMax he sido un capataz de la cuadrilla,
              coordinador de capacitación, superintendente, y más recientemente director de todas las operaciones de campo.
              Si te gusta un reto, TechoMax es el lugar para vos.
            </blockquote>
            <b>Manuel Aparicio</b><br/>
            Gerente de operaciones TechoMax Argentina<br/><br/>

            ¿Has pensado en una carrera en la industria de la impermeabiliación? La industria está viendo cambios muy interesantes
            en tecnologías sustentables sostenible para techos, tecnologías innovadoras y más.
            TechoMaxLatinoamerica está liderando el cambio. Como resultado, las oportunidades son mejores que nunca para
            los individuo talentosos, experimentados y con ansias progreso. En TechoMax, creemos no sólo en la atracción de los
            mejores individuos, sino en el desarrollo de los mejores. Existen oportunidades de carrera en áreas como finanzas,
            ventas, empleos verdes, techos solares marketing y mucho más. De los Jefes de Obra, de  cotizadores y los directores
            de proyectos a los capataces estamos siempre en busca de personas con talento para unirse a nuestro equipo.
            Aquí encontrarás una cultura que abarca la innovación, el trabajo en equipo y la diversidad, y ser parte del equipo.
            Tenemos mucho cuidado de nuestros empleados a través de los paquetes de compensación competitivos y ventajas comprensivas.
            Si deseas ser parte de TechoMax, ponete en contacto con nosotros hoy en <a href={() => { window.open("mailto:carreras@techomax.com.ar")}}>carreras@techomax.com.ar</a>.
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Career
