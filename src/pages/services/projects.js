import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Projects = () => (
  <Layout>
    <Helmet>
      <title>Evaluación de nuevos proyectos - TECHOMAX</title>
      <meta name="Evaluación de nuevos proyectos" content="Evaluación de nuevos proyectos - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Evaluación de nuevos proyectos</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><h3><b>Rendimiento. A tiempo. Ajustado al presupuesto.</b></h3>
            Si usted está construyendo desde cero o busca realizar una expansión, es muy importante seleccionar un
            contratista de techos que pueda ofrecer las mejores condiciones para usted. La colocación del tejado es una parte fundamental
            de su programa de construcción y es un trabajo que se debe realizar profesionalmente, de forma segura,
            a tiempo y dentro del presupuesto.

            <br/>
            <br/>

            <b>Según lo programado</b>
            <br/>
            Puede ser un reto el manejar una variedad de sub-contratistas y proveedores en un proyecto grande.
            Nuestros supervisores locales ofrecerán una solución rentable que se adapte a su horario y presupuesto.
            <br/>
            <br/>

            <b>Seguridad</b>
            <br/>
            Contamos con personal sumamente experimentado. Contratados en relación de dependencia.
            Con ART y seguros vigentes, porque trabajamos de la forma más inteligente y nos centramos en un ambiente de trabajo más seguro.
            <br/>
            <br/>

            <b>Independientemente de la complejidad</b>
            <br/>
            Nuestros expertos están capacitados para trabajar en cualquier tipo de sistema de techo con los últimos materiales, tecnologías y equipos.
            <br/>
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Projects
