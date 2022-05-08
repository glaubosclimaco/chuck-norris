import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import utilStyles from '../styles/utils.module.css'

export default function jokeByCategory() {
  const [categories, setCategories] = useState(['Select a category'])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [joke, setJoke] = useState('')

  async function fetchCategories() {
    const result = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    )
    console.log(result.data)
    setCategories([...categories, ...result.data])
  }

  async function fetchJokeByCategory() {
    try {
      const result = await axios.get(
        'https://api.chucknorris.io/jokes/random?category=' + selectedCategory
      )
      console.log(result.data.value)
      setJoke(result.data.value)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()

    if (selectedCategory != '') {
      fetchJokeByCategory()
    }
  }, [selectedCategory]) //otimizacao: renderiza apenas se selectedCategory foi atualizado

  return (
    <Layout home={undefined}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <section className={utilStyles.headingMd}>
          <select
            data-cy="category-selector"
            onChange={(e) => {
              setSelectedCategory(e.target.value)
            }}
          >
            {categories.map((c, index) => (
              <option key={index}>{c}</option>
            ))}
          </select>
          <br></br>
          <p>{joke == '' && selectedCategory != '' ? 'Loading...' : joke}</p>
        </section>
      </div>
    </Layout>
  )
}
