import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import utilStyles from '../styles/utils.module.css'

export default function jokeByCategory() {
  const [categories, setCategories] = useState(['Select an option'])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [joke, setJoke] = useState('')

  useEffect(() => {
    fetchCategories()

    if (selectedCategory != '') {
      fetchJokeByCategory()
    }
  }, [selectedCategory]) //otimizacao: renderiza apenas se selectedCategory foi atualizado

  async function fetchCategories() {
    const result = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    )
    console.log(result.data)
    setCategories([...categories, ...result.data])
  }

  async function fetchJokeByCategory() {
    const result = await axios.get(
      'https://api.chucknorris.io/jokes/random?category=' + selectedCategory
    )
    console.log(result.data.value)
    setJoke(result.data.value)
  }

  return (
    <Layout home={undefined}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <section className={utilStyles.headingMd}>
            Select a category:
            <br></br>
            <br></br>
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
          <br></br>
          {/* <h1>categoryState: {categoryState}</h1>
        <h1>selectedCategory: {selectedCategory}</h1> */}
          {/* <h2>Joke: {joke}</h2> */}
          <p>{joke}</p>
        </section>
      </div>
    </Layout>
  )
}
