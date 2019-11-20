const express = require('express')
const graphqlHTTP = require('express-graphql')
const rootQuery = require('./query')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: rootQuery,
  graphiql: true
}))


app.listen(3000, () => {
  console.log('⚛️  GraphQL server is listening on port 3000!');
});
