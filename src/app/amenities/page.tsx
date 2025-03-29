'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const amenities = [
  {
    category: 'Beach & Recreation',
    items: [
      {
        name: 'Malibu Beach',
        description: 'Private beach club with swimming pools, water sports, and beach activities',
        icon: '🏖️',
      },
      {
        name: 'Swimming Pools',
        description: 'Multiple community pools with separate areas for adults and children',
        icon: '🏊‍♂️',
      },
      {
        name: 'Water Park',
        description: 'Family-friendly water park with slides and splash areas',
        icon: '🎢',
      },
    ],
  },
  {
    category: 'Sports Facilities',
    items: [
      {
        name: 'Football Fields',
        description: 'Professional football pitches with floodlights',
        icon: '⚽',
      },
      {
        name: 'Tennis Courts',
        description: 'Multiple tennis courts with professional coaching available',
        icon: '🎾',
      },
      {
        name: 'Basketball Courts',
        description: 'Indoor and outdoor basketball facilities',
        icon: '🏀',
      },
    ],
  },
  {
    category: 'Fitness & Wellness',
    items: [
      {
        name: 'Gymnasium',
        description: 'State-of-the-art fitness center with modern equipment',
        icon: '💪',
      },
      {
        name: 'Yoga Studio',
        description: 'Dedicated space for yoga and meditation classes',
        icon: '🧘‍♀️',
      },
      {
        name: 'Spa',
        description: 'Luxury spa offering various treatments and massages',
        icon: '🧖‍♀️',
      },
    ],
  },
  {
    category: 'Community Spaces',
    items: [
      {
        name: 'Community Center',
        description: 'Multi-purpose hall for events and gatherings',
        icon: '🏛️',
      },
      {
        name: 'Children\'s Play Area',
        description: 'Safe and well-equipped play areas for children',
        icon: '🎠',
      },
      {
        name: 'Parks & Gardens',
        description: 'Beautifully landscaped parks and walking trails',
        icon: '🌳',
      },
    ],
  },
]

export default function Amenities() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community Amenities</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover all the amazing facilities and recreational spaces available in Damac Hills 2
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {amenities.map((category) => (
            <div key={category.category} className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 gap-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    className="relative flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:ring-blue-500/20 transition-all"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
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