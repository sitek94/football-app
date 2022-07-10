import clsx from 'clsx'
import {NavLink} from 'react-router-dom'
import {Breadcrumbs} from 'ui-kit/breadcrumbs'

interface PageHeaderProps {
  title: string
  links?: {name: string; to: string}[]
}

export function PageHeader({title, links}: PageHeaderProps) {
  return (
    <div className="mb-8 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1 space-y-8">
        <Breadcrumbs />

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
