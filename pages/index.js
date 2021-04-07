import Head from 'next/head'

export default function Home() {
  return (

    <div className='bg-white bg-hero-pattern bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center' style={{backgroundPosition:"center"}}>
    <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
      HEROS
    </h1>
    <a
      className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'
      href='#'
    >
       Excelsior{' '}
    </a>
  </div>

  )
}
