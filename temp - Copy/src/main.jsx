import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './Context/User.jsx'
import { User_idProvider } from './Context/User_id.jsx'
// import { CounterProvider } from './Context/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterProvider> */}
    <User_idProvider>
    <UserProvider>
      <App />
      {/* </CounterProvider> */}
    </UserProvider>
    </User_idProvider>
  </StrictMode>,
)
