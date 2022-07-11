import {ChevronRightIcon, HomeIcon} from '@heroicons/react/solid'
import * as React from 'react'
import {Link, matchPath, useLocation} from 'react-router-dom'
import {BreadcrumbData} from 'use-react-router-breadcrumbs'

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbData[]
}

export function Breadcrumbs({breadcrumbs}: BreadcrumbsProps) {
  const {pathname} = useLocation()
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {breadcrumbs.map(({breadcrumb, match, key}) => {
          const isActive = !!matchPath(pathname, match.pathname)

          if (key === '/') {
            const homeIcon = (
              <HomeIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-label="Home"
              />
            )
            return (
              <li key={key}>
                <div>
                  {isActive ? (
                    homeIcon
                  ) : (
                    <Link to="/" className="text-gray-400 hover:text-gray-500">
                      {homeIcon}
                    </Link>
                  )}
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
                <div className="ml-4 text-sm font-medium text-gray-500">
                  {isActive ? (
                    breadcrumb
                  ) : (
                    <Link to={match.pathname} className="hover:text-gray-700">
                      {breadcrumb}
                    </Link>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
