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
                  src={strukturOrg2}
                  alt="Struktur Organisasi PT INBD - Detail Posisi"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          {/* Structure Diagram 2 */}
        </div>
      </section>
    </div>
  )
}

export default StrukturOrganisasi
