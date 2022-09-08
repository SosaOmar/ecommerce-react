import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import "./styles/header.css"
import store1 from "./store"
import "./styles/nidea.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store1}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
