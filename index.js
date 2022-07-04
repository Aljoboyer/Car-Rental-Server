const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const express = require('express');
const cors = require("cors");
const path = require("path");
const app = express();
const  graphqlUploadExpress  = require('graphql-upload/graphqlUploadExpress.js');

const connectDB = require('./config/DBconnection.js');
const { CarType } = require("./TypeDefs/CarType.js");
const { CarResolver } = require("./Resolvers/CarResolver.js");
const { UsersType } = require("./TypeDefs/UsersType.js");
const { UserResolver } = require("./Resolvers/UserResolver.js");

app.use(cors());
app.use(graphqlUploadExpress());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

connectDB();

app.use("/CarImage", express.static(path.join(__dirname, "CarImage")));

async function startServer() {
    const server = new ApolloServer({typeDefs: [CarType, UsersType], resolvers: [CarResolver, UserResolver]});

    await server.start();

    server.applyMiddleware({ app });
    
    app.listen({port: 4000}, () => {
        console.log('🚀 Server ready port is http://localhost:4000');
    })
  
  }
  
  startServer();

  //done