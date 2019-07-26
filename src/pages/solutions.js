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
            <h1>TECHO MAX SOLUCIONES</h1>
          </header>
          <p>No se limite a esperar lo inesperado, el genere un plan de acción antes de que ocurra.
            Daño de hielo, fuertes vientos, lluvia y nieve se cobran su precio en cualquier techo.<br/>
            Y aunque no se puede saber cuando estos fenómenos meteorológicos tendrán lugar, usted debe saber que usted está preparado para ellos. De lo contrario se corre el riesgo de problemas de techo que generen una  inesperada interrupción de su negocio.
            También haciendo que los inquilinos descontentos, decepcionado clientes y generando pérdidas financieras para su negocio.<br/>
            La buena noticia es que una pequeña inversión en un programa regular de inspecciones de techo y mantenimiento puede ayudarle a evitar y minimizar reparaciones inesperadas y costosas.
            De hecho, el análisis independiente muestra que los dólares gastados en programas de mantenimiento preventivo tienen un VAN positivo y pueden generar el 300% de ROI en el tiempo.
            Planificación de Mantenimiento es la mejor manera de prepararse para lo peor
            El Plan de Mantenimiento Programado de TechoMax está diseñado para tener la preocupación de la gestión de activos de techo, al tiempo que protege y prolonga la vida de su techo por:<br/>
            <ul>
              <li>
                Proporcionar los gastos previsibles para techos y menores costos generales.
              </li>
              <li>
                Ayudar a presupuestar dólares de mantenimiento y asignar los reemplazos de capital.
              </li>
              <li>
                Mantener sus garantías válidas y sus techos de realizar en su mejor momento.
              </li>
              <li>
                Adaptación de un programa de ajuste específicamente a su techo y su negocio.
              </li>
            </ul>
            En consecuencia, el Mantenimiento Programado le ayuda a evitar problemas de presupuesto inesperado, el tiempo de inactividad de instalaciones y una falla prematura del techo o su reemplazo.
          </p>

        </div>
      </section>
    </div>

  </Layout>
)

export default Plan
