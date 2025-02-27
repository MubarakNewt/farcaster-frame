import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  
  // Create the frame response
  const frameResponse = {
    frames: {
      version: 'vNext',
      image: 'https://media.istockphoto.com/id/1421301993/photo/shopping-cart-sign-on-the-cube-shape-dice.webp?a=1&b=1&s=612x612&w=0&k=20&c=UvRvXL2o7Drxr5vtxI2TKXgf9wB_kgNZ5Ep2KYcLRxQ=', // Replace with your image URL
      buttons: [
        {
          label: 'Thanks for clicking!',
        },
      ],
    },
  }

  return new Response(JSON.stringify(frameResponse), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}