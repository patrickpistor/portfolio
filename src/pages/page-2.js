import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div className="container">
    <h1 className="h1-on-light">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/" className="light-link">
      Go back to the homepage!
    </Link>
  </div>
)

export default SecondPage
