import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Shield, Zap, Users, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
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
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
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

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
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

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
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

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nilai-Nilai Kami
              </h2>
              <p className="text-lg text-muted-foreground">
                Fondasi kuat yang memandu setiap langkah kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  letter: 'I',
                  title: 'Integritas',
                  desc: 'Menjunjung kejujuran dan etika dalam setiap pekerjaan'
                },
                {
                  letter: 'N',
                  title: 'Niat Terbaik',
                  desc: 'Selalu bekerja dengan tujuan mulia untuk memberikan manfaat'
                },
                {
                  letter: 'B',
                  title: 'Berkualitas',
                  desc: 'Menghasilkan produk dan layanan dengan standar tinggi'
                },
                {
                  letter: 'D',
                  title: 'Dedikasi',
                  desc: 'Komitmen dalam melayani dengan peningkatan berkesinambungan'
                }
              ].map((value, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {value.letter}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
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
