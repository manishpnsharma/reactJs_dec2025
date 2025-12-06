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
//import App from './03_properties/Function_a.jsx'
//import App from './03_properties/VariableInitlization.jsx'
//import App from './04_events/App'

//import App from './07_defaultProps/App_1.jsx';
//import App from './07_defaultProps/App.jsx';

import App from './05_state/State_05.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
