import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import useSWR from 'swr'
import React, { Component } from 'react'
import Select from '../components/select';

export default function jokeByCategory() {
    const URL = 'https://api.chucknorris.io/jokes/categories';

  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())
  // fetch data
  const { data, error } = useSWR(URL, fetcher)

  if (error) return <div>failed to load</div>

  if (!data) return <div>loading...</div>

  // const categories = () => (
  //   <Select options={data} />
  // )

  return (
    <Layout home={undefined}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <h2>{data[0]}</h2> */}
        <div>

        <Select selected={''} categories={data}  />

        
          
        
      

      
      </div>
      </section>
    </Layout>
  )
}
