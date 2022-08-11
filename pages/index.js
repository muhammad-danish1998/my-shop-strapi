import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Baner from '../components/Baner'
import ProductList from '../components/ProductList'

import styles from '../styles/Home.module.css'
import Product from './products'
let domain = 'http://localhost:1337'

export default function Home(props) {
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

              <img src={file.attributes.image.data && file.attributes.image.data[0].attributes.name} alt="" className="object-center  pointer-events-none group-hover:opacity-75" />


              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.attributes.title}</p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.attributes.description.slice(0, 120)}</p>
            <p className="mt-2 block text-lg  font-bold text-gray-900 truncate pointer-events-none">${file.attributes.price}</p>
            <Link href={(file.attributes.href ? file.attributes.href : "")}>
              <Link href={`/product/${file.attributes.slug}`}>
                <a

                  className={`mt-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-white rounded-md shadow-sm text-base font-medium bg-orange-500  btn hover:bg-orange-600 w-fit lg:w-full`}
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
    Authorization: `Bearer 7acd9cd9a8ee2c59f81ba2885ad6c832e77a9fee50a2a4760ae560d78db808393081183348268c6b949fa68a5e4bdbc4e14885a477f4f8ded9d848d46336627673da06620c1a6c455278a44109b35face01101947e120669aba86551369b3fb3af12eeb00797711bea33d2d627834b348be301f4f65b8d5f23c286752e62eabf`
  }
  const res = await fetch(`http://localhost:1337/api/products?populate=*`, { headers: headers })
  const products = await res.json()

  return {
    props: { products }
  }
} 