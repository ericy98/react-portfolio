const Contact = require('../Contact');

const resolvers = {
    Query: {
        contact: async () => {
            return  Contact.find()
        }
    },
    Mutation: {
        addMessage: async (parent, args) => {
            const contact = await Contact.create(args);
            return contact;
        }
    }
}

module.exports = resolvers;