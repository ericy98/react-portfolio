import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/react-hooks';
import { ADD_MESSAGE } from '../../utils/mutations';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [addMessage, { error }] = useMutation(ADD_MESSAGE);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addMessage({
                variables: { ...formState }
            });
        } catch (e) {
            console.error(e);
        }
        alert(`Thank you ${formState.name}. Your message was successfully sent.`);
        setFormState({
            name: '',
            email: '',
            message: ''
          });
        console.log(formState);
    };



    return (
        <section className="contact">
            <div className="d-flex justify-content-center">
                <div className="justify-content-center">
                    <div className="text-center">
                        <h2 className="p-3 contact">Contact Me</h2>
                    </div>

                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder='John Smith'
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='email@mail.com'
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                name="message"
                                placeholder="Send me a message!"
                                rows="5" onBlur={handleChange}
                                value={formState.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="m-3">Send Message</button>
                        {error && <div>Message failed to send.</div>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;