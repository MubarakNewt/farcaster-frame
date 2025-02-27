import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My First Farcaster Frame',
  description: 'A simple Farcaster Frame example',
  // Frame metadata
  openGraph: {
    title: 'My First Farcaster Frame',
    description: 'A simple Farcaster Frame example',
    images: ['https://media.istockphoto.com/id/2055960181/photo/documents-about-premises-liability-and-pen.webp?a=1&b=1&s=612x612&w=0&k=20&c=-RIFrPQaJhU6UWmizobFO18JirHxJQzMnpcixJzfJek='], // Replace with your image URL
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.webp?a=1&b=1&s=612x612&w=0&k=20&c=jeT_yWSIcphgoW9LEAkkCv0bKTOro5jlK3LJxuXpdRw=', // Replace with your image URL
    'fc:frame:button:1': 'Click me!',
    'fc:frame:post_url': 'https://farcaster-frame-six.vercel.app/', // Replace with your API endpoint
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">My First Farcaster Frame</h1>
      <p className="mt-4">This is a simple Farcaster Frame example</p>
    </div>
  )
}