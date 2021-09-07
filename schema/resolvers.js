const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            console.log("hehehe")
        }
    },
    Mutation: {
        listerLogin: async(parent, args, context) => {
            console.log("heheh")
        },
        renterLogin: async(parent, args, context) => {
            console.log("heheh")
        }
    }
}
module.exports = resolvers