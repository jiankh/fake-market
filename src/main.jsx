import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { ShoppingCartProvider } from './ShoppingCartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShoppingCartProvider>
            <Router />
        </ShoppingCartProvider>
    </React.StrictMode>,
)
