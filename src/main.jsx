import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

//import App from './welcome/App.jsx'
//import App from './components/App.jsx'
//import App from './pages/App.jsx'
//import App from './pages/HomePage.jsx'
import './01_welcome/myindex.css';
// import {App} from  './01_welcome/App.jsx'
//import App from  './02_componentReuse/App.jsx'
//import App from  './03_properties/App.jsx'
import App from './04_events/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
