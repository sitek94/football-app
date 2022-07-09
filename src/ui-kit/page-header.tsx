import {ChevronRightIcon} from '@heroicons/react/outline'

interface PageHeaderProps {
  title: string
}

export function PageHeader({title}: PageHeaderProps) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-4">
      <div className="flex-1 min-w-0">
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
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
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
        <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
      </div>
    </div>
  )
}
