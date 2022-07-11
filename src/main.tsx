import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter as Router} from 'react-router-dom'

import {worker} from '@server/browser'

import App from './app'
import './index.css'

async function main() {
  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: '/football-app/mockServiceWorker.js',
    },
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router basename="football-app">
          <App />
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}

main()
