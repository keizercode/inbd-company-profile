import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    )
  }, [location.pathname])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-primary">
      <div className="text-center px-4 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-foreground mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke
          halaman utama.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/">
            <Button size="lg" variant="secondary" className="group">
              <Home
                className="mr-2 group-hover:scale-110 transition-transform"
                size={20}
              />
              Kembali ke Beranda
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Halaman Sebelumnya
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
