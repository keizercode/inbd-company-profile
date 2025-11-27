import logo from '@/assets/logo.png'
import { Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="INBD Logo" className="h-12 w-12" />
              <span className="font-bold text-lg">
                PT Integrasi Bisnis Digital
              </span>
            </div>
            <p className="text-sm opacity-90">
              Solusi Digital Tepat, Layanan Kesehatan Hebat, Kepuasan Pelanggan
              Tercapai dengan Tepat
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/profil"
                  className="hover:text-accent transition-colors"
                >
                  Profil Perusahaan
                </a>
              </li>
              <li>
                <a
                  href="/visi-misi"
                  className="hover:text-accent transition-colors"
                >
                  Visi & Misi
                </a>
              </li>
              <li>
                <a
                  href="/struktur-organisasi"
                  className="hover:text-accent transition-colors"
                >
                  Struktur Organisasi
                </a>
              </li>
              <li>
                <a
                  href="/produk-layanan"
                  className="hover:text-accent transition-colors"
                >
                  Produk & Layanan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  Hermina Tower, Jl.Selangit Blok B.10 Kavling No.4
                  <br />
                  Kemayoran, Central Jakarta
                  <br />
                  Indonesia 10620
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:inbd.operasional@inbd.co.id"
                  className="hover:text-accent transition-colors"
                >
                  inbd.operasional@inbd.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} PT Integrasi Bisnis Digital. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
