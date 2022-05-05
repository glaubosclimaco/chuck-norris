import Link from 'next/link'
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';



// export default function randomJoke(){
//     return(
//         <Layout home={undefined}>
//         <Head>
//           <title>This is a random Joke!</title>
//         </Head>
//         <h1>This is a random Joke!</h1>
//         <h2>
//           <Link href="/">
//             <a>Back to home</a>
//           </Link>
//         </h2>
//       </Layout>
//     );
// }

import useSWR from "swr";
// import "./App.css";

export default function Random() {

  const URL = 'https://api.chucknorris.io/jokes/random';

  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
  // fetch data
  const { data, error } = useSWR(
    URL,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  
  if (!data) return <div>loading...</div>;
  // render data
  return (
    <Layout  home={undefined} >
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <h2>{data.value}</h2>
   
    </section>
   
      
    
    </Layout>
   
  );
}
