import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat Application</title>
        <meta name="description" content="Chat Application using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <main>
        Let's get started
      </main>
    </>
  )
}
