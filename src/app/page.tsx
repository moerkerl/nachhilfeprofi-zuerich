'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const router = useRouter()
  
  const benefits = [
    {
      icon: '🔍',
      title: 'Wir finden den richtigen Tutor',
      description: 'Professionelle Auswahl passend zu Ihren Bedürfnissen'
    },
    {
      icon: '🤝',
      title: 'Wir begleiten den Prozess',
      description: 'Kontinuierliche Betreuung für optimale Ergebnisse'
    },
    {
      icon: '📈',
      title: 'Wir garantieren Erfolg',
      description: 'Messbare Fortschritte und nachhaltige Verbesserung'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Kostenlose Bedarfsanalyse',
      description: 'Unser Experten-Team analysiert die Bedürfnisse Ihres Kindes und definiert klare Lernziele für nachhaltigen Erfolg.'
    },
    {
      number: 2,
      title: 'Profi-Matching & Strategieplan',
      description: 'Wir wählen den perfekten Tutor aus unserem Netzwerk aus und entwickeln eine maßgeschneiderte Lernstrategie.'
    },
    {
      number: 3,
      title: 'Begleitete Umsetzung & Erfolgskontrolle',
      description: 'Kontinuierliche Betreuung, regelmäßige Fortschrittskontrollen und Anpassungen bis zum gewünschten Ergebnis.'
    }
  ]

  const testimonials = [
    {
      name: 'Familie Weber aus Zürich',
      text: 'Wir haben einen fantastischen Nachhilfelehrer in Zürich gefunden. Unser Sohn ist wieder motiviert und hat Freude am Lernen. Und auch seine Noten haben sich verbessert. Wir würden Nachhilfeprofi Zürich auf jeden Fall weiterempfehlen.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📚',
      title: 'Lerncoaching',
      description: 'Unsere Lerncoaches gehen auf die individuellen Baustellen ihrer Schüler ein. Hier steht ganzheitliches Lerncoaching im Vordergrund. Ziel ist es, dem Schüler das Lernen beizubringen. Damit er in Zukunft nicht mehr auf den Nachhilfe-Lehrer angewiesen ist und langfristig bessere Ergebnisse erzielen kann.'
    },
    {
      icon: '🎓',
      title: 'Gymi-Vorbereitung',
      description: 'Unsere Gymi-Spezialisten bereiten ihre Schüler im Einzelunterricht optimal auf die Gymi-Prüfung vor. Dabei gehen wir auf Ihre Wünsche ein und unterstützen entweder ganzheitlich oder in einem ganz bestimmten Fach.'
    },
    {
      icon: '📐',
      title: 'Fachspezifische Nachhilfe',
      description: 'Unsere Fachspezialisten helfen ihren Schülern dort, wo diese am meisten Mühe haben. Das können auch mehrere Fächer sein. Der Fokus liegt hier auf spezifischen fachlichen Baustellen, die der Schüler zusammen mit unserem Lehrer aufholen kann.'
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <LPHero
          title={
            <>
              <span className="inline-block">Die</span>{' '}
              <span className="inline-block text-[#7C3AED] font-bold">
                <AnimatedText text="Nachhilfe-Profis" />
              </span>{' '}
              <span className="inline-block">für Zürich</span>
            </>
          }
          subtitle="Wir sind Ihre Experten für erfolgreiche Nachhilfe in Zürich. Wir helfen Ihnen, den perfekten Tutor zu finden, begleiten den gesamten Prozess und stellen sicher, dass Ihr Kind wirklich Fortschritte macht."
          buttonText="Jetzt professionelle Nachhilfe finden"
          imageSrc="/images/Tutor_4_Klasse_hilft_Sohn_bei_den_Hausaufgaben_20250318_192534.jpg"
          imageAlt="Die Nachhilfe-Profis für Zürich - Professionelle Betreuung"
        />

        {/* Benefits */}
        <LPBenefits benefits={benefits} />

        {/* Problem Section */}
        <LPSection
          title="Nachhilfe gesucht, aber überfordert mit der Auswahl?"
          content="Die meisten Eltern kennen das Problem: Unzählige Anbieter, aber welcher ist wirklich gut? Wir nehmen Ihnen diese Entscheidung ab."
          bulletPoints={[
            'Zu viele Anbieter, keine Orientierung',
            'Unsicherheit über Qualität der Tutoren',
            'Kein Follow-up nach Vermittlung',
            'Wechselnde Ansprechpartner'
          ]}
          buttonText="Jetzt professionelle Beratung"
          imageSrc="/images/fuenftklaessler-mathe-niedergeschlagen-frust-schreibtisch-alleine-mathe-helden.jpg"
          imageAlt="Eltern bei der schwierigen Tutor-Auswahl"
          imagePosition="left"
          backgroundColor="gray"
        />

        {/* Solution Section - Custom Layout */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Title, Subtitle, Button */}
              <div className="space-y-6">
                <p className="text-[#7C3AED] font-semibold uppercase tracking-wide text-sm">
                  Die Perspektiven verbessern
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Deshalb sind wir die Profis für Nachhilfe in Zürich
                </h2>
                <p className="text-lg text-gray-600">
                  Wir übernehmen die komplette Verantwortung - von der Tutor-Auswahl bis zum messbaren Erfolg. Sie haben einen Ansprechpartner für alles.
                </p>
                <button 
                  onClick={() => router.push('/lehrer-finden')}
                  className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg hover:bg-[#6D28D9] transition-colors font-semibold shadow-lg cursor-pointer"
                >
                  Jetzt Profi-Service starten
                </button>
              </div>

              {/* Right Column - Bullet Points with Graphic */}
              <div className="relative">
                {/* Background Graphic */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="180" stroke="#7C3AED" strokeWidth="2" strokeDasharray="10 10" />
                    <circle cx="200" cy="200" r="140" stroke="#7C3AED" strokeWidth="2" strokeDasharray="8 8" />
                    <circle cx="200" cy="200" r="100" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6 6" />
                    <path d="M200 80 L250 150 L230 230 L170 230 L150 150 Z" stroke="#7C3AED" strokeWidth="2" fill="none" />
                    <circle cx="200" cy="80" r="10" fill="#7C3AED" />
                    <circle cx="250" cy="150" r="10" fill="#7C3AED" />
                    <circle cx="230" cy="230" r="10" fill="#7C3AED" />
                    <circle cx="170" cy="230" r="10" fill="#7C3AED" />
                    <circle cx="150" cy="150" r="10" fill="#7C3AED" />
                  </svg>
                </div>

                {/* Bullet Points Card */}
                <div className="relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-xl border border-purple-100">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Schritt für Schritt</p>
                        <h3 className="font-semibold text-gray-900">Selbstbewusstsein aufbauen</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Lebensverändernde</p>
                        <h3 className="font-semibold text-gray-900">Erfolge feiern</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Steps */}
        <LPSteps
          title="So funktioniert unser Profi-Service"
          steps={steps}
          ctaText="Jetzt kostenlose Beratung starten"
        />

        {/* Testimonials */}
        <LPTestimonial
          title="Was Eltern über unseren Profi-Service sagen"
          testimonials={testimonials}
        />

        {/* Offers */}
        <LPOffers
          title="Unsere Expertenbereiche"
          offers={offers}
        />

        {/* Final CTA Section - Custom Layout */}
        <section className="py-20 lg:py-24 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Nicht bereuen
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 text-left">
                <p>
                  Wir wissen, wie frustrierend es ist, zusätzliches Geld für die Ausbildung eines Kindes ausgeben zu müssen. Die Schulkosten sind hoch genug! Doch so wie viele Spitzensportler und Führungskräfte Einzelunterricht erhalten, ist die Investierung in einen Nachhilfelehrer in Zürich der schnellste (bewährte) Weg, um bessere Ergebnisse zu erzielen.
                </p>
                
                <p>
                  Kinder, die ihren Abschluss mit besseren Ergebnissen machen, haben größere Karrierechancen, erhalten mehr Möglichkeiten und berichten über ein höheres Selbstvertrauen. Nachhilfe ist wirklich eine Investierung in Ihr Kind! Leider lassen so viele Eltern das Problem liegen, bis es zu spät ist, und auch ein Nachhilfelehrer nichts mehr bewirken kann. Vertrauen Sie uns; vermeiden Sie Reue und beginnen Sie früh.
                </p>
                
                <p>
                  Gerne erklären wir Ihnen auch persönlich, wie wir genau in Zürich helfen.
                </p>
              </div>
              
              <button 
                onClick={() => router.push('/lehrer-finden')}
                className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg hover:bg-[#6D28D9] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
              >
                Jetzt den Profi-Service starten
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}