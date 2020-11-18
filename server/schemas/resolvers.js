const Contact = require('../../Contact');

const resolvers = {
    Query: {
        contact: async () => {
            return Contact.find()
        }
    }
}

module.exports = resolvers;