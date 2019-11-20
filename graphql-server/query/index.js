const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql

const driverType = require('../schemas/driver');
const vehicleType = require('../schemas/vehicle')

const driversResolvers = require('../resolvers/drivers')
const vehicleResolvers = require('../resolvers/vehicles')


const queryType =  new GraphQLObjectType({
  name: 'Query',
  fields: {
    driverById: {
      type: driverType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (source, { id }) => driversResolvers.Query.driver(id),
      description: 'Buscar um motorista pelo seu ID.'
    },

    allDrivers: {
      type: new GraphQLList(driverType),
      resolve: () => driversResolvers.Query.drivers(),
      description: 'Buscar todos os veículos na base de dados.'
    },

    vehicleById: {
      type: vehicleType,
      resolve: (source, { id }) => vehicleResolvers.Query.vehicle(id),
      description: 'Buscar um veículo pelo seu ID.'
    },

    vehicleByOwnerId: {
      type: vehicleType,
      resolve: (source) => vehicleResolvers.Query.vehicleByOwnerId(source.id),
      description: 'Buscar um veículo pelo ID do seu dono.'
    },

    allVehicles: {
      type: new GraphQLList(vehicleType),
      resolve: () => vehicleResolvers.Query.vehicles(),
      description: 'Buscar todos os motoristas na base de dados.'
    }
  }
})

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateDriver: {
      type: driverType,
      args: {
        id: { type: GraphQLInt, required: true },
        name: { type: GraphQLString, required: false },
        surname: { type: GraphQLString, required: false },
        age: { type: GraphQLInt, required: false }
      },
      resolve: (source, params) => driversResolvers.Mutation.updateDriver(params),
      description: 'Alterar os dados de um motorista.'
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
})

module.exports = schema