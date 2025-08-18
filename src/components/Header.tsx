import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo/logo.png" 
              alt="Nachhilfeprofi Zürich" 
              className="h-20 w-auto"
            />
          </Link>
          <Link 
            href="/lehrer-finden" 
            className="border-2 border-[#7C3AED] text-[#7C3AED] px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-medium bg-white hidden md:block"
          >
            Jetzt Nachhilfe finden
          </Link>
        </div>
      </div>
    </header>
  )
}