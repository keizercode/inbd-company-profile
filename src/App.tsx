import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'
import ProdukLayanan from './pages/ProdukLayanan'
import Profil from './pages/Profil'
import StrukturOrganisasi from './pages/StrukturOrganisasi'
import VisiMisi from './pages/VisiMisi'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route
              path="/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
            <Route path="/produk-layanan" element={<ProdukLayanan />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
