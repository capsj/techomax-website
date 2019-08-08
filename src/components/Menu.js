import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">Sobre Nosotros</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#main">Servicios</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services/projects">Evaluación de nuevos proyectos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services/maintenance">Mantenimiento</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services/replacements">Reemplazos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services/green">Soluciones ambientales</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services/reports">Informes</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
