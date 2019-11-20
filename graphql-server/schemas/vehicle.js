const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql


const vehicleType =  new GraphQLObjectType({
  name: 'Vehicle',
  fields: {
    id: {
      type: GraphQLInt
    },

    brand: {
      type: GraphQLString
    },

    model: {
      type: GraphQLString
    },

    year: {
      type: GraphQLInt
    }
  }
})


module.exports = vehicleType

