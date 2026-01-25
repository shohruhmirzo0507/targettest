import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.log(error);
  if (error.status == 404) {
    return <div className='errorpage'>
      <div>
        <h3>
          404 Error: Page not found . But don't worry, our developers are on a treause hunt to recover it.
        </h3>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  }

  return (
    <div className='errorpage'>
      <div>
        <h3>
          Something were :
        </h3>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage
