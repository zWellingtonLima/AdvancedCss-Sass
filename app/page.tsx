import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Navigation from '@/components/Navigation'
import Header from '@/components/header/header'
import ToursModal from '@/components/tours/toursModal'

export default function Home() {
  return (
    <>
      <ToursModal />
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
