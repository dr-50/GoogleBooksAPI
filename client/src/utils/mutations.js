import gql from 'graphql-tag'

export const LOGIN_user = gql`
    mutation login($email:String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

    export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUesr(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

    export const SAVE_BOOK = gql`
        mutation saveBook($id: ID!) {
            saveBook(bookId: $id) {
                bookId
                authors
                description
                title
                image
                link
            }
        }`

    export const REMOVE_BOOK = gql`
        mutation removeBook($id: ID!) {
            removeBook(id: $id) {
                _id
                username
                book {
                    _id
                    title
                }
            }
        }`