const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    let headers = {
        Authorization: `Bearer d4ee7a87c03c1740c53479783dffa8fe9b6a71e34aef1d64efad6416a66de660e20030bc852f952ebd77ebd138d22bfd2a95d213184f42f6074df9a850cf1e6b2d3d861c445e0cc9b489fc7b7dc44cabf02823147b0b52c28947526a1a8a35b6a86615f9bbe3c00873f7bffe228b117a5d68ed3f08829e1e02281bb46b99661c`
      }
  if (req.method === 'POST',{ headers: headers }) {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1LVYN2DTHFEX3w3fPxFppdDC',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}