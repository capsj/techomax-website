import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form action="https://formspree.io/jerocarlos@hotmail.com" method="POST">
                {/*<form action="https://fapimail.p.rapidapi.com/email/send" method="POST">*/}
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="sender" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                    <input type="hidden" name="recipient" id="email-recipient" value="jerocarlos@hotmail.com"/>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">information@untitled.tld</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
);

function call() {
    const request = new Request({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": "fapimail.p.rapidapi.com",
            "X-RapidAPI-Api": "e63172519bmsh06274b2eb89ef3ap121d08jsnf409921073af"
        },
        body: {
            recipient: "jerocarlos@hotmail.com",
            sender: "jerocarlos@hotmail.com",
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

export default Contact
