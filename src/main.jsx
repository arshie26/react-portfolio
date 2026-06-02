import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faArrowLeft, faArrowRight, faLightbulb, faGear, faRocket, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


library.add(faBars, faTimes, faArrowLeft, faArrowRight, faLightbulb, faGear, faRocket, faFilePdf);

createRoot(document.getElementById('root')).render(
      <App /> ,
)
