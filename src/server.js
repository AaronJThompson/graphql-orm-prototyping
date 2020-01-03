var express = require('express');
var graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true
}))

app.listen(4000, () => console.log('Server running on port 4000!'))