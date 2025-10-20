import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { UserProvider } from '../Components/LogInPages/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </StrictMode>,
  </BrowserRouter>

)
