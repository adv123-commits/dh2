'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const clusters = [
  { id: 1, name: 'Sanctuary', x: 20, y: 42 },
  { id: 2, name: 'Pacifica', x: 18, y: 32 },
  { id: 3, name: 'Acuna', x: 22, y: 22 },
  { id: 4, name: 'Centaury', x: 32, y: 22 },
  { id: 5, name: 'Janusia', x: 42, y: 22 },
  { id: 6, name: 'Claret', x: 72, y: 22 },
  { id: 7, name: 'Juniper', x: 82, y: 22 },
  { id: 8, name: 'Primrose', x: 88, y: 28 },
  { id: 9, name: 'Odora', x: 82, y: 32 },
  { id: 10, name: 'Paloverde', x: 88, y: 38 },
  { id: 11, name: 'Aster', x: 82, y: 52 },
  { id: 12, name: 'Coursetia', x: 78, y: 58 },
  { id: 13, name: 'Amora', x: 88, y: 65 },
  { id: 14, name: 'Fiora', x: 88, y: 72 },
  { id: 15, name: 'Mimosa', x: 72, y: 82 },
  { id: 16, name: 'Basswood', x: 42, y: 82 },
  { id: 17, name: 'Victoria', x: 52, y: 72 },
  { id: 18, name: 'Albizia', x: 22, y: 72 },
  { id: 19, name: 'Avencia', x: 42, y: 62 },
  { id: 20, name: 'Amargo', x: 32, y: 52 },
  { id: 21, name: 'Amazonia Extension', x: 22, y: 52 },
  { id: 22, name: 'Amazonia', x: 25, y: 32 },
  { id: 23, name: 'Vardon', x: 42, y: 32 },
  { id: 24, name: 'Trixis', x: 42, y: 25 },
  { id: 25, name: 'Sycamore', x: 62, y: 22 },
  { id: 26, name: 'Aquilegia', x: 52, y: 32 },
  { id: 27, name: 'Zinnia', x: 68, y: 28 },
  { id: 28, name: 'Mulberry', x: 72, y: 38 },
  { id: 29, name: 'Hawthorn', x: 72, y: 45 },
]

export default function Clusters() {
  const [hoveredCluster, setHoveredCluster] = useState<number | null>(null)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Residential Clusters</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore all residential clusters in Damac Hills 2
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="lg:pr-8">
            {/* Cluster List */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {clusters.map((cluster) => (
                <motion.div
                  key={cluster.id}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredCluster(cluster.id)}
                  onHoverEnd={() => setHoveredCluster(null)}
                  className={`relative rounded-lg p-4 ${
                    hoveredCluster === cluster.id
                      ? 'bg-blue-50 ring-2 ring-blue-500'
                      : 'bg-white ring-1 ring-gray-200'
                  } transition-all duration-200`}
                >
                  <div className="flex items-center gap-x-3">
                    <span className="text-sm font-medium text-gray-500">#{cluster.id}</span>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      {cluster.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="relative lg:sticky lg:top-8 lg:self-start">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-[16/9] w-full relative bg-gray-100">
                <Image
                  src="/map.jpg"
                  alt="Damac Hills 2 Cluster Map"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  className="object-contain"
                  priority
                  onError={(e) => {
                    console.error('Image load error:', e);
                    setImageError(true);
                  }}
                />
                
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <p>Map image not found</p>
                      <p className="text-sm mt-2">Please ensure the map image is saved as &apos;map.jpg&apos; in the public directory</p>
                    </div>
                  </div>
                )}

                {/* Cluster Markers */}
                <div className="absolute inset-0">
                  {clusters.map((cluster) => (
                    <motion.div
                      key={cluster.id}
                      className={`absolute w-3 h-3 rounded-full cursor-pointer ${
                        hoveredCluster === cluster.id
                          ? 'bg-blue-500 ring-2 ring-white scale-150'
                          : 'bg-blue-400 ring-1 ring-white'
                      } transition-all duration-200`}
                      style={{
                        left: `${cluster.x}%`,
                        top: `${cluster.y}%`,
                      }}
                      onHoverStart={() => setHoveredCluster(cluster.id)}
                      onHoverEnd={() => setHoveredCluster(null)}
                    >
                      <div className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap ${
                        hoveredCluster === cluster.id ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-200`}>
                        <div className="px-2 py-1 text-xs font-semibold rounded bg-white text-gray-900 shadow-lg">
                          {cluster.name}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
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