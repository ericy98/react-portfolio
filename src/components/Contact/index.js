import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
        <section>
            <div className=" d-flex justify-content-center">
                <div className="justify-content-center">
                    <div className="text-center">
                        <p>(Currently Under development)</p>
                        <h2 className="p-3">Contact Me</h2>
                    </div>

                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" name="Full Name" onBlur={handleChange} defaultValue={name} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                        </div>
                        <div>
                            <label htmlFor="essage">Message:</label>
                            <textarea name="Message" rows="5" onBlur={handleChange} defaultValue={message} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit" className="m-3">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;