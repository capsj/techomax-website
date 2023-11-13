import React from 'react'

const Contact = () => {
    const handleClickMail = () => { window.open("mailto:techomaxargentina@gmail.com")};
    const handleClickPhone = () => { window.open("https://wa.me/541165775397")};
    const handleClickAddress = () => { window.open("https://maps.app.goo.gl/TrEUdo36DBgm86Hj8")};

  return (
    <section id="contact">
        <div className="inner">
            <section>
                <form action="https://formspree.io/techomaxargentina@gmail.com" method="POST">
                    <div className="field half first">
                        <label htmlFor="name">Nombre y Apellido</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="sender" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Enviar mensaje" className="special" /></li>
                        <li><input type="reset" value="Limpiar formulario" /></li>
                    </ul>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <div className="a-like" onClick={handleClickMail}>techomaxargentina@gmail.com</div>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Teléfono</h3>
                        <div className="a-like" onClick={handleClickPhone}><b>WhatsApp:</b> 116 577 5397</div>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Dirección</h3>
                        <div className="a-like" onClick={handleClickAddress}>
                            <span>
                                Tucuman 900, <br/>
                                Piso 4 F, <br/>
                                1049 CABA
                                {/*Laprida 3278, B1642 San Isidro, <br/>Provincia de Buenos Aires, <br/>Argentina*/}
                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </section>
);}
export default Contact

/*
    Email API in case we need/decide to switch providers

    function call() {
        const request = new Request({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Host": "fapimail.p.rapidapi.com",
                "X-RapidAPI-Api": "e63172519bmsh06274b2eb89ef3ap121d08jsnf409921073af"
            },
            body: {
                recipient: "techomax@hotmail.com",
                sender: "techomax@hotmail.com",
                subject: "Subject of Email",
                message: "Body of Email"
            }
        });
        console.log(request);
        fetch(request).then((response) => {
            console.log("i'm back!");
            console.log(response);
        });
    }

 */
