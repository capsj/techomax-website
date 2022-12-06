import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import whatsapp from "../assets/images/logo-whatsapp.png";

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props

        return (
            <div>

                <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                    <div id="wrapper">
                        <Header onToggleMenu={this.handleToggleMenu} />
                        {children}
                        <Contact />
                        {/*<Footer />*/}
                    </div>
                    <Menu onToggleMenu={this.handleToggleMenu} />
                </div>
                <a href="https://wa.me/541165775397" style={{
                    position: `fixed`,
                    bottom: `2%`,
                    right: `2%`,
                    zIndex: 999
                }}>
                    <img src={whatsapp} alt="WhatsApp Icon" style={{ width: `40%`, float: "right" }}></img>
                </a>
            </div>
        )
    }
}

export default Layout
