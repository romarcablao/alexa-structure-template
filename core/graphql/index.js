const { GraphQLClient } = require('graphql-request');

const client = new GraphQLClient('my-endpoint', {
    credentials: 'include',
    mode: 'cors'
})

// Queries/Functions
function getTasks() {

    const query = `{
        Tasks {
            id
            name
            desc
            due
      }`

    let tasks = client.request(query).then(data => { return data });
    return tasks;
}

module.exports = {
    getTasks,
}