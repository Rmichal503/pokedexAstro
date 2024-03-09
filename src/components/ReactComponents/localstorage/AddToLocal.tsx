import React from 'react'
import { pokemonCollection } from '../../../store/pokemonCollection'
import type Pokemon from '../../../types/pokeApi'


export default function AddToLocal({ item }: { item: Pokemon }) {
  const addToLocalStorage = () => {
    console.log(pokemonCollection.get());
    return pokemonCollection.set([...pokemonCollection.get(), item])
  }
  return (
    <button className='border-2 border-slate-900 rounded-xl px-2 py-1 md:px-5 md:py-3 bg-pokemon-main-blue hover:bg-pokemon-main-navy transition-colors duration-300 w-full' onClick={(e) => {
      e.preventDefault()
      addToLocalStorage()
    }}>Add to collection</button>
  )
}
