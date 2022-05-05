import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'



export default function randomJoke(){
    return(
        <Layout home={undefined}>
        <Head>
          <title>This is a random Joke!</title>
        </Head>
        <h1>This is a random Joke!</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    );
}