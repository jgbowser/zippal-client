import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RegistrationRoute from './RegistrationRoute'

describe('RegistrationRoute Component', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><RegistrationRoute /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
  })
})