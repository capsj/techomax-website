import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({onToggleMenu}) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={onToggleMenu} to="/about">Sobre Nosotros</Link></li>
                <li><Link onClick={onToggleMenu} to="/#main">Servicios</Link></li>
                <li><Link onClick={onToggleMenu} to="/services/projects">Evaluación de nuevos proyectos</Link></li>
                <li><Link onClick={onToggleMenu} to="/services/maintenance">Mantenimiento</Link></li>
                <li><Link onClick={onToggleMenu} to="/services/replacements">Reemplazos</Link></li>
                <li><Link onClick={onToggleMenu} to="/services/green">Soluciones ambientales</Link></li>
                <li><Link onClick={onToggleMenu} to="/services/reports">Informes</Link></li>
            </ul>
        </div>
        <a className="close" onClick={onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
