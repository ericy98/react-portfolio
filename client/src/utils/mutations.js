import gql from 'graphql-tag';

export const ADD_MESSAGE = gql`
    mutation addMessage($name: String!, $email: String!, $message: String!) {
        addMessage(name: $name, email: $email, message: $message) {
            _id
            name
            email
            message
        }
    }
`;