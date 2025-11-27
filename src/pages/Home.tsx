import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Shield, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <img
                src={logo}
                alt="INBD Logo"
                className="h-32 w-32 animate-scale-in"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Integrasi Bisnis Digital
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 font-medium">
              Solusi Digital Tepat, Layanan Kesehatan Hebat
            </p>
            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Mewujudkan sistem informasi yang handal, inovatif, dan
              berkelanjutan untuk mendukung transformasi digital industri
              kesehatan di Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/profil">
                <Button size="lg" variant="secondary" className="group">
                  Tentang Kami
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/kontak">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary/20 text-primary-foreground border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kebijakan Mutu Section - NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Kebijakan Mutu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi kuat dalam setiap langkah kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                letter: 'I',
                title: 'Integritas',
                desc: 'Menjunjung kejujuran dan etika dalam setiap pekerjaan sesuai dengan persyaratan yang berlaku',
                color: 'primary'
              },
              {
                letter: 'N',
                title: 'Niat Terbaik',
                desc: 'Selalu bekerja dengan tujuan mulia untuk memberikan manfaat',
                color: 'secondary'
              },
              {
                letter: 'B',
                title: 'Berkualitas',
                desc: 'Menghasilkan produk dan layanan dengan standar tinggi',
                color: 'accent'
              },
              {
                letter: 'D',
                title: 'Dedikasi',
                desc: 'Komitmen dalam melayani dengan peningkatan berkesinambungan',
                color: 'primary'
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-all group hover:border-primary"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-${item.color} text-${item.color}-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl`}
                  >
                    {item.letter}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - UPDATED: Always show text */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen memberikan solusi terbaik dengan standar
              tertinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 bg-primary/5 hover:shadow-lg transition-all group hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Keamanan Terjamin
                </h3>
                <p className="text-muted-foreground">
                  Sistem keamanan data yang handal sesuai standar dan regulasi
                  kesehatan
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 bg-secondary/5 hover:shadow-lg transition-all group hover:border-secondary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Zap className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Inovasi Berkelanjutan
                </h3>
                <p className="text-muted-foreground">
                  Terus berinovasi menghadirkan teknologi terdepan untuk solusi
                  digital
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 bg-accent/5 hover:shadow-lg transition-all group hover:border-accent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Tim Profesional
                </h3>
                <p className="text-muted-foreground">
                  Didukung tim ahli berpengalaman dalam bidang IT kesehatan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Bertransformasi Digital?
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Mari bersama-sama mewujudkan sistem informasi kesehatan yang lebih
              baik untuk Indonesia
            </p>
            <Link to="/kontak">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
