import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import NewQuote from './pages/NewQuote'
// import QuoteDetail from './pages/QuoteDetail'
// import NotFound from './pages/NotFound'
// import Quotes from './pages/Quotes'

import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

// Lazy Loading
const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Quotes = React.lazy(() => import('./pages/Quotes'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route exact path='/'>
            <Redirect to='/quotes' />
          </Route>
          <Route exact path='/quotes'>
            <Quotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App
