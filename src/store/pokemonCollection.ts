import { atom } from 'nanostores'
import type Pokemon from '../types/pokeApi'


export const pokemonCollection = atom<Pokemon[]>([])
