import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import useSWR from 'swr'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../components/button'

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

      {/* <section className={utilStyles.headingMd}> */}
      <div className="flex  flex-col items-center justify-center py-2">
        <h2>{randomJoke}</h2>
        <br></br>
        <Button
          href={''}
          name={'One more :-)'}
          dataCy={'one-more-btn'}
          onClick={getRandomJoke}
        />
        </div>
      {/* </section> */}
    </Layout>
  )
}
