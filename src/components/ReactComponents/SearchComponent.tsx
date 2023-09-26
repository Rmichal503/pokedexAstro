import React, { useState } from 'react'

export default function SearchComponent() {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className='p-4 w-fit flex flex-col justify-center items-center border border-slate-400 rounded-md space-y-3'>
        <input className='p-1 bg-slate-200 border border-slate-400 w-56 rounded-md' placeholder='Type id or name of pokemon' type='text' onChange={(e)=>{
            e.preventDefault()
            setInputValue(e.target.value)
        }}/>
        <a className='px-2 py-1 bg-slate-200 border border-slate-400 rounded-md hover:bg-slate-300 transition-colors duration-200' href={`pokemon/${inputValue}`}>Search</a>
    </div>
  )
}
