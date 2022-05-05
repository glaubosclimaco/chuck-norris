import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import useSWR from 'swr'
import Link from 'next/link'

function getRandomJoke() {
  const URL = 'https://api.chucknorris.io/jokes/random'

  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

  // fetch data
  const { data, error } = useSWR(URL, fetcher)

  return { data, error }
}

export default function renderJoke() {
  const { data, error } = getRandomJoke()

  if (error) return <div>failed to load</div>

  if (!data) return <div>loading...</div>

  // render
  return (
    <Layout home={undefined}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2>{data.value}</h2>
        <div>
          <Link href={''}>
            <a onClick={getRandomJoke}> Add</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
