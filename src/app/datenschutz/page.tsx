import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
          <p className="text-lg text-gray-600">Informationen zur Datenverarbeitung bei Nachhilfeprofi Zürich</p>
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
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Allgemeine Hinweise</h2>
            <p className="text-gray-700 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
              mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="text-gray-700">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die Bildungsinstitut Fokus AG. 
              Die Kontaktdaten finden Sie im <Link href="/impressum" className="text-[#7C3AED] hover:underline">Impressum</Link>.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Datenerfassung auf unserer Website</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular und Anfragen</h3>
                <p className="text-gray-700 mb-3">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="text-gray-700">
                  <strong>Erhobene Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, Postleitzahl, 
                  Informationen zur gewünschten Nachhilfe (Fach, Klasse, Schüler).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
                <p className="text-gray-700 mb-3">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies und Analysedienste</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Ads und Conversion-Tracking</h3>
                <p className="text-gray-700 mb-3">
                  Diese Website nutzt Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited, 
                  Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-gray-700 mb-3">
                  Im Rahmen von Google Ads nutzen wir das sogenannte Conversion-Tracking. Wenn Sie auf eine von 
                  Google geschaltete Anzeige klicken wird ein Cookie für das Conversion-Tracking gesetzt.
                </p>
                <p className="text-gray-700">
                  <strong>Zweck:</strong> Messung der Wirksamkeit unserer Werbeanzeigen und Optimierung der Website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Session-Cookies</h3>
                <p className="text-gray-700">
                  Wir verwenden Session-Cookies zur technischen Bereitstellung unserer Dienste, insbesondere 
                  für die Sicherheit des Kontaktformulars (CSRF-Schutz).
                </p>
              </div>
            </div>
          </section>

          {/* Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Weitergabe von Daten</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HubSpot CRM</h3>
                <p className="text-gray-700 mb-3">
                  Zur Verwaltung von Kundenanfragen nutzen wir HubSpot, einen Service der HubSpot Inc., 
                  25 First Street, 2nd Floor, Cambridge, MA 02141, USA.
                </p>
                <p className="text-gray-700">
                  <strong>Übermittelte Daten:</strong> Kontaktdaten und Angaben zur Nachhilfe-Anfrage zur 
                  Bearbeitung und Kontaktaufnahme.
                </p>
              </div>
            </div>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihre Rechte</h2>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong>Auskunftsrecht:</strong> Sie können jederzeit Auskunft über die von uns gespeicherten 
                personenbezogenen Daten verlangen.
              </p>
              <p>
                <strong>Berichtigungsrecht:</strong> Sie haben das Recht, unrichtige Daten berichtigen zu lassen.
              </p>
              <p>
                <strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen, soweit keine 
                gesetzlichen Aufbewahrungsfristen entgegenstehen.
              </p>
              <p>
                <strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten zu Werbezwecken jederzeit widersprechen.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt bei Datenschutz-Fragen</h2>
            <p className="text-gray-700">
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong>Bildungsinstitut Fokus AG</strong><br />
                Giuseppe D&apos;Antico<br />
                E-Mail: <a href="mailto:dantico@fokus-nachhilfe.ch" className="text-[#7C3AED] hover:underline">dantico@fokus-nachhilfe.ch</a><br />
                Telefon: <a href="tel:+41783146265" className="text-[#7C3AED] hover:underline">078 314 62 65</a>
              </p>
            </div>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rechtsgrundlage</h2>
            <p className="text-gray-700">
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO 
              (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Datenverarbeitung zur 
              Bereitstellung der Website erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          {/* Last Updated */}
          <section className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Stand dieser Datenschutzerklärung: {new Date().toLocaleDateString('de-CH')}
            </p>
          </section>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/impressum"
              className="px-6 py-3 border-2 border-[#7C3AED] text-[#7C3AED] font-semibold rounded-lg hover:bg-[#7C3AED] hover:text-white transition-colors"
            >
              Impressum
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