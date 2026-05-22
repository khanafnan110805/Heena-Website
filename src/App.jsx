import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import HomePage from './pages/Home/HomePage.jsx'

const GalleryPage  = lazy(() => import('./pages/Gallery/GalleryPage.jsx'))
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage.jsx'))
const PackagesPage = lazy(() => import('./pages/Packages/PackagesPage.jsx'))
const ProductsPage = lazy(() => import('./pages/Products/ProductsPage.jsx'))
const BookingPage  = lazy(() => import('./pages/Booking/BookingPage.jsx'))
const ContactPage  = lazy(() => import('./pages/Contact/ContactPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage.jsx'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-gold-muted border-t-gold-primary rounded-full animate-spin" />
        <p className="font-body text-xs text-text-muted uppercase tracking-widest">Loading</p>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                element={<HomePage />} />
          <Route path="/gallery"         element={<GalleryPage />} />
          <Route path="/gallery/bridal"  element={<GalleryPage category="bridal" />} />
          <Route path="/gallery/arabic"  element={<GalleryPage category="arabic" />} />
          <Route path="/gallery/floral"  element={<GalleryPage category="floral" />} />
          <Route path="/gallery/indian"  element={<GalleryPage category="indian" />} />
          <Route path="/services"        element={<ServicesPage />} />
          <Route path="/packages"        element={<PackagesPage />} />
          <Route path="/products"        element={<ProductsPage />} />
          <Route path="/booking"         element={<BookingPage />} />
          <Route path="/contact"         element={<ContactPage />} />
          <Route path="*"               element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
