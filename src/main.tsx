import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from './context/CreateContext'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <ContextProvider>
        <App />
      </ContextProvider>

    </BrowserRouter>
  </React.StrictMode>
)
