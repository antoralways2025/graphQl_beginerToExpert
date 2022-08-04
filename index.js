const {ApolloServer,gql}=require('apollo-server') ;
const { db} = require('./myDb/db');
  
   
const { Category } = require('./myResolvers/Category');
const { Mutation } = require('./myResolvers/Mutation');
const { Product } = require('./myResolvers/Product');
const { Query } = require('./myResolvers/Query');
const {typeDefs} =require('./mySchema/schema') ;


const server = new ApolloServer({  
    typeDefs,
    resolvers:{
      Query,
      Mutation,
      Product,
      Category
    } ,

    context:{ 
      db
      // categories,
      // products,
      // reviews
    }

}) ;


server.listen().then(({url})=> console.log(url))