const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            console.log("hehehe")
        }
    },
    Mutation: {
        login: async(parent, args, context) => {
            console.log("heheh")
        }
    }
}
module.exports = resolvers