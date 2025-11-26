import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Package,
  Settings,
  Database,
  Network,
  Code,
  GraduationCap,
  HeadphonesIcon
} from 'lucide-react'

const ProdukLayanan = () => {
  const produk = [
    {
      icon: Database,
      title: 'Sistem Informasi Manajemen Rumah Sakit (SIMRS)',
      desc: 'Solusi terintegrasi untuk pengelolaan operasional rumah sakit secara efektif dan efisien',
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Aplikasi Mobile Kesehatan',
      desc: 'Platform mobile untuk memudahkan akses layanan kesehatan bagi pasien',
      color: 'secondary'
    },
    {
      icon: Network,
      title: 'Platform E-Commerce Kesehatan',
      desc: 'Solusi perdagangan elektronik khusus untuk produk dan layanan kesehatan',
      color: 'accent'
    }
  ]

  const layanan = [
    {
      icon: Settings,
      title: 'Implementasi & Instalasi',
      desc: 'Implementasi sistem informasi kesehatan dengan dukungan tim profesional dari tahap perencanaan hingga go-live'
    },
    {
      icon: GraduationCap,
      title: 'Pelatihan & Diklat',
      desc: 'Program pelatihan komprehensif untuk memastikan pengguna dapat mengoperasikan sistem dengan optimal'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support & Maintenance',
      desc: 'Layanan dukungan teknis 24/7 dan maintenance berkala untuk menjaga performa sistem'
    },
    {
      icon: Database,
      title: 'Konsultasi IT Kesehatan',
      desc: 'Konsultasi profesional untuk transformasi digital dan optimalisasi sistem informasi kesehatan'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Produk & Layanan
            </h1>
            <p className="text-xl opacity-95">
              Solusi Digital untuk Industri Kesehatan
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center">
              <Package className="mr-3 text-primary" size={32} />
              Produk Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Produk unggulan yang dirancang khusus untuk kebutuhan industri
              kesehatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {produk.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="border-2 hover:shadow-xl transition-all group hover:border-primary"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-${item.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${item.color}/20 transition-colors`}
                    >
                      <Icon className={`text-${item.color}`} size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center">
                <Settings className="mr-3 text-secondary" size={32} />
                Layanan Kami
              </h2>
              <p className="text-lg text-muted-foreground">
                Layanan profesional untuk mendukung kesuksesan transformasi
                digital Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {layanan.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card
                    key={index}
                    className="border-2 hover:shadow-lg transition-all group"
                  >
                    <CardHeader className="border-b bg-muted/30">
                      <CardTitle className="flex items-center text-xl">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                          <Icon className="text-secondary" size={24} />
                        </div>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 bg-gradient-hero text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Butuh Solusi Khusus?
              </h2>
              <p className="text-lg mb-6 opacity-95">
                Kami siap merancang solusi yang disesuaikan dengan kebutuhan
                spesifik organisasi Anda
              </p>
              <a href="/kontak" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                  Konsultasi Gratis
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default ProdukLayanan
