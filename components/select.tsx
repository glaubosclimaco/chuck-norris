import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import Layout from './layout'

export type selectedProps = {
  selected: string
  categories: string[]
  // parentCallback: any;
}

export default function select({ selected, categories }: selectedProps) {
  const [categoryState, setCategoryState] = useState('<empty>')

  const onChangeSelect = (e: any) => {
    const selected = e.target.value
    setCategoryState(selected)
    console.log('foi selecionado a ' + categoryState)
  }

  function logValue() {
    console.log(categoryState)
  }

  return (
    <div>
      <select
        value={'categoria'}
        onChange={(e) => {
          setCategoryState(e.target.value)
          //   console.log('foi selecionado a ' + categoryState)
          selected = categoryState
        }}
      >
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      {/* <button onClick={logValue}>submit</button> */}

      <h1>{categoryState} foi selecionado</h1>
    </div>
  )
}
