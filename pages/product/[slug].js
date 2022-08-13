
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'


const productList = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 2,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ product, addToCart }) {
  // console.log(",---", product.attributes);
  const router = useRouter()
  const { slug } = router.query
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(productList.colors[0])

  return (
    <div className="bg-white">

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">

                  <Tab
                    key={product.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{product.title}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img
                            src={product.attributes.image && product.attributes.image.data[0].attributes.name}
                            alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>

                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">

                <Tab.Panel key={product.id}>
                  <img
                    src={product.attributes.image && product.attributes.image.data[0].attributes.name}

                    alt={product.title}
                    className="w-full h-full object-center  sm:rounded-lg"
                  />
                </Tab.Panel>

              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.attributes.title}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">${product.attributes.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((ratingarr) => (
                      <StarIcon
                        key={ratingarr}
                        className={classNames(
                          product.attributes.rating > ratingarr ? 'text-yellow-500' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.attributes.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.attributes.description }}
                />
              </div>

              <form className="mt-6">
                <div className="mt-10 flex sm:flex-col1">
                  <button
                    onClick={() => { addToCart(slug, 1, product.attributes.price, product.attributes.image.data[0].attributes.name) }}
                    type="button"
                    className="max-w-xs flex-1  text-gray-600   border-1 border-gray-400 border border-transparent rounded-md  flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white  btn hover:text-white  hover:bg-red-400 sm:w-full"
                  >
                    Add to Cart
                  </button>
                  <Link href="/checkout">
                    <button
                      type="submit"
                      className="max-w-xs flex-1 ml-2 text-gray-600  border-1 border-gray-400 border border-transparent rounded-md  flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white  btn hover:text-white  hover:bg-red-400 sm:w-full"
                    >
                      Checkout
                    </button>
               </Link>
                  <button
                    type="button"
                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {productList.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open ? 'text-indigo-600' : 'text-gray-900',
                                  'text-sm font-medium'
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>


        </div>
      </main>


    </div>
  )
}
export async function getServerSideProps(context) {
  let headers = {
    Authorization: `Bearer d4ee7a87c03c1740c53479783dffa8fe9b6a71e34aef1d64efad6416a66de660e20030bc852f952ebd77ebd138d22bfd2a95d213184f42f6074df9a850cf1e6b2d3d861c445e0cc9b489fc7b7dc44cabf02823147b0b52c28947526a1a8a35b6a86615f9bbe3c00873f7bffe228b117a5d68ed3f08829e1e02281bb46b99661c`
  }
  const res = await fetch(`https://floating-tor-98206.herokuapp.com/api/products?filters[slug]=${context.query.slug}&populate=*`, { headers: headers })
  const product = await res.json()

  return {
    props: { product: product.data[0] },
  }
} 