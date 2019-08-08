import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import pic from '../../assets/images/services/green-home.jpg'

const GreenSolutions = () => (
  <Layout>
    <Helmet>
      <title>Soluciones ambientales - TECHOMAX</title>
      <meta name="Soluciones ambientales" content="Soluciones ambientales - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Soluciones ambientales</h1>
          </header>
          <span className="image main"><img src={pic} alt="" /></span>
          <p>
            No es de extrañar que los techos verdes esten aumentando en popularidad.
            Cada vez más empresas se están dando cuenta de los beneficios financieros de un techo verde,
            así como la imagen positiva a los proyectos de techos verdes. TechoGreen es la solución total de techo verde.
            Como contratista de techo verde más importante del país, hemos instalado y mantenido más techos verdes que nadie.
            De principio a fin, nuestros expertos se asegurarán de que su techo verde sea el más saludable que puede ser.

            <br/>
            <br/>

            Los techos vegetativos o "techos verdes" se componen de varias capas, incluyendo los medios de comunicación
            entre el suelo y la vegetación. Estos techos están creciendo en popularidad, sobre todo porque la preocupación
            por el calentamiento global ha llegado a todos los niveles de gobierno y los negocios. Muchos municipios
            ofrecen beneficios fiscales para los constructores que construyen o mejoramiento de sus edificios con techos vegetativos.
            Estos sistemas ofrecen una variedad de beneficios:

            <br/>
            <br/>

            <ul>
              <li>
                Reducen la cantidad de aguas pluviales vertidas en los sistemas de alcantarillado municipales,
                lo que ayuda a reducir los riesgos de inundaciones.
              </li>
              <li>
                La vegetación que es una parte esencial de estos sistemas de ayuda a absorber los contaminantes,
                incluidos los gases de efecto invernadero como el dióxido de carbono.
              </li>
              <li>
                Estos techos ayudan a reducir el efecto "isla de calor" en las zonas urbanas, donde la concentración
                de hormigón y otros materiales absorbentes de calor puede aumentar la temperatura en varios grados
                en relación a las áreas menos urbanizadas.
              </li>
              <li>
                Proporcionan un mejor aislamiento. Los edificios en los que se han instalado
                estos techos verdes invariablemente experimentan menores costos de calefacción y refrigeración.
              </li>
              <li>
                Estos techos proporcionan un mejor hábitat para plantas y animales.
                En muchos lugares donde dichos techos están volviendo populares, se ha producido un notable incremento de las poblaciones de aves.
              </li>
              <li>
                Los techos verdes a menudo proporcionan beneficios estáticos y sirven como un añadido importante
                para los ocupantes del edificio ya que estos "jardines de la azotea" han ganado prevalencia y popularidad.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default GreenSolutions
