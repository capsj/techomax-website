import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Finance = () => (
  <Layout>
    <Helmet>
      <title>Fortaleza financiera - TECHOMAX</title>
      <meta name="Fortaleza financiera" content="Fortaleza financiera - TECHOMAX" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Fortaleza financiera</h1>
          </header>
          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <p><h3><b>La fuerza que necesita de una compañía de impermeabilizaciones</b></h3>
            Con TechoMax puede estar seguro de que usted ha elegido un socio de techado que es capaz de manejar incluso
            los proyectos más grandes, con la capacidad de unión y las garantías que sólo el líder de la industria puede ofrecer.
            <br/>
            <br/>

            <b>Paz mental</b>
            <br/>
            Estamos en el negocio para el largo plazo, no para honrar nuestras garantías. Estamos en condiciones de completar
            los proyectos de acuerdo al plan, sin tomar atajos. Muchos contratistas, no tienen el capital necesario y son propensos a
            salir del negocio de forma inesperada.
            <br/>
            <br/>

            <b>En todo el país</b>
            <br/>
            Nuestro crecimiento a más de 50 localidades y 350 profesionales del techado significa a nivel nacional la capacidad de
            respuesta lo mejor en su clase y una profundidad de recursos que no tiene comparación en la industria.
            <br/>
            <br/>

            <b>Relaciones con los proveedores fuertes</b>
            <br/>
            Estamos certificados en todos los sistemas de techado importantes y somos generalmente el mayor cliente de todos
            los principales fabricantes. Nuestros sistemas de materiales de inventario, manejo y compra en todo el país aseguran que
            los materiales adecuados están a la mano cuando usted los necesita, incluso en épocas de escasez, como situaciones de emergencia o desastre.
            <br/>
            <br/>

            <b>Reconocimiento de la industria</b>
            <br/>
            Tal vez nuestra calificación más importante es la distinción que hemos recibido de nuestros compañeros en el campo.
            Publicaciones de la industria, diferentes publicaciones, fuentes de datos y análisis de la industria de confianza, siendo considerados
            como el contratista de impermeabilización de techos más importantes del país.
            <br/>
          </p>
        </div>
      </section>
    </div>

  </Layout>
)

export default Finance
