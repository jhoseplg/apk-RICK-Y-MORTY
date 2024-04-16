import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppPrincipal } from './AppPrincipal'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <React.StrictMode>
      <AppPrincipal />
    </React.StrictMode>

  </BrowserRouter>
)