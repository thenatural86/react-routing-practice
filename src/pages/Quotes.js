import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Philip', text: 'Ok' },
  { id: 'q2', author: 'Tom', text: 'Sure' },
  { id: 'q3', author: 'Bill', text: 'I guess' },
  { id: 'q4', author: 'Mary', text: 'You got it' },
]

const Quotes = () => {
  return (
    <div>
      <h1>Quotes Page</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  )
}

export default Quotes
