import Layout, { siteTitle } from '../components/layout'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Button from '../components/button'

export default function renderJokeBySearch() {
  const [input, setInput] = useState('')
  const [joke, setJoke] = useState('')
  const [error, setError] = useState('')

  async function fetchJokesBySearch() {
    if (input != '') {
      try {
        setError('')
        console.log(input)
        const response = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${input}`
        )
        console.log(response.data.result.length)
        const numberOfJokes = response.data.result.length
        const rand = Math.trunc(Math.random() * numberOfJokes)
        console.log(rand)
        console.log(response.data.result[rand].value)

        setJoke(response.data.result[rand].value)
      } catch (error) {
        setError('Sorry, try again!')
      }
    }
  }

  useEffect(() => {
    fetchJokesBySearch()
  }, [])

  return (
    <Layout home={undefined}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex  flex-col items-center justify-center py-2">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Type something"
          value={input}
          onChange={(event) => {
            setInput(event.target.value)
          }}
        ></input>
        <br></br>
        <Button
          href={''}
          name="Go!"
          dataCy="search-joke-btn"
          onClick={fetchJokesBySearch}
        />
      </div>
      <br></br>
      <p>{error != '' ? error : joke}</p>
    </Layout>
  )
}
