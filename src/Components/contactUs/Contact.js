import React, { useRef, useState } from 'react'
import './contact.css'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY
        )
            .then((result) => {
                alert("Your message has been sent")
                
            }, (error) => {
                alert(error.text);
            });
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    function submitForm() {
        // console.log(formData);
    }
    return (
        <>
            <Navbar />
            <div className='contact-div'>
                <div className='contact-image'>
                    <img src={require("../assets/contact.jpg")} alt='contact' />
                </div>
                <div className='contact-title marg'>
                    <h2>Contact us</h2>
                </div>
            </div>
            <section className='form-section'>

                <div className='form-div'>
                    <div className='contact-info'>
                        <div className='contact-info-div'>

                            <h2>Contact Information</h2>
                            <hr />
                            <div className='mail-to contact-option'>
                                <div className='icon-title'><i className="fa-solid fa-envelope fa-2xl"></i></div>
                                <div className='icon-content'>
                                    <h2>Mail</h2>
                                    <span>
                                        @gmail.com
                                    </span>
                                </div>


                            </div>
                            <div className='call-on contact-option'>
                                <div className='icon-title'><i className="fa-solid fa-phone fa-2xl"></i></div>
                                <div className='icon-content'>
                                    <h2>Call on</h2>
                                    <span>
                                        +9165666576
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-info-div'>
                            <h2>Office Address</h2>
                            <hr />
                            <div className='registered-office contact-option'>
                                <div className='icon-title'><i className="fa-solid fa-location-dot fa-2xl"></i></div>
                                <div className='icon-content'>
                                    <h2>
                                        Registered Office</h2>
                                    <span>
                                        JLPL, industrial Area, Sec 82, Mohali, India
                                    </span>
                                </div>


                            </div>
                            <div className='corporate-office contact-option'>
                                <div className='icon-title'><i className="fa-solid fa-location-dot fa-2xl"></i></div>
                                <div className='icon-content'>
                                    <h2>Corporate Office</h2>
                                    <span>
                                        Silver Tower, Business Bay, Dubai
                                    </span>
                                </div>
                            </div>
                            <div className='sales-office contact-option'>
                                <div className='icon-title'><i className="fa-solid fa-location-dot fa-2xl"></i></div>
                                <div className='icon-content'>
                                    <h2>Sales Office</h2>
                                    <span>
                                        Metro plaza city market, Lohgarh road, Zirakpur
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='contact-form'>
                        <h2>Send Your Comments</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <input size='40' type='text' name='user_Name' placeholder='Your name*' required value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
                            
                            <input size='40' type='email' name='user_Email' placeholder='Your email*' required value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />

                            <input size='40' type='text' name='email_Subject' placeholder='your subject*' required value={formData.subject} onChange={(e) => { setFormData({ ...formData, subject: e.target.value }) }} />
                            <textarea rows='15' name='email_message' placeholder='Your message*' value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}></textarea>
                            <button type='submit' value="Send" className='btn-submit' onClick={submitForm}>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact