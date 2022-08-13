import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Baner from '../components/Baner'
import ProductList from '../components/ProductList'
import { StarIcon } from '@heroicons/react/solid'


import styles from '../styles/Home.module.css'
import Product from './products'
let domain = 'https://floating-tor-98206.herokuapp.com/'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Home(props, { product }) {
  console.log("propssssss------", props.products.data[2].attributes.rating)
  //  const[dataRes , setData] =  useState(props.products);
  // const [apiData] = props.products.data;

  return (
    <>
      <Baner />

      <h1 className="max-w-7xl mx-auto py-6 text-5xl ">Products List  →</h1>
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 max-w-7xl mx-auto py-6">
        {props.products.data.map((file) => (


          <li key={file.name} className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              {/* <img src={domain + file.attributes.image.data.name} alt="" className="object-cover pointer-events-none group-hover:opacity-75" /> */}

              <img src={file.attributes.image.data && file.attributes.image.data[0].attributes.name} alt="" className="object-fit object-fit  pointer-events-none group-hover:opacity-75" />


              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="mt-2 block text-lg font-medium text-gray-900 truncate pointer-events-none">{file.attributes.title}</p>
            {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.attributes.description.slice(0, 120)}</p> */}

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((ratingarr, ind) => (
                    <StarIcon
                      key={ratingarr}
                      className={classNames(
                        props.products.data[0].attributes.rating > ratingarr ? 'text-yellow-500' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{props.products.data[0].attributes.rating} out of 5 stars</p>
              </div>
            </div>

            <p className="block mt-2 text-sm font-medium text-gray-500 pointer-events-none">Price</p>

            <p className=" block text-lg  font-bold text-gray-900 truncate pointer-events-none">${file.attributes.price}</p>
            <Link href={(file.attributes.href ? file.attributes.href : "")}>
              <Link href={`/product/${file.attributes.slug}`}>
                <a

                  className={`mt-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-gray-600  border-solid border-1 border-gray-400 rounded-md shadow-sm text-base font-medium bg-white  btn hover:text-white  hover:bg-red-400 w-fit lg:w-full`}
                >
                  Buy Now
                </a>
              </Link>
            </Link>

          </li>
        ))}
      </ul>
    </>
  )
}
export async function getServerSideProps(context) {
  let headers = {
    Authorization: `Bearer d4ee7a87c03c1740c53479783dffa8fe9b6a71e34aef1d64efad6416a66de660e20030bc852f952ebd77ebd138d22bfd2a95d213184f42f6074df9a850cf1e6b2d3d861c445e0cc9b489fc7b7dc44cabf02823147b0b52c28947526a1a8a35b6a86615f9bbe3c00873f7bffe228b117a5d68ed3f08829e1e02281bb46b99661c`
  }
  const res = await fetch(`https://floating-tor-98206.herokuapp.com/api/products?populate=*`, { headers: headers })
  const products = await res.json()

  return {
    props: { products }
  }
} 