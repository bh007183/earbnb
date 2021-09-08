const express = require("express")
const db = require("./models")
const PORT = process.env.PORT || 8080
const app = express()
const {resolvers, typeDefs} = require("./schema")
const {verify} = require("./Security")
const {ApolloServer} = require("apollo-server-express")
require("dotenv").config()


const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: verify
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const appmiddle = async() => {
    await server.start()
    server.applyMiddleware({app})
}

appmiddle()

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function(){
        console.log("http://localhost:8080")
        console.log(`http://localhost:${PORT}/graphql`)
    })

})
    

