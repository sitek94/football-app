import {ChevronRightIcon} from '@heroicons/react/outline'
import clsx from 'clsx'
import {NavLink} from 'react-router-dom'

interface PageHeaderProps {
  title: string
  links?: {name: string; to: string}[]
}

export function PageHeader({title, links}: PageHeaderProps) {
  return (
    <div className="mb-8 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1 space-y-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Engineering
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
          {title}
        </h2>
        {links?.length ? (
          <div className="border-b border-gray-200 pb-5 sm:pb-0">
            <div className="mt-3 sm:mt-4">
              <nav className="-mb-px flex space-x-8">
                {links.map(tab => (
                  <NavLink
                    end
                    key={tab.name}
                    to={tab.to}
                    className={({isActive}) =>
                      clsx(
                        isActive
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                      )
                    }
                  >
                    {tab.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
