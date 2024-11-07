import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { POSTS } from './redux/api.ts'

createRoot(document.getElementById('root')!).render(
  <ApiProvider api={POSTS} >
    <App />
  </ApiProvider>
)
