import App from 'next/app'
import '../sass/app.scss'

function AppWrapper({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default AppWrapper
