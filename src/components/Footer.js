import React from 'react'

const Footer = () => {
  const handleClickFB = () => {window.open("https://www.facebook.com/techomaxargentina/")}
  const handleClickIG = () => {window.open("https://www.instagram.com/techomax/")}
  return (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a onClick={handleClickFB} className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a onClick={handleClickIG} className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                {/*<li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>*/}
            </ul>
        </div>
    </footer>
)
}

export default Footer
