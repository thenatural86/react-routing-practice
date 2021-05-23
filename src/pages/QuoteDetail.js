import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()
  const { quoteId } = params

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>
  }

  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route exact path={`${match.path}`}>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Go to Comments
          </Link>
        </div>
      </Route>
      <p>{loadedQuote.text}</p>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail
