'use client'

import { useRouter } from 'next/navigation'

interface Step {
  number: number
  title: string
  description: string
}

interface LPStepsProps {
  title: string
  steps: Step[]
  ctaText: string
  onCTAClick?: () => void
}

export default function LPSteps({ title, steps, ctaText, onCTAClick }: LPStepsProps) {
  const router = useRouter()

  const handleClick = () => {
    if (onCTAClick) {
      onCTAClick()
    } else {
      router.push('/lehrer-finden')
    }
  }

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              {/* Step Number Circle */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200">
                    <div className="absolute left-8 right-0 h-full bg-gradient-to-r from-[#7C3AED] to-gray-200"></div>
                  </div>
                )}
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleClick}
            className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg hover:bg-[#6D28D9] hover:shadow-xl transform hover:-translate-y-0.5 transition-all font-semibold text-lg shadow-lg cursor-pointer"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}