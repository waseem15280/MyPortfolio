import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortfolioPage from '@/pages/PortfolioPage'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <PortfolioPage />
      <Footer />
    </div>
  )
}
