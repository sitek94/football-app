import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter as Router} from 'react-router-dom'
import {worker} from 'server/browser'

import App from './app'
import './index.css'

worker.start()

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
