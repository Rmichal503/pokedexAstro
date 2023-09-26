import React, { useState } from 'react'

export default function SearchComponent() {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className='p-4 w-fit flex flex-col font-mono justify-center items-center border border-slate-600 rounded-md space-y-3 bg-pokemon-main-gold'>
        <p className='text-2xl font-bold'>Search Pokemon</p>
        <input className='p-1 bg-pokemon-main-screen text-slate-900 text-center placeholder:text-slate-900 placeholder:text-xs placeholder:text-center border border-slate-600 w-56 rounded-md' placeholder='Type id or name of pokemon' type='text' onChange={(e)=>{
            e.preventDefault()
            setInputValue(e.target.value)
        }}/>
        <a className='px-2 py-1 bg-pokemon-main-red border border-slate-600 rounded-md hover:bg-pokemon-main-red/80 transition-colors duration-200' href={`pokemon/${inputValue}`}>Search</a>
    </div>
  )
}
