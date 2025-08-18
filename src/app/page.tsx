export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nachhilfeprofi Zürich
          </h1>
          <p className="text-lg text-gray-600">
            Professionelle Nachhilfe in Zürich
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-green-700">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Grundgerüst bereit
          </h2>
          <p className="text-gray-600">
            Das Next.js Projekt wurde erfolgreich erstellt.
          </p>
        </div>
      </div>
    </div>
  );
}
