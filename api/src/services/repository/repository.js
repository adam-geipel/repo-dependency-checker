import { gql, GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
  },
})

const getRepositories = async ({ owner, cursor }) => {
  const queryStr = `
{
	repositoryOwner(login: "${owner}" ) {
		repositories(
		  first: 100
		  isLocked: false
		  isFork: false
		  privacy: PRIVATE
		  isArchived: false

			orderBy: { field: NAME, direction: ASC }

			${cursor ? `after: "${cursor}"` : ''}
		) {
			totalCount

			pageInfo {
				hasNextPage
				endCursor
			}

			nodes {
				name
				description
				url
				# Add more fields here.
			}
		}
  }
}`

  const query = gql`
    ${queryStr}
  `
  const results = await graphQLClient.request(query, { owner, cursor })
  return results.repositoryOwner.repositories.nodes
}

module.exports = {
  getRepositories,
}
