import { useStore } from '@nanostores/react'
import { pokemonCollection } from '../../../store/pokemonCollection'




export default function LocalstoreCollection() {
  const pokemonsFromStore = useStore(pokemonCollection)
  return (
    <section className='p-1 w-full h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
      {pokemonsFromStore.map(el => {
        return (
          <div key={el.id} className="border-2 border-slate-900 drop-shadow-md flex flex-col rounded-lg h-fit p-4 items-center justify-center bg-slate-900/10">
            <p className="text-lg md:text-2xl text-slate-600">{el.name}</p>
            <img src={el.sprites.front_default} alt={el.name}/>
              <ul>
                {el.stats.map((stat,index) => { return <li className='text-sm md:text-base' key={index}>{stat.stat.name}: {stat.base_stat}</li> })}
              </ul>
          </div>
        )
      })}
    </section>
  )
}

