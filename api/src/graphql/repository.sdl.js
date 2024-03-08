export const schema = gql`
  type RepositoryOwner {
    avatarUrl: String
    id: String
    login: String
    url: String
    repositories: [Repository]
  }

  type Repository {
    name: String
    description: String
    hasVulnerabilityAlertsEnabled: Boolean
    isArchived: Boolean
    shortDescriptionHtml: String
    vulnerabilityAlerts: [RepositoryVulnerabilityAlert]
    url: String
  }

  type RepositoryVulnerabilityAlert {
    autoDismissedAt: String
    createdAt: String
    dismissComment: String
    dismissReason: String
    dismissedAt: String
    fixedAt: String
    id: String!
    number: String
    state: String
    vulnerableManifestFilename: String
    vulnerableManifestPath: String
    vulnerableRequirements: String
    securityVulnerability: SecurityVulnerability
    repository: String
  }

  type SecurityVulnerability {
    package: Package
    advisory: Advisory
  }

  type Package {
    name: String
  }

  type Advisory {
    description: String
  }

  type Query {
    getRepositories(owner: String!): [Repository] @skipAuth
  }

  type Query {
    getRepository(owner: String!, name: String!): Repository @skipAuth
  }

  type Query {
    getRepositoryOwner(owner: String!): RepositoryOwner @skipAuth
  }
`
