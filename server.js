/*const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const resolvers = require('./graphql/resolvers');
const typeDefs =  gql(fs.readFileSync('./graphql/typeDefs.graphql', {encoding: 'utf-8'}));

const server = new ApolloServer({
    typeDefs, resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || '';

        const employee = getEmployeeDetails(token);
        if (!getEmployeeDetails) throw new authorizationError('You must be logged in')

        return {
            EmployeeDetails,
            models: {
                getEmployeeDetails: generateemployeeModel({ getEmployeeDetails }),
            }

        }
        },
   
});

server.listen(5000).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
*/


const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const resolvers = require('./graphql/resolvers');
const typeDefs = gql(fs.readFileSync('./graphql/typeDefs.graphql', { encoding: 'utf-8' }));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks: true,
    context: ({ re: { headers } }) => {
        console.log({ headers });
        if (!headers || !headers.authorization) throw new Error('No auth');
    },
});

server.listen(5000).then(({
    url
}) => {
    console.log(`🚀 Server ready at ${url}`);
});