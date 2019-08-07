import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a onClick={() => { window.open("https://www.facebook.com/techomaxargentina/")}} className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a onClick={() => { window.open("https://www.instagram.com/techomax/")}} className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                {/*<li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>*/}
            </ul>
        </div>
    </footer>
)

export default Footer
