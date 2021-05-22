import { useHistory } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory()

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)
    history.push('/quotes')
  }
  return (
    <div>
      <h1>New Quote Page</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  )
}

export default NewQuote
