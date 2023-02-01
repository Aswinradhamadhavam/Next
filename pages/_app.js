import MainLayout from '@/src/components/layout/mainlayout'
import '@/styles/globals.css'
import '@/styles/general.sass'

export default function App({ Component, pageProps }) {
  return (
  <>
 <MainLayout>
 <Component {...pageProps} />
 </MainLayout>
      
  </>
  )
}
