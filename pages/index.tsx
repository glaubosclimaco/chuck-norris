import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <br></br>
      <p>
        <Button
          href="random-joke"
          name="Random Joke"
          dataCy={'random-joke-btn'}
          onClick={function (): void {}}
        />
      </p>
      <br></br>
      <p>
        <Button
          href="joke-by-category"
          name="Joke by category"
          dataCy={'joke-by-category-btn'}
          onClick={function (): void {}}
        />
      </p>
      <br></br>
      <p>
        <Button
          href="joke-by-search"
          name="Search for a Joke"
          dataCy={'joke-by-search-btn'}
          onClick={function (): void {}}
        />
      </p>
    </Layout>
  )
}
