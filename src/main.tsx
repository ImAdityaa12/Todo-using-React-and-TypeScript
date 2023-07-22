import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import { TodosProvider } from './store/context.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodosProvider>
      <App />
    </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
