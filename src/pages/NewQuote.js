import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory()
  const { sendRequest, status } = useHttp(addQuote)

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes')
    }
  }, [status, history])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }
  return (
    <div>
      <h1>New Quote Page</h1>
      <QuoteForm
        isLoading={status === 'pending'}
        onAddQuote={addQuoteHandler}
      />
    </div>
  )
}

export default NewQuote
