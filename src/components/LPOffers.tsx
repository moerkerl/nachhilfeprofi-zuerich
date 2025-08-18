'use client'

interface Offer {
  icon: string
  title: string
  description: string
}

interface LPOffersProps {
  title: string
  offers: Offer[]
}

export default function LPOffers({ title, offers }: LPOffersProps) {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100"
            >
              <div className="w-16 h-16 bg-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">{offer.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {offer.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}