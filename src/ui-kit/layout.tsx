import {Outlet} from 'react-router-dom'
import {Footer} from './footer'

export function AppLayout() {
  return (
    <div className="h-full flex flex-col">
      <header className="bg-gray-800 pb-32">
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">{`NBA - Ball Don't Lie`}</h1>
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
