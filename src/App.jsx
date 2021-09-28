import React from 'react'
import { Redirect } from 'react-router'
import AppRouter from './routes/AppRouter'

export default function App() {
  return (
    <div>
      <Redirect to='/' />
      <AppRouter />
    </div>
  )
}
