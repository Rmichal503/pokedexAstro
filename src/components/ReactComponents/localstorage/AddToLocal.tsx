import React from 'react'
import { pokemonCollection } from '../../../store/pokemonCollection'
import type Pokemon from '../../../types/pokeApi'


export default function AddToLocal({ item }: { item: Pokemon }) {
  const addToLocalStorage = () => {
    console.log(pokemonCollection.get());
    return pokemonCollection.set([...pokemonCollection.get(), item])
  }
  return (
    <button onClick={(e) => {
      e.preventDefault()
      addToLocalStorage()
    }}>Add to collection</button>
  )
}
