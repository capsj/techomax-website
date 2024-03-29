import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import pic03 from '../../assets/images/roofs-2.jpg'

const Maintenance = () => (
  <Layout>
    <Helmet>
      <title>Mantenimiento Programado - TECHOMAX</title>
      <meta name="Mantenimiento Programado" content="Mantenimiento Programado - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one" style={{backgroundImage: `linear-gradient(rgba(0,50,85), rgba(0,59,85,0.8)), url(${pic03})`}}>
        <div className="inner">
          <header className="major">
            <h1>Mantenimiento Programado</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><h3>No se limite a esperar lo inesperado, genere un plan de acción antes de que ocurra. <br/>Extienda los plazos de nuestra garantía.</h3>
            Daños por hielo, fuertes vientos, lluvia y nieve se cobran su precio en cualquier techo.
            Y aunque no se puede saber cuando estos fenómenos meteorológicos tendrán lugar, usted debe saber que está preparado para ellos.
            De lo contrario, corre el riesgo de problemas que generen inesperadas interrupciones de su negocio.
            También haciendo que los inquilinos descontentos, decepcionado clientes y generando pérdidas financieras para su negocio.
            <br/>

            La buena noticia es que una pequeña inversión en un programa regular de inspecciones de techo y mantenimiento puede ayudarle a
            evitar y minimizar reparaciones inesperadas y costosas. De hecho, el análisis independiente muestra que el dinero gastado en
            programas de mantenimiento preventivo tiene un VAN positivo y puede generar el 300% de ROI en el tiempo.
            <br/>
            <br/>

            <b>Planificación de Mantenimiento es la mejor manera de prepararse para lo peor</b>
            <br/>
            El Plan de Mantenimiento Programado de TechoMax está diseñado para tener la preocupación de la gestión de activos de techo,
            al tiempo que protege y prolonga la vida de su techo por:
            <br/>
            <ul>
              <li>Proporcionar los gastos previsibles para techos y menores costos generales</li>
              <li>Ayudar a presupuestar dólares de mantenimiento y asignar los reemplazos de capital</li>
              <li>Mantener sus garantías válidas y sus techos de realizar en su mejor momento</li>
              <li>Adaptación de un programa de ajuste específicamente a su techo y su negocio</li>
            </ul>
            En consecuencia, el Mantenimiento Programado le ayuda a evitar problemas de presupuesto inesperado,
            el tiempo de inactividad de instalaciones y una falla prematura del techo o su reemplazo.
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Maintenance
