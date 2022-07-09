import {NavLink, Outlet} from 'react-router-dom'
import {Footer} from './footer'
import clsx from 'clsx'

const navigation = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Teams',
    to: '/teams',
  },
]

export function AppLayout() {
  return (
    <div className="h-full flex flex-col">
      <header className="bg-gray-800 pb-32">
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">{`NBA - Ball Don't Lie`}</h1>

            <nav className="flex gap-2">
              {navigation.map(item => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({isActive}) =>
                      clsx(
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium',
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="-mt-32 flex-grow">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
