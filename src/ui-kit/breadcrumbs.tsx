import {ChevronRightIcon, HomeIcon} from '@heroicons/react/solid'
import {routes} from 'app'
import * as React from 'react'
import {Link} from 'react-router-dom'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'

export function Breadcrumbs() {
  const breadcrumbs = useReactRouterBreadcrumbs(routes)

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {breadcrumbs.map(({breadcrumb, match, key}) => {
          if (key === '/') {
            return (
              <li key={key}>
                <div>
                  <Link to="/" className="text-gray-400 hover:text-gray-500">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
            )
          }
          return (
            <li key={key}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  to={match.pathname}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {breadcrumb}
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
