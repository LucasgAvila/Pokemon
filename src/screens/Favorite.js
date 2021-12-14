import React, { useState,  useCallback } from 'react'
import { Text } from 'react-native'
import { useFocusEffect} from '@react-navigation/native'
import { getPokemonFavoriteApi  } from '../api/favorite'
import useAuth from '../hooks/useAuth'
import {getPokemonDetailsApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/NoLogged'

export default function Favorite() {
 const [pokemons, setPokemon] = useState([])
 const { auth } = useAuth();

 useFocusEffect(
    useCallback(() => {
        if(auth){
         (async () => {
             const response = await get.getPokemonFavoriteApi();
     
             const pokemonsArray = [];
           for await (const pokemon of response) {
             const pokemonDetails = await getPokemonDetailsApi(id);
     
              pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image:
                  pokemonDetails.sprites.other["official-artwork"].front_default,
              });
           }
     
           setPokemon(pokemonsArray)
         })();
        }
      }, [auth]) 
 )

 
 
 return (
       !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />
    )
}
