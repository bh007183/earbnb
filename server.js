const express = require("express")
const db = require("./models/index")
const PORT = process.env.PORT || 8080
const app = express()
const {resolvers, typeDefs} = require("./schema")
const {ApolloServer} = require("apollo-server-express")


const server = new ApolloServer({
    resolvers,
    typeDefs,
    // context
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const appmiddle = async() => {
    await server.start()
    server.applyMiddleware({app})
}

appmiddle()

db.once("open", function(){
    app.listen(PORT, () => {
        console.log("http://localhost:8080")
        console.log(`http://localhost:${PORT}/graphql`)
    })
})
