
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(

   
    <div>
      <App />
      {/* <Header title={1} />
      <Header title={2} />
      <Footer /> */}
    </div>
  

)
