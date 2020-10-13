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
        <section className='m-5 d-flex'>
            <div>
                <h2>Contact Me</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="Name" onBlur={handleChange} defaultValue={name} />
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
                    <button type="submit">Submit</button>
                </form>
            </div>
            {/* <div className="px-1 justify-content-end">
                <h2> Email Me: ea.yarbrough98@gmail.com</h2>
                <h2>Call Me: (512)758-9169</h2>
            </div> */}
        </section>
    )
}

export default ContactForm;