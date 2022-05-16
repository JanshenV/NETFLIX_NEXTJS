import type { NextPage } from 'next'

//NextJS components
import Head from 'next/head';

//Components
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix - NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home
