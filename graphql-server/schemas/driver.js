const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const vehicleType = require('./vehicle')
const vehicleResolvers = require('../resolvers/vehicles')

const authorType =  new GraphQLObjectType({
  name: 'Driver',
  fields: {
    id: {
      type: GraphQLInt
    },

    name: {
      type: GraphQLString
    },

    surname: {
      type: GraphQLString
    },

    age: {
      type: GraphQLInt
    },

    vehicle: {
      type: vehicleType,
      resolve: (driver) => vehicleResolvers.Query.vehicleByOwnerId(driver.id)
    }
  }
})


module.exports = authorType

