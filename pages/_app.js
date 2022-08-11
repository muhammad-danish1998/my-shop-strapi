import { useEffect, useState } from 'react'
import MainLayout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
  </Head>
  useEffect(() => {
    console.log("I am useeffect from app.js")
  }, [])
  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)


  const addToCart = (item, qty, price, image) => {
    console.log("Add to cart")
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price, image])
    }
    console.log("Add to cart", newCart)
    setCart(newCart)
    setReloadKey(Math.random())
  }
  return (
    <>
      <MainLayout key={reloadKey} cart={cart} >
        <Component cart={cart} addToCart={addToCart} {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
