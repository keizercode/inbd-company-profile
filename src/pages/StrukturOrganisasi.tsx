import { Card, CardContent } from '@/components/ui/card'

const StrukturOrganisasi = () => {
  const leadership = [
    {
      name: 'dr. Hasmoro',
      position: 'Komisaris Utama',
      image: '/images/drHasmoro-komisaris-utama.png'
    },
    {
      name: 'Hendra Suryadarma',
      position: 'Komisaris',
      image: '/images/Pak_Hendra_-Komisaris_INBD.png'
    },
    {
      name: 'Ricky Gunawan',
      position: 'Direktur Utama',
      image: '/images/Pak_Ricky_-Direktur_Utama_INBD.png'
    },
    {
      name: 'Fajar Rahmana',
      position: 'Direktur',
      image: '/images/Pak_Fajar_-Direktur_INBD.png'
    }
  ]

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

      {/* Leadership Section - NEW */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Jajaran Pimpinan
              </h2>
              <p className="text-lg text-muted-foreground">
                Tim kepemimpinan yang berpengalaman dan profesional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className="border-2 hover:shadow-xl transition-all group hover:border-primary overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src =
                            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Rm90bzwvdGV4dD48L3N2Zz4='
                        }}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-primary font-semibold">
                        {leader.position}
                      </p>
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

export default StrukturOrganisasi
