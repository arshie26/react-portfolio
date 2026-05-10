import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';
/*import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


library.add(faBars, faTimes, faArrowLeft, faArrowRight);*/

createRoot(document.getElementById('root')).render(
      <App /> ,
)
