import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
          <p className="text-lg text-gray-600">Rechtliche Informationen zu Nachhilfeprofi Zürich</p>
        </div>

        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäss Art. 8 Abs. 1 UWG</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Unternehmen:</strong> Bildungsinstitut Fokus AG</p>
              <p><strong>Geschäftsführer:</strong> Giuseppe D&apos;Antico</p>
              <p><strong>Adresse:</strong> Bildungsinstitut Fokus AG, Schweiz</p>
              <p><strong>Telefon:</strong> <a href="tel:+41783146265" className="text-[#7C3AED] hover:underline">078 314 62 65</a></p>
              <p><strong>E-Mail:</strong> <a href="mailto:dantico@fokus-nachhilfe.ch" className="text-[#7C3AED] hover:underline">dantico@fokus-nachhilfe.ch</a></p>
              <p><strong>Website:</strong> <a href="https://nachhilfeprofi-zuerich.ch" className="text-[#7C3AED] hover:underline">nachhilfeprofi-zuerich.ch</a></p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Inhalt der Website</h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Verweise und Links</h3>
                <p>
                  Bei direkten oder indirekten Verweisen auf fremde Internetseiten (&quot;Links&quot;), die ausserhalb 
                  des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschliesslich 
                  in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch 
                  möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                </p>
              </div>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <p className="text-gray-700">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
              schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
              Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          {/* Data Protection Reference */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Datenschutz</h2>
            <p className="text-gray-700">
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. 
              Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf 
              freiwilliger Basis. Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-[#7C3AED] hover:underline font-semibold">
                Datenschutzerklärung
              </Link>.
            </p>
          </section>

          {/* Contact for Legal Matters */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rechtliche Hinweise</h2>
            <p className="text-gray-700">
              Sollten Sie Fragen oder Anmerkungen zu rechtlichen Aspekten dieser Website haben, 
              kontaktieren Sie uns bitte unter{' '}
              <a href="mailto:dantico@fokus-nachhilfe.ch" className="text-[#7C3AED] hover:underline font-semibold">
                dantico@fokus-nachhilfe.ch
              </a>.
            </p>
          </section>

          {/* Last Updated */}
          <section className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Letzte Aktualisierung: {new Date().toLocaleDateString('de-CH')}
            </p>
          </section>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/datenschutz"
              className="px-6 py-3 border-2 border-[#7C3AED] text-[#7C3AED] font-semibold rounded-lg hover:bg-[#7C3AED] hover:text-white transition-colors"
            >
              Datenschutzerklärung
            </Link>
            <Link 
              href="/"
              className="px-6 py-3 bg-[#7C3AED] text-white font-semibold rounded-lg hover:bg-[#6D28D9] transition-colors"
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