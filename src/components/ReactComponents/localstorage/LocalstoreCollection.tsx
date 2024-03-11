import { useStore } from '@nanostores/react'
import { pokemonCollection } from '../../../store/pokemonCollection'




export default function LocalstoreCollection() {
  const pokemonsFromStore = useStore(pokemonCollection)
  const deletePokemonFromCollection = (indexDelete:number)=>{
    if(pokemonsFromStore.length === 0) return
    const filteredArray = pokemonsFromStore.filter((item, index) => index !== indexDelete);
    console.log(filteredArray);
    return pokemonCollection.set(filteredArray)
  }
  if (pokemonsFromStore.length === 0) {
    return (
      <section className='p-1 w-full h-full flex flex-col'>
        <a className='px-2 py-1 md:px-3 md:py-2 xl:px-8 xl:py-5 bg-pokemon-main-red border border-slate-600 rounded-md hover:bg-pokemon-main-red/80 transition-colors duration-200 text-xs md:text-base xl:text-2xl flex justify-center items-center w-fit' href='/'><svg className="w-6 h-6 2xl:w-10 2xl:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Back</a>
        <p className='text-center my-auto'>Currently no collection, try adding some Pokemon after searching for them</p>
      </section>)
  }
  return (
    <section className='p-1 w-full h-full flex flex-col'>
      <a className='px-2 py-1 md:px-3 md:py-2 xl:px-8 xl:py-5 bg-pokemon-main-red border border-slate-600 rounded-md hover:bg-pokemon-main-red/80 transition-colors duration-200 text-xs md:text-base xl:text-2xl flex justify-center items-center w-fit' href='/'><svg className="w-6 h-6 2xl:w-10 2xl:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Back</a>
      <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-3 pt-2'>
        {pokemonsFromStore.map((el,index )=> {
          return (
            <div key={el.id} className="border-2 border-slate-900 drop-shadow-md flex flex-col rounded-lg h-fit p-4 items-center justify-center gap-2 bg-slate-900/10">
              <p className="text-lg md:text-2xl text-slate-600">{el.name}</p>
              <img src={el.sprites.front_default} alt={el.name} />
              <ul>
                {el.stats.map((stat, index) => { return <li className='text-sm md:text-base' key={index}>{stat.stat.name}: {stat.base_stat}</li> })}
              </ul>
              <button className='px-2 py-1 md:px-3 md:py-2 xl:px-8 xl:py-5 bg-pokemon-main-red border border-slate-600 rounded-md hover:bg-pokemon-main-red/80 transition-colors duration-200 text-xs md:text-base xl:text-2xl flex justify-center items-center w-fit' onClick={(e)=>{
                e.preventDefault()
                deletePokemonFromCollection(index)
              }}>Delete from collection</button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

