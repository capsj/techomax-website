import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import pic from '../../assets/images/services/green-home.jpg'

const Repairs = () => (
  <Layout>
    <Helmet>
      <title>Reparaciones - TECHOMAX</title>
      <meta name="Reparaciones" content="Reparaciones - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Reparaciones</h1>
          </header>
          {/*<span className="image main"><img src={pic} alt="" /></span>*/}
          <p>
            Todos los techos son vulnerables a las deficiencias que pueden conducir a goteras.
            El clima extremo – lluvia, tornados, granizo, nieve, árboles caídos, incluso los ciclos de congelación y
            descongelación de temporada pueden dañar el techo. En el momento en que una mancha del techo aparece en
            interiores o gotas de agua en su negocio, el daño ya está en marcha.
            La filtración del agua puede poner en peligro la estructura interna de un edificio, destruir inventario y
            equipo, y puede crear superficies resbaladizas, poniendo a las personas en riesgo de lesión.
            Usted necesita un profesional que puede arreglar su problema de techado de la forma más rápida económica y segura.
            <br/>
            <br/>

            <ul>
              <li>Formación de ampollas y grietas</li>
              <li>Roturas oxidaciones de zinguería</li>
              <li>Claraboyas con pérdidas</li>
              <li>El agua que se aloja en el techo más de 48 horas</li>
              <li>Las manchas de agua en el techo</li>
              <li>Hielo en el borde de la azotea</li>
              <li>Daños en el techo causado al instalar o dar servicio al equipo en la azotea</li>
            </ul>

            <b>Departamento de servicio dedicado</b>
            <br/>
            Nuestra organización es líder de estos servicios en la industria.
            Con técnicos capacitados en todo el país, que obtendrá una respuesta inmediata para que no haya fugas o daños.
            <br/>
            <br/>

            <b>Con experiencia, certificado y profesional</b>
            <br/>
            Nuestros técnicos tienen la capacitación en todos los tipos de sistemas de techo y están certificados para
            trabajar en sistemas de todos los fabricantes de techos garantizando nuestras obras por 10 años por escrito.
            Nuestros equipos llegan en uniforme con insignias de identificación, para mantener una imagen profesional a su negocio.
            <br/>
            <br/>

            <b>Pasos para que su negocio vuelva a la normalidad:</b>
            <br/>
            1. <u>Contacto</u>
            <br/>
            Para cualquier necesidad de material para techos, en cualquier momento, los profesionales de techado de TechoMax están disponibles 24x7x365 - por teléfono, por fax o por correo electrónico.

            <br/>
            2. <u>Confirmación</u>
            <br/>
            TechoMax confirma la orden y los horarios de la llamada de servicio. Las llamadas de emergencia reciben tratamiento prioritario con un tiempo de respuesta de menos de ocho horas.

            <br/>
            3. <u>Realización del trabajo</u>
            <br/>
            profesionales del techado de TechoMax solucionan su problema - el tiempo promedio para completar las reparaciones de fugas es un plazo de 72 horas de contacto inicial.

            <br/>
            4. <u>Informes</u>
            <br/>
            Registros detallados se mantienen y fotos proporcionados a las reparaciones de documentos.

          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Repairs
