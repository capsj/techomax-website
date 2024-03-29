import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import pic11 from '../../assets/images/about/experience.jpg'

const Experience = () => (
  <Layout>
    <Helmet>
      <title>Experiencia - TECHOMAX</title>
      <meta name="Experiencia" content="Experiencia TechoMax" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one" style={{backgroundImage: `linear-gradient(rgba(0,50,85), rgba(0,59,85,0.8)),url(${pic11})`}}>
        <div className="inner">
          <header className="major">
            <h1>Experiencia</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><h3><b>Conocimiento sin igual, recursos y habilidad.</b></h3>
            TechoMax ha adquirido ciertas operaciones que le han generado una gran experiencia, con algunas unidades que celebran más de 40
            años en el negocio. A lo largo de nuestra historia, nos hemos encontrado con prácticamente cualquier tipo de problema y hemos adquirido
            la experiencia para resolver los problemas de impermeabilización con rapidez y eficacia. Con fuertes vínculos con las comunidades locales,
            además de la fuerza de una empresa transnacional, las divisiones TechoMax le ofrecen lo mejor de ambos mundos: las empresas
            operadas localmente con un conocimiento en profundidad de las necesidades únicas de la comunidad, así como el acceso a los recursos
            disponibles sólo a una gran empresa de impermeabilización le puede dar, incluyendo:
            <ul>
              <li>
                Las soluciones y tecnologías más avanzadas diseñadas para extender la vida útil y el rendimiento de su techo, sea
                cual sea el tamaño de su negocio o de la azotea
              </li>
              <li>
                Rápida respuesta a las necesidades especiales o de emergencia, incluyendo el personal, equipamiento y suministros
                capacitado para realizar el trabajo de manera rápida y correctamente, incluso en las circunstancias o los lugares más difíciles
              </li>
              <li>
                Servicio consistente, orientado a la calidad, bajo una única y económica gestión de techado. TechoMax cuenta con un programa
                de especial importancia para los propietarios o gerentes encargados de múltiples instalaciones y ubicaciones
              </li>
              <li>
                Si sus instalaciones ocupan una gran extensión geográfica, podemos ofrecer un único punto de contacto que logre cubrir todas
                sus necesidades. Conduciendo de esta manera a rendiciones de cuentas claras, servicios de techado consistentes,
                y eliminando la necesidad de mantener relaciones con múltiples contratistas
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Experience
