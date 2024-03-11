import React, { useState } from 'react'

export default function SearchComponent() {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className='border-2 xl:border-[4px] border-slate-900 bg-slate-900/10 flex flex-col items-center justify-center rounded-lg xl:rounded-xl px-4 py-6 md:px-6 md:py-8 2xl:px-8 2xl:py-10 space-y-3 xl:space-y-6 w-fit'>
        <p className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold'>Search Pokemon</p>
        <input className='p-1 md:px-3 md:py-2 xl:px-5 xl:py-3 2xl:px-8 2xl:py-5 bg-pokemon-main-screen text-slate-900 text-center xl:text-xl 2xl:text-2xl placeholder:text-slate-900 placeholder:text-xs md:placeholder:text-base 2xl:placeholder:text-2xl placeholder:text-center border border-slate-600 w-56 md:w-2/3 rounded-md' placeholder='Type id or name' type='text' onChange={(e)=>{
            e.preventDefault()
            setInputValue(e.target.value.toLowerCase())
        }}/>
        <a className='px-2 py-1 md:px-3 md:py-2 xl:px-8 xl:py-5 bg-pokemon-main-red border border-slate-600 rounded-md hover:bg-pokemon-main-red/80 transition-colors duration-200 text-xs md:text-base xl:text-2xl' href={`pokemon/${inputValue}`}>Search</a>
    </div>
  )
}
