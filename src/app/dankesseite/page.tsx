import Link from 'next/link'
import ConversionTracker from '@/components/ConversionTracker'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DankePage() {
  return (
    <>
      <ConversionTracker />
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section with Success Message */}
      <div className="pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <svg 
                  className="w-16 h-16 text-green-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2">
                <span className="flex h-8 w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-green-500"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vielen Dank für Ihre Anfrage!
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Wir haben Ihre Anfrage erhalten und werden uns innerhalb von{' '}
            <span className="text-[#7C3AED] font-bold">24 Stunden</span> bei Ihnen melden.
          </p>
          
          <p className="text-lg text-gray-500">
            Ihre Anfragenummer: <span className="font-mono font-semibold">#{Date.now().toString().slice(-6)}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Process Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            So geht es weiter
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold mb-2">Schritt 1</h3>
              <p className="text-sm text-gray-600">Wir analysieren Ihre Anforderungen und suchen passende Tutoren in Zürich</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold mb-2">Schritt 2</h3>
              <p className="text-sm text-gray-600">Persönliche Beratung per Telefon oder E-Mail</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-semibold mb-2">Schritt 3</h3>
              <p className="text-sm text-gray-600">Vorstellung von 2-3 qualifizierten Nachhilfelehrern aus Zürich</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Schritt 4</h3>
              <p className="text-sm text-gray-600">Sie wählen Ihren Wunsch-Tutor und starten</p>
            </div>
          </div>
        </div>

        {/* Trust Building Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Warum Nachhilfeprofi Zürich?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Geprüfte Lehrkräfte</h3>
                  <p className="text-gray-600 text-sm">Alle Tutoren durchlaufen einen strengen Auswahlprozess</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Individuelle Betreuung</h3>
                  <p className="text-gray-600 text-sm">Massgeschneiderte Lernpläne für jeden Schüler</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lokal in Zürich</h3>
                  <p className="text-gray-600 text-sm">Spezialisiert auf Zürich und Umgebung</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Erfolgsgarantie</h3>
                  <p className="text-gray-600 text-sm">Regelmässige Fortschrittsberichte und Anpassungen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stats */}
          <div className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Unsere Erfolge in Zürich sprechen für sich
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-purple-100 text-sm">Zufriedene Eltern & Schüler</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-purple-100 text-sm">Standorte in Zürich</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-purple-100 text-sm">Qualifizierte Tutoren</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-purple-100 text-sm">Durchschnittsbewertung</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-purple-400">
              <p className="text-sm opacity-90">
                &ldquo;Die Nachhilfe hat unserem Sohn sehr geholfen. Die Noten haben sich deutlich verbessert!&rdquo;
              </p>
              <p className="text-xs mt-2 opacity-75">- Familie Weber aus Zürich</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-50 rounded-2xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-gray-600 mb-6">
              Unser Beratungsteam steht Ihnen gerne zur Verfügung
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold mb-2">Telefonisch</h3>
                <a href="tel:+41783146265" className="text-[#7C3AED] font-bold text-lg hover:text-[#6D28D9]">
                  078 314 62 65
                </a>
                <p className="text-sm text-gray-500 mt-1">Mo-Fr: 8:00-18:00 Uhr</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-semibold mb-2">Per E-Mail</h3>
                <a href="mailto:dantico@fokus-nachhilfe.ch" className="text-[#7C3AED] font-bold hover:text-[#6D28D9]">
                  dantico@fokus-nachhilfe.ch
                </a>
                <p className="text-sm text-gray-500 mt-1">Antwort innerhalb 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Möchten Sie mehr erfahren?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 bg-[#7C3AED] text-white font-semibold rounded-lg hover:bg-[#6D28D9] transition-colors text-center shadow-lg"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}