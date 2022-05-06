import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import useSWR from 'swr'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

// function getJoke() {
//   const URL = 'https://api.chucknorris.io/jokes/random'

//   fetch(URL).then(async (serverAnswer) => {
//     const answer = await serverAnswer.json()
//     setRandom(answer)
//   })
// }

export default function renderRandomJoke() {
  const [randomJoke, setRandomJoke] = useState('')

  async function getRandomJoke() {
    const URL = 'https://api.chucknorris.io/jokes/random'
    const response = await axios.get('https://api.chucknorris.io/jokes/random')

    console.log(response.data.value)
    setRandomJoke(response.data.value)
  }

  useEffect(() => {
    getRandomJoke()
  }, [])

  // render
  return (
    <Layout home={undefined}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2>{randomJoke}</h2>
        <div>
          <Link data-cy="one-more-btn" href={''}>
            <a
              data-cy="one-more-btn"
              className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
              onClick={getRandomJoke}
            >
              {' '}
              One more :-)
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
