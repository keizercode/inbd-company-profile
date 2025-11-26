import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Eye, Lightbulb, Target } from 'lucide-react'

const VisiMisi = () => {
  const misi = [
    'Mengembangkan sistem informasi yang handal, aman, dan sesuai kebutuhan.',
    'Memberikan layanan profesional dalam implementasi, pelatihan, dan dukungan teknis.',
    'Meningkatkan efisiensi operasional melalui solusi digital.',
    'Menyediakan teknologi yang mendukung transparansi dan kualitas layanan kesehatan.',
    'Memastikan keamanan pengelolaan data Pasien serta sesuai regulasi.'
  ]

  const tujuan = [
    'Mendukung pengelolaan Pelayanan Kesehatan yang efektif dan efisien melalui pemanfaatan teknologi digital',
    'Mengintegrasikan data medis, administratif, dan operasional secara terpadu',
    'Memberikan solusi yang mendukung pelayanan kesehatan berkualitas dan berorientasi pada Pasien',
    'Memastikan keamanan informasi sesuai standar dan regulasi yang berlaku',
    'Mendukung transformasi digital Industri Kesehatan di seluruh Indonesia',
    'Meningkatkan tingkat kepuasan pelanggan layanan sistem informasi yang responsif dan tepat sasaran',
    'Melakukan peningkatan berkesinambungan dalam pengembangan, implementasi, dan evaluasi sistem'
  ]

  const kebijakanMutu = [
    {
      letter: 'I',
      title: 'Integritas',
      desc: 'Menjunjung kejujuran dan etika dalam setiap pekerjaan sesuai dengan persyaratan yang berlaku.'
    },
    {
      letter: 'N',
      title: 'Niat Terbaik',
      desc: 'Selalu bekerja dengan tujuan mulia untuk memberikan manfaat.'
    },
    {
      letter: 'B',
      title: 'Berkualitas',
      desc: 'Menghasilkan produk dan layanan dengan standar tinggi.'
    },
    {
      letter: 'D',
      title: 'Dedikasi',
      desc: 'Komitmen dalam melayani dan menyelesaikan pekerjaan dengan aspek peningkatan berkesinambungan.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi</h1>
            <p className="text-xl opacity-95">Arah dan Tujuan Kami</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 container mx-auto px-4 lg:px-8">
        <Card className="max-w-5xl mx-auto border-2 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center text-2xl">
              <Eye className="mr-3 text-primary" size={28} />
              Visi
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-foreground leading-relaxed">
              Mewujudkan sistem informasi yang handal, inovatif, dan
              berkelanjutan, serta menjadi mitra utama dalam penyediaan solusi
              digital terintegrasi yang terpercaya untuk mendukung efisiensi
              operasional dan peningkatan kualitas pelayanan kesehatan.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-5xl mx-auto border-2 shadow-lg">
            <CardHeader className="border-b bg-secondary/5">
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 text-secondary" size={28} />
                Misi
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {misi.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2
                      className="flex-shrink-0 mt-0.5 text-secondary"
                      size={24}
                    />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purpose & Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Maksud */}
            <Card className="border-2 shadow-lg">
              <CardHeader className="border-b bg-accent/5">
                <CardTitle className="flex items-center text-2xl">
                  <Lightbulb className="mr-3 text-accent" size={28} />
                  Maksud
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Mewujudkan transformasi digital di bidang kesehatan melalui
                  sistem informasi yang terintegrasi, tepat guna, serta
                  berorientasi pada kepuasan pelanggan.
                </p>
              </CardContent>
            </Card>

            {/* Tujuan */}
            <Card className="border-2 shadow-lg">
              <CardHeader className="border-b bg-accent/5">
                <CardTitle className="flex items-center text-2xl">
                  <Target className="mr-3 text-accent" size={28} />
                  Tujuan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {tujuan.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-foreground pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Kebijakan Mutu
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kebijakanMutu.map((item, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisiMisi
