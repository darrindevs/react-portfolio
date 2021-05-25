/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
//import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/"> <img
                            className="h-8 w-8 rounded-full"
                            src="https://zno.s3-us-west-1.amazonaws.com/helloDarrin.jpg"
                            alt=""
                          /></a>
                          <a href="/"><h1 className="text-white text-lg font-bold ml-3">Darrin Weyers</h1></a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}
