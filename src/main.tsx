import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Layout/Routing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
)
