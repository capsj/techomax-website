import React from 'react'

const BannerLanding = ({title, subtitle}) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            <div className="content">
                <p>{subtitle}</p>
            </div>
        </div>
    </section>
);

export default BannerLanding
