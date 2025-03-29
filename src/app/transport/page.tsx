'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const busStops = [
  { 
    id: 1, 
    name: 'Amazonia',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Amazonia/@24.990947,55.3751125,16.1z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7bc71ee27d8f:0xda645840da61ef40!6m1!1v5!8m2!3d24.992771!4d55.373638!16s%2Fg%2F11vbv56xkz'
  },
  { 
    id: 2, 
    name: 'Trixis',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Trixis/@24.990947,55.3751125,16.1z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7bbf5fd8691b:0xeb9f4c63a553d102!6m1!1v5!8m2!3d24.996039!4d55.376575!16s%2Fg%2F11vbv55cjg'
  },
  { 
    id: 3, 
    name: 'Community Centre',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Community+Centre/@24.990947,55.3751125,16z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7beb38e1d901:0xddb2a313f0a4922b!6m1!1v5!8m2!3d24.997198!4d55.384708!16s%2Fg%2F11vf3zs4d6'
  },
  { 
    id: 4, 
    name: 'Zinnia',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Zinnia/@24.9952473,55.3919781,18.08z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7bf22fef0dbf:0x7ae0b15b29ab888a!6m1!1v5!8m2!3d24.995934!4d55.39393!16s%2Fg%2F11vbv560b3'
  },
  { 
    id: 5, 
    name: 'Odora',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Odora/@24.9904024,55.3808417,16z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7bf0db9ac8a7:0x92617572d972acf2!6m1!1v5!8m2!3d24.992929!4d55.396341!16s%2Fg%2F11vbv56ftq'
  },
  { 
    id: 6, 
    name: 'Mulberry',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Mulberry/@24.9891472,55.3938464,18.08z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7bfa49b2d5e1:0x6b21f051c86479b0!6m1!1v5!8m2!3d24.98855!4d55.39583!16s%2Fg%2F11l2_cf8xf'
  },
  { 
    id: 7, 
    name: 'Viridis',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Viridis/@24.9837251,55.3898602,18.08z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7be3642181bd:0x6785df5e21ca0b79!6m1!1v5!8m2!3d24.983534!4d55.390048!16s%2Fg%2F11vf3_2k9g'
  },
  { 
    id: 8, 
    name: 'Amargo',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Amargo/@24.9805779,55.3851969,18.08z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7be10d32f273:0xf88bbce66bcec446!6m1!1v5!8m2!3d24.980523!4d55.384872!16s%2Fg%2F11vf3_0m9z'
  },
  { 
    id: 9, 
    name: 'Victoria',
    trackingUrl: 'https://www.google.com/maps/place/Damac+Hills+2,+Victoria/@24.985331,55.3771429,18.08z/data=!4m17!1m8!3m7!1s0x3e5f6e1726f69ea1:0x53d1bd2badb3c18e!2sMotor+City+-+Dubai+Studio+City+-+Dubai!3b1!8m2!3d25.0346728!4d55.2397317!16zL20vMGNjYjc5!3m7!1s0x3e5f7bdcd169282b:0xe7191630cc81ca67!6m1!1v5!8m2!3d24.98544!4d55.377511!16s%2Fg%2F11l2_chhk_'
  },
]

export default function Transport() {
  const [hoveredStop, setHoveredStop] = useState<number | null>(null)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Public Transport</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            RTA Bus Route DA2 connecting Damac Hills 2 to Dubai Studio City
          </p>
        </div>

        <div className="mt-16">
          {/* Bus Information */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900">Route Information</h3>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Route:</span> DAMAC Hills 2 → Dubai Studio City</p>
              <p><span className="font-medium">Frequency:</span> Every two hours</p>
              <p><span className="font-medium">First Trip:</span> 5:47 AM</p>
              <p><span className="font-medium">Last Trip:</span> 9:32 PM</p>
              <p><span className="font-medium">Fare:</span> AED 5 (Nol cards accepted)</p>
              <p><span className="font-medium">Journey Time:</span> ~50 minutes</p>
            </div>
          </div>

          {/* Bus Stops List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bus Stops</h3>
            <div className="grid grid-cols-1 gap-4">
              {busStops.map((stop) => (
                <motion.div
                  key={stop.id}
                  whileHover={{ scale: 1.01 }}
                  onHoverStart={() => setHoveredStop(stop.id)}
                  onHoverEnd={() => setHoveredStop(null)}
                  className={`relative rounded-lg p-4 ${
                    hoveredStop === stop.id
                      ? 'bg-yellow-50 ring-2 ring-yellow-500'
                      : 'bg-white ring-1 ring-gray-200'
                  } transition-all duration-200`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm font-medium text-gray-500">Stop {stop.id}</span>
                      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                        {stop.name}
                      </h3>
                    </div>
                    {stop.trackingUrl && (
                      <a
                        href={stop.trackingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-3 py-2 text-sm font-semibold text-yellow-800 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                        </svg>
                        Track Bus
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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