import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Header } from './components/ui/header'
import { Hero } from './components/ui/animated-hero'
import { ProblemsSection } from './components/sections/problems-section'
import { TimelineSection } from './components/sections/timeline-section'
import { ComparisonSection } from './components/sections/comparison-section'
import { Footer } from './components/ui/footer'
import Privacy from "./pages/Privacy"
import FreeToolsIndex from "./pages/tools/FreeToolsIndex"
import FreeToolPage from "./pages/tools/FreeToolPage"

function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <TimelineSection />
      <ComparisonSection />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tools" element={<FreeToolsIndex />} />
          <Route path="/tools/:toolSlug" element={<FreeToolPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App