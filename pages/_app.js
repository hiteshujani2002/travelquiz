import { NavBar } from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-orange-200">
      <><NavBar/><Component {...pageProps} /></>
    </div>
  ) 
}

export default MyApp
