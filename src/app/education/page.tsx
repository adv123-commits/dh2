'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const schools = [
  {
    name: 'GEMS International School',
    type: 'International Baccalaureate',
    levels: ['Kindergarten', 'Primary', 'Secondary'],
    features: [
      'IB World School',
      'Modern facilities',
      'Sports complex',
      'Science labs',
    ],
    icon: '🎓',
  },
  {
    name: 'British International School',
    type: 'British Curriculum',
    levels: ['Early Years', 'Primary', 'Secondary'],
    features: [
      'British curriculum',
      'Swimming pool',
      'Art studios',
      'Music rooms',
    ],
    icon: '🇬🇧',
  },
  {
    name: 'American International School',
    type: 'American Curriculum',
    levels: ['Pre-K', 'Elementary', 'Middle School', 'High School'],
    features: [
      'AP courses',
      'Sports fields',
      'Technology labs',
      'Library',
    ],
    icon: '🇺🇸',
  },
]

const facilities = [
  {
    name: 'Early Learning Center',
    description: 'Preschool and kindergarten facilities',
    features: [
      'Age-appropriate learning spaces',
      'Outdoor play areas',
      'Qualified teachers',
      'Safe environment',
    ],
    icon: '👶',
  },
  {
    name: 'Sports Academy',
    description: 'Professional sports training facilities',
    features: [
      'Multiple sports fields',
      'Professional coaches',
      'Training programs',
      'Competition venues',
    ],
    icon: '⚽',
  },
  {
    name: 'Learning Support Center',
    description: 'Specialized educational support services',
    features: [
      'Individual tutoring',
      'Study skills workshops',
      'Exam preparation',
      'Learning assessments',
    ],
    icon: '📚',
  },
]

export default function Education() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the educational opportunities available in Damac Hills 2
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">International Schools</h2>
          <div className="grid grid-cols-1 gap-8">
            {schools.map((school) => (
              <motion.div
                key={school.name}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:ring-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-x-4">
                  <div className="text-4xl">{school.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                      {school.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{school.type}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">Education Levels:</h4>
                  <p className="mt-1 text-sm text-gray-600">{school.levels.join(', ')}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {school.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Educational Facilities</h2>
          <div className="grid grid-cols-1 gap-8">
            {facilities.map((facility) => (
              <motion.div
                key={facility.name}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:ring-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-x-4">
                  <div className="text-4xl">{facility.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                      {facility.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{facility.description}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {facility.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 