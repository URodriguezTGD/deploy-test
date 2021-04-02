import Layout from '../components/layout/Layout'
// import 'materialize-css/dist/css/materialize.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
