import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ROUTES } from './config/routes'

// Eager load Home (critical path)
import { HomePage } from './pages/Home/HomePage'

// Lazy load other pages
const GalleryPage    = lazy(() => import('./pages/Gallery/GalleryPage').then(m => ({ default: m.GalleryPage })))
const ServicesPage   = lazy(() => import('./pages/Services/ServicesPage').then(m => ({ default: m.ServicesPage })))
const PackagesPage   = lazy(() => import('./pages/Packages/PackagesPage').then(m => ({ default: m.PackagesPage })))
const ProductsPage   = lazy(() => import('./pages/Products/ProductsPage').then(m => ({ default: m.ProductsPage })))
const BookingPage    = lazy(() => import('./pages/Booking/BookingPage').then(m => ({ default: m.BookingPage })))
const ContactPage    = lazy(() => import('./pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })))
const NotFoundPage   = lazy(() => import('./pages/NotFound/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

// Minimal page loader
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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={ROUTES.HOME}     element={<HomePage />} />
          <Route path={ROUTES.GALLERY}  element={<GalleryPage />} />
          {/* Category sub-routes — pass category prop */}
          <Route path={ROUTES.GALLERY_BRIDAL}  element={<GalleryPage category="bridal" />} />
          <Route path={ROUTES.GALLERY_ARABIC}  element={<GalleryPage category="arabic" />} />
          <Route path={ROUTES.GALLERY_FLORAL}  element={<GalleryPage category="floral" />} />
          <Route path={ROUTES.GALLERY_INDIAN}  element={<GalleryPage category="indian" />} />
          <Route path={ROUTES.SERVICES}  element={<ServicesPage />} />
          <Route path={ROUTES.PACKAGES}  element={<PackagesPage />} />
          <Route path={ROUTES.PRODUCTS}  element={<ProductsPage />} />
          <Route path={ROUTES.BOOKING}   element={<BookingPage />} />
          <Route path={ROUTES.CONTACT}   element={<ContactPage />} />
          <Route path="*"               element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
