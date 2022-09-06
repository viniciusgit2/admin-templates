import '../styles/globals.css'
import "../tailwind.config"
import autenticador from"../pages"

import Layout from "../pages/templates/Layout"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

}

export default MyApp
