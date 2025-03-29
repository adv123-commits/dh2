'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    category: 'Access & Security',
    items: [
      {
        name: 'Gate Pass System',
        description: 'Information about obtaining and managing gate passes for visitors and contractors',
        icon: '🔑',
        details: [
          'Online gate pass application',
          '24/7 security services',
          'Visitor management system',
        ],
      },
      {
        name: 'Security Services',
        description: 'Community security and surveillance information',
        icon: '🚔',
        details: [
          '24/7 security patrols',
          'CCTV surveillance',
          'Emergency response team',
        ],
      },
    ],
  },
  {
    category: 'Transportation',
    items: [
      {
        name: 'Community Shuttle',
        description: 'Details about the community shuttle service',
        icon: '🚌',
        details: [
          'Regular shuttle service',
          'Connects to major areas',
          'Schedule information',
        ],
      },
      {
        name: 'Parking Services',
        description: 'Information about parking facilities and regulations',
        icon: '🅿️',
        details: [
          'Visitor parking areas',
          'Resident parking permits',
          'Parking regulations',
        ],
      },
    ],
  },
  {
    category: 'Community Services',
    items: [
      {
        name: 'Maintenance',
        description: 'Property and community maintenance services',
        icon: '🔧',
        details: [
          'Property maintenance',
          'Landscaping services',
          'Emergency repairs',
        ],
      },
      {
        name: 'Community Events',
        description: 'Information about community events and activities',
        icon: '🎉',
        details: [
          'Regular community gatherings',
          'Seasonal events',
          'Activity schedules',
        ],
      },
    ],
  },
  {
    category: 'Utilities & Support',
    items: [
      {
        name: 'Utility Services',
        description: 'Information about utility connections and services',
        icon: '⚡',
        details: [
          'Electricity connections',
          'Water services',
          'Waste management',
        ],
      },
      {
        name: 'Community Support',
        description: 'Support services and contact information',
        icon: '💬',
        details: [
          'Community office',
          'Emergency contacts',
          'Service requests',
        ],
      },
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community Services</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access information about all community services and facilities in Damac Hills 2
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {services.map((category) => (
            <div key={category.category} className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 gap-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:ring-blue-500/20 transition-all"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-x-2 text-sm text-gray-600">
                          <svg className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
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