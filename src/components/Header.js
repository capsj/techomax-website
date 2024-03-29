import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../assets/images/logo-techomax.png'

const Header = ({onToggleMenu}) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={logo} alt="" style={{ marginTop: 7 }}/></Link>
        <nav>
            <a className="menu-link" onClick={onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
