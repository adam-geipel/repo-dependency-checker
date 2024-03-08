import { gql, GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
  },
})

const getRepositoryOwner = async ({ owner }) => {
  const queryStr = `
{
	repositoryOwner(login: "${owner}" ) {
	  id
	  avatarUrl
	  login
	  url
	}
}`

  const query = gql`
    ${queryStr}
  `
  const results = await graphQLClient.request(query, { owner })
  console.log(results)
  return results.repositoryOwner
}

module.exports = {
  getRepositoryOwner,
}
