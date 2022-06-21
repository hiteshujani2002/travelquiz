import { NavBar } from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-500">
      <><NavBar/><Component {...pageProps} /></>
    </div>
  ) 
}

export default MyApp
