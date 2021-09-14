const { signIn } = require("../Security");
const db = require("../models");
const { ApolloError } = require("apollo-server-express");
const { verify } = require("../Security");
const resolvers = {
  Query: {
    renterUser: async (parent, args, context) => {
      if(context.user){
        let data = db.Renter.findOne({where:{
          id: context.user.id
        }})
        return data
      }else{
        throw new ApolloError("You must loggin!")
      }
    },
  },
  Mutation: {
    listerLogin: async (parent, args, context) => {
      try {
        let user = await db.Lister.findOne({
          where: {
            email: args.email,
          },
        });
        if (!user) {
          throw new Error("Invalid Credentials!");
        }
        let data = await signIn(args, user);
        return data;
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },
    renterLogin: async (parent, args, context) => {
      try {
        let user = await db.Renter.findOne({
          where: {
            email: args.email,
          },
        });
        if (!user) {
          throw new Error("Invalid Credentials!");
        }
        let data = await signIn(args, user);
        return data;
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },

    listerCreate: async (parent, args, context) => {
      try {
        let user = await db.Lister.create(args);
        let data = await signIn(args, user);
        return data;
      } catch (err) {
        console.log(err);
        throw new ApolloError(err.message);
      }
    },
    listerCreateHouse: async (parent, args, context) => {
        console.log(args)
        try{
            if(!context.user){
                throw new Error("Session expired or Unauthorized")
            }
            let User = await db.Lister.findOne({
                where:{
                    id: context.user.id
                }
            })
            if(User){
                args.house["ListerId"] = context.user.id
            let house = await db.House.create(args.house)
            house.createInfo(args.house.info)
            return house

            }else{
                throw new Error("Unauthorized Access")
            }
            
        }catch(err){
            throw new ApolloError(err.message);
        }
       
      },
    renterCreate: async (parent, args, context) => {
      try {
        let user = await db.Renter.create(args);
        let data = await signIn(args, user);
        return data;
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },
  },
};
module.exports = resolvers;
