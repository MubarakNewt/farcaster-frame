import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    // Log the frame data to see what we receive
    console.log('Frame data:', data)

    // The data object contains:
    // data.untrustedData.buttonIndex - which button was clicked (1-4)
    // data.untrustedData.fid - the user's Farcaster ID
    // data.untrustedData.inputText - text input if you have a text field
    const { buttonIndex, fid, inputText } = data.untrustedData

    // You can customize the response based on which button was clicked
    let responseMessage = 'Thanks for clicking!'
    if (buttonIndex === 1) {
      responseMessage = `Thanks FID ${fid} for clicking button 1!`
    }

    return new Response(
      JSON.stringify({
        version: 'vNext',
        image: 'https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.webp?a=1&b=1&s=612x612&w=0&k=20&c=jeT_yWSIcphgoW9LEAkkCv0bKTOro5jlK3LJxuXpdRw=', // Replace with your image URL
        buttons: [
          {
            label: responseMessage,
          },
        ],
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}