import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Philip', text: 'Ok' },
  { id: 'q2', author: 'Tom', text: 'Sure' },
  { id: 'q3', author: 'Bill', text: 'I guess' },
  { id: 'q4', author: 'Mary', text: 'You got it' },
]

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }
  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={`${match.path}`}>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Go to Comments
          </Link>
        </div>
      </Route>
      <p>{quote.text}</p>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail
