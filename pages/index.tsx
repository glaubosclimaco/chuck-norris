import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Button from '../components/button';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
     
       <br></br>
       <p><Button href='random-joke' name='Random Joke' /></p> 
       <br></br>
       <p> <Button href='joke-by-category' name='Joke by category' /></p>
       <br></br>
       <p><Button href='' name='Search for a Joke' /></p>

      
      </section>
    </Layout>
  );
}