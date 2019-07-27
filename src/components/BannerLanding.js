import React from 'react'

function BannerLanding (props) { return (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                <p>{props.subtitle}</p>
            </div>
        </div>
    </section>
) }

export default BannerLanding
