import React, { useState } from 'react'

export default function SearchComponent() {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className='border-2 border-slate-900  flex flex-col items-center justify-center rounded-md px-4 py-6 space-y-3 w-fit'>
        <p className='text-xl md:text-3xl font-bold'>Search Pokemon</p>
        <input className='p-1 bg-pokemon-main-screen text-slate-900 text-center placeholder:text-slate-900 placeholder:text-xs md:placeholder:text-base placeholder:text-center border border-slate-600 w-56 md:w-2/3 rounded-md' placeholder='Type id or name' type='text' onChange={(e)=>{
            e.preventDefault()
            setInputValue(e.target.value.toLowerCase())
        }}/>
        <a className='px-2 py-1 bg-pokemon-main-red border border-slate-600 rounded-md hover:bg-pokemon-main-red/80 transition-colors duration-200 text-xs md:text-base' href={`pokemon/${inputValue}`}>Search</a>
    </div>
  )
}
