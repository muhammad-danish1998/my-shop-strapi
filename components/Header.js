/* This Header requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'






function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({cart}) {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="xl:max-w-7xl mx-auto"  >
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">capabara logo</span>
                <img
                  className="h-8 w-auto sm:h-12"
                  src="https://svgsilh.com/svg/1400845.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none  focus:ring-inset ">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  Product
                </a>
              </Link>
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  About
                </a>
              </Link>
              <Link href='/'>
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  Contact
                </a>
              </Link>


            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-orange-600">
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-white rounded-md shadow-sm text-base font-medium bg-orange-500  btn hover:bg-orange-600"
              >
                Sign up
              </a> */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link href="/checkout">
                  <a className="group -m-2 p-2 flex items-center">
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: outline/shopping-bag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"> {cart.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://svgsilh.com/svg/1400845.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none  focus:ring-inset">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                      Home
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                      Product
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                      About
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                      Contact
                    </a>
                  </Link>



                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white btn hover:bg-orange-600"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-orange-600 ">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>


    </div>
  )
}
