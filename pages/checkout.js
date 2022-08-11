
import { UserIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    name: "Women's Basic Tee",
    href: '#',
    price: '$32.00',
    color: 'Gray',
    size: 'S',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg',
    imageAlt: "Front of women's basic tee in heather gray.",
  },
  // More products...
]

export default function Example({ cart }) {
  const [redirecting, setRedirecting] = useState(false);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
      items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });
     // Redirect to checkout
     const stripe = await getStripe();
     await stripe.redirectToCheckout({ sessionId: id });
  }

  const [subtotal, setSubtotal] = useState(0);
  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });

  useEffect(() => {
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1]
    }
    setSubtotal(myTotal)
    console.log("cart------>", cart);
  }, [])
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <div className="bg-white">


      <main className="max-w-7xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="max-w-lg mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-lg mx-auto w-full">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((product, ind) => (
                  <li key={ind} className="py-6 flex space-x-6">
                    <img
                      src={product[2]}
                      alt={"not FOund"}
                      className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto text-sm font-medium space-y-1">
                          <h3 className="text-gray-900">
                            <a href={product.href}>{product[0]}</a>
                          </h3>
                          <p className="text-gray-900">{product[1]}</p>
                          <p className="hidden text-gray-500 sm:block">{product.color}</p>
                          <p className="hidden text-gray-500 sm:block">{product.size}</p>
                        </div>
                        <div className="flex-none flex space-x-4">
                          <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Edit
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">

              <div className="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt className="text-base">{cart.length ? "Total" : ""}</dt>
                <dd className="text-base">{cart.length ? subtotal : "Please Add Item"}</dd>
              </div>
            </dl>
          </div>

          <div className="max-w-lg mx-auto w-full">




            <form className="mt-0">
              <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

              <div className="mt-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="block p-3 border-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="block p-3 border-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={form.phone}
                    type="Number"
                    id="phone"
                    name="phone"
                    autoComplete="phone"
                    className="block p-3 border-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                    Message
                  </label>
                  <span id="message-max" className="text-sm text-warm-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    onChange={handleChange}
                    value={form.message}
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={''}
                  />
                </div>
              </div>



              <div className="mt-6 flex space-x-2">
                <div className="flex items-center h-5">
                  <input
                    onChange={handleChange}
                
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I have read the terms and conditions and agree to the sale of my personal information to the highest
                  bidder.
                </label>
              </div>

              <button
                type="submit"
                onClick={redirectToCheckout}
                disabled={redirecting}
                className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
              >
               Pay Now
              </button>
            </form>


          </div>
        </div>
      </main>
    </div>
  )
}
