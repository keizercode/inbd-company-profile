import strukturOrg1 from '@/assets/struktur-org-1.png'
import strukturOrg2 from '@/assets/struktur-org-2.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users } from 'lucide-react'

const StrukturOrganisasi = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Struktur Organisasi
            </h1>
            <p className="text-xl opacity-95">PT Integrasi Bisnis Digital</p>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Structure Diagram 1 */}
          <Card className="border-2 shadow-lg overflow-hidden">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 text-primary" size={28} />
                Bagan Struktur Organisasi
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-white rounded-lg p-4 md:p-6">
                <img
                  src={strukturOrg1}
                  alt="Struktur Organisasi PT INBD - Detail Posisi"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          {/* Structure Diagram 2 */}
          <Card className="border-2 shadow-lg overflow-hidden">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 text-secondary" size={28} />
                Bagan Struktur Organisasi dengan Nama
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-white rounded-lg p-4 md:p-6">
                <img
                  src={strukturOrg2}
                  alt="Struktur Organisasi PT INBD - Dengan Nama"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          {/* Organizational Info */}
          <Card className="border-2 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Leadership */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                    <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                    Dewan Komisaris
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-5">
                    <li>1. dr. Hasmoro</li>
                    <li>2. Hendra Suryadarma</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                    <span className="w-2 h-8 bg-secondary rounded-full mr-3"></span>
                    Direksi
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-5">
                    <li>1. Ricky Gunawan (Direktur Utama)</li>
                    <li>2. Fajar Rahmana (Direktur)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                    <span className="w-2 h-8 bg-accent rounded-full mr-3"></span>
                    Kepala Operasional
                  </h3>
                  <p className="text-muted-foreground ml-5">Lesli Tamarina</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                    <span className="w-2 h-8 bg-accent rounded-full mr-3"></span>
                    Staf Administrasi
                  </h3>
                  <p className="text-muted-foreground ml-5">
                    Rahmah Laila Sahar
                  </p>
                </div>
              </div>

              {/* Managers */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Manajer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground">
                      Manajer Master Data
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      dr. Randy Gunawan
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground">
                      Manajer Implementasi
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fekih Ardlian
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground">
                      Manajer Network
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Egi Ginanzar
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground">
                      Manajer Support
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">-</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default StrukturOrganisasi
