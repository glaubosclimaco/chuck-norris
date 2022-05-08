import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// 'uri' corresponds to the location of our GraphQL server
// 'cache' to store and reuse query results
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

export default function Home() {
  return (
    <ApolloProvider client={client}>
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
            onClick={undefined}
          />
        </p>
        <br></br>
        <p>
          {' '}
          <Button
            href="joke-by-category"
            name="Joke by category"
            dataCy={'joke-by-category-btn'}
            onClick={undefined}
          />
        </p>
        <br></br>
        <p>
          <Button
            href="joke-by-search"
            name="Search for a Joke"
            dataCy={'joke-by-search-btn'}
            onClick={undefined}
          />
        </p>
      </Layout>
    </ApolloProvider>
  )
}
