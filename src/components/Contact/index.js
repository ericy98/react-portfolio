import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import face from '../../assets/face.png';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid!')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className='container-fluid'>
            <div className="align-items-center py-5">
                <div className=" d-flex justify-content-center">
                    <div className="  justify-content-center text-center">
                        <p>(Currently Under development)</p>
                        <h2 className="p-3">Contact Me</h2>

                        <p>Email: <a href='mailto: ea.yarbrough98@gmail.com' alt="Email">ea.yarbrough98@gmail.com</a></p>

                        {/* <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="p-3">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" name="Full Name" onBlur={handleChange} defaultValue={name} />
                            </div>
                            <div className="p-3">
                                <label htmlFor="email">Email address:</label>
                                <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                            </div>
                            <div className="p-3">
                                <label htmlFor="essage">Message:</label>
                                <textarea name="Message" rows="5" onBlur={handleChange} defaultValue={message} />
                            </div>
                            {errorMessage && (
                                <div className="p-3">
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button type="submit" className="m-3">Submit</button>
                        </form> */}
                    </div>
                </div>
                {/* <div className="col-lg-6 d-flex justify-content-center">
                    <img src={face} alt="art with head falling off"></img>
                </div> */}
            </div>
        </section>
    )
}

export default ContactForm;