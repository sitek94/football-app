import {NavLink, Outlet} from 'react-router-dom'
import clsx from 'clsx'

import {Footer} from 'ui-kit/footer'

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
    <div className="flex h-full flex-col">
      <header className="bg-gray-800 pb-32">
        <div className="py-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
                        'rounded-md px-3 py-2 text-sm font-medium',
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
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
