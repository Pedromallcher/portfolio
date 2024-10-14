import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HomeDesktop} from './screens/desktop/home/appDesktop'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeDesktop/>
  </StrictMode>,
)
