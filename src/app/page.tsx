'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Map from '@/components/Map'

const features = [
  {
    name: "Community Amenities",
    description: "Discover Malibu Beach, sports facilities, and recreational areas",
    icon: "🏊‍♂️",
    href: "/amenities",
  },
  {
    name: "Residential Clusters",
    description: "Explore all residential clusters and their unique features",
    icon: "🏘️",
    href: "/clusters",
  },
  {
    name: "Services & Facilities",
    description: "Access information about gate pass, transport, and community services",
    icon: "🚪",
    href: "/services",
  },
  {
    name: "Education",
    description: "Find details about schools and educational facilities",
    icon: "📚",
    href: "/education",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to Damac Hills 2
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Your comprehensive guide to everything you need to know about living in Damac Hills 2, Akoya Dubai.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/amenities"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Explore Amenities
                  </Link>
                  <Link href="/clusters" className="text-sm font-semibold leading-6 text-gray-900">
                    View Clusters <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 ring-gray-900/10 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-blue-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-500 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            damachills2.com
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {features.map((feature) => (
                            <motion.div
                              key={feature.name}
                              whileHover={{ scale: 1.05 }}
                              className="relative rounded-lg bg-white/5 p-4 ring-1 ring-white/10"
                            >
                              <div className="flex items-center gap-x-3">
                                <span className="text-2xl">{feature.icon}</span>
                                <h3 className="text-sm font-semibold leading-6 text-white">
                                  <Link href={feature.href}>
                                    <span className="absolute inset-0" />
                                    {feature.name}
                                  </Link>
                                </h3>
                              </div>
                              <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick links section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quick Links</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access essential information and services with just a click
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                <Link href={feature.href} className="hover:text-blue-600">
                  {feature.name}
                </Link>
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Location section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Location</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find Damac Hills 2 in Akoya, Dubai
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Map />
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Damac Hills 2, Akoya, Dubai, United Arab Emirates</p>
            <p className="mt-2">Coordinates: 25.0333° N, 55.2707° E</p>
          </div>
        </div>
      </div>
    </div>
  );
}
