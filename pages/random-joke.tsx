import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../components/button'

export default function renderRandomJoke() {
  const [randomJoke, setRandomJoke] = useState('')

  async function getRandomJoke() {
    try {
      const URL = 'https://api.chucknorris.io/jokes/random'
      const response = await axios.get(
        'https://api.chucknorris.io/jokes/random'
      )

      console.log(response.data.value)
      setRandomJoke(response.data.value)
    } catch (error) {
      console.log(error)
    }
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

      <div className="flex  flex-col items-center justify-center py-2">
        <h2>{randomJoke == '' ? 'Loading...' : randomJoke}</h2>
        <br></br>
        <Button
          href={''}
          name={'One more :-)'}
          dataCy={'one-more-btn'}
          onClick={getRandomJoke}
        />
      </div>
    </Layout>
  )
}
