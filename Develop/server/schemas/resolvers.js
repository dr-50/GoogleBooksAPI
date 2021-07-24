const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        }
    },
    Mutation: {
        login: async (parent, { email, password })=>{
            const user = await User.findOne({ email })

            if(!user) {
                throw new AuthenticationError('No user found');
            }
            if (password!==user.password) {
                throw new AuthenticationError('Incorrect username or password')
            }
            const token = signToken(user);
            return{ toekn, user }
        }
    }
}
module.exports = resolvers