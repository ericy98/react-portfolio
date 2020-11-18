const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;