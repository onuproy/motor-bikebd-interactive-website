import React from 'react';
import bikes from './../../googlemap.png';
import css from './Contact.css'

const Contact = () => {
    return (
        <div class="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div class="contact-form-area">
                                <form action="">
                                    <input type="text" placeholder="Name"/>
                                    <input type="Email" placeholder="Email"/>
                                    <input type="text" placeholder="Phone"/>
                                    <textarea placeholder=""></textarea>
                                    <input class="submit-button" type="submit" value="Submit"/>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="contact-google map">
                                <img src={bikes} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;