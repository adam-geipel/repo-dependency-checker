// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import RepositoryLayout from 'src/layouts/RepositoryLayout/RepositoryLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={RepositoryLayout}>
        <Route path="/{owner}" page={RepositoryOwnerPage} name="repositoryOwner" />
        <Route path="/{owner}/repositories" page={RepositoriesPage} name="repositories" />
        <Route path="/{owner}/repositories/{repository}/alerts" page={RepositoryPage} name="repository" />
        <Route path="/{owner}/repositories/{repository}/alerts/{id}" page={VulnerabilityPage} name="vulnerability" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} name="Not Found" />
    </Router>
  )
}

export default Routes
