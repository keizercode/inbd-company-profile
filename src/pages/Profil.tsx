import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Building2, Target } from 'lucide-react'

const Profil = () => {
  const kegiatanUsaha = [
    'Portal Web dan/atau Platform Digital dengan Tujuan Komersial',
    'Aktivitas Teknologi Informasi dan Jasa Komputer',
    'Aktivitas Pengembangan Aplikasi Perdagangan Melalui Internet (E-Commerce)',
    'Aktivitas Pemograman Komputer',
    'Penerbitan Piranti Lunak (Software)',
    'Aktivitas Konsultasi Komputer dan Manajemen',
    'Aktivitas Pengolahan Data'
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Profil Perusahaan
            </h1>
            <p className="text-xl opacity-95">PT Integrasi Bisnis Digital</p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 container mx-auto px-4 lg:px-8">
        <Card className="max-w-5xl mx-auto border-2 shadow-lg">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle className="flex items-center text-2xl">
              <Building2 className="mr-3 text-primary" size={28} />
              Profil Singkat
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4 text-foreground leading-relaxed">
            <p>
              PT Integrasi Bisnis Digital (INBD) adalah perusahaan teknologi
              yang berfokus pada pengembangan perangkat lunak, implementasi
              sistem, dan integrasi solusi digital untuk mendukung transformasi
              bisnis khususnya di sektor kesehatan. PT. INBD menyediakan layanan
              end-to-end dimulai dari perencanaan sistem, pengembangan aplikasi,
              integrasi lintas platform, hingga operasional dan pemeliharaan.
            </p>
            <p>
              Dengan tim profesional di bidang software development,
              implementasi, network dan data management, INBD membantu
              perusahaan mempercepat digitalisasi operasional, meningkatkan
              efisiensi, serta memperkuat daya saing melalui penggunaan
              teknologi modern.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Business Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-5xl mx-auto border-2 shadow-lg">
            <CardHeader className="border-b bg-primary/5">
              <CardTitle className="flex items-center text-2xl">
                <Briefcase className="mr-3 text-primary" size={28} />
                Kegiatan Usaha
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {kegiatanUsaha.map((kegiatan, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground pt-1">{kegiatan}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-5xl mx-auto border-2 shadow-lg bg-gradient-to-br from-accent/10 to-accent/5">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 text-accent" size={28} />
                Moto Perusahaan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl font-semibold text-center text-foreground italic border-l-4 border-accent pl-6 py-4">
                "Solusi Digital Tepat, Layanan Kesehatan Hebat, Kepuasan
                Pelanggan Tercapai dengan Tepat"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Profil
