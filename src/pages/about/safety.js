import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Safety = () => (
    <Layout>
      <Helmet>
        <title>Seguridad - TECHOMAX</title>
        <meta name="Seguridad" content="Seguridad - TECHOMAX" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Seguridad</h1>
            </header>
            {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
            <p><h3><b>Concentrarse en la seguridad</b></h3>
              En TechoMax, la seguridad en el lugar de trabajo es nuestra prioridad. Nos tomamos la seguridad de nuestros empleados
              y la de otras personas que trabajan alrededor de nosotros muy en serio, por lo que nuestra política es ofrecer a nuestros empleados
              un ambiente de trabajo seguro a través de la capacitación y la supervisión reforzada.
              <br/>
              <br/>

              <b>Mantener una cultura de valores seguros de trabajo a través del liderazgo sostenido</b>
              <br/>
              <ul className="links">
                <li>Velamos por la seguridad de los empleados y subcontratistas TechoMax Argentina</li>
                <li>Contamos con ART, seguros y coberturas para cubrir un potencial accidente</li>
                <li>Maximizamos la capacitación de todos los empleados antes de poner un pie en el lugar de trabajo</li>
              </ul>

              <b>Planificamos la seguridad</b>
              <br/>
              <ul className="links">
                <li>La seguridad es incluida en la reunión previa al trabajo y revisado antes del inicio del trabajo</li>
                <li>Planes de seguridad específicos se realizan para cada trabajo</li>
                <li>Todos los trabajos tienen  plan independientemente de su tamaño</li>
                <li>La protección contra caídas está presente en cada lugar de trabajo</li>
              </ul>

              <b>Los empleados tienen el derecho y la responsabilidad de hacer cumplir la seguridad</b>
              <br/>
              <ul className="links">
                <li>Nuestros Colaboradores son incentivados a hablar cuando algo no es correcto</li>
                <li>Cada empleado tiene el poder y se espera que tome una acción inmediata cuando cualquier condición insegura presenta</li>
                <li>Nuestros directores de obras están disponibles en cualquier momento para resolver cualquier incidencia que pudiera ocurrir</li>
              </ul>

              <b>Escuchamos siempre activamente y consideramos todos los puntos de vista en materia de seguridad</b>
              <br/>
              <ul className="links">
                <li>Se desarrollan foros abiertos donde se anima fuertemente cualquier problema de seguridad que deben discutirse</li>
                <li>Los empleados deben sentirse libres de expresar e informar de todas las condiciones de seguridad en que se identifican preocupaciones</li>
                <li>Los directores de obra siempre escuchan activamente a todos los empleados con mente abierta</li>
                <li>Todo el equipo de seguridad estará disponible para todas las cuestiones no resueltas</li>
                <li>Cada tema tratado tiene una respuesta</li>
              </ul>

              <b>Debemos reconocer de manera consistente y defender usos correctos, comportamientos y las prácticas de seguridad en Techo Max Latinoamérica</b>
              <br/>
              <ul className="links">
                <li>Todos nuestros empleados son responsables de señalar los malos hábitos y corregirlos. Somos un equipo, cuidando por los demás</li>
                <li>Los directores de obra deben entrenar y capacitar a los empleados sobre cómo abordar los malos hábitos</li>
                <li>Tenemos tolerancia cero con comportamientos inseguros</li>
                <li>Nuestros informes de observación de seguridad son obligatorios en todos los puestos de trabajo</li>
                <li>Cualquier observación insegura es atendida de inmediato</li>
              </ul>
            </p>
          </div>
        </section>
      </div>

    </Layout>
)

export default Safety
