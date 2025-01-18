import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {

    const {counter, decrement, incremet} = useCounter( 1 );
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
        <h1>Informacion de pokémons</h1>
        <hr />

        {   isLoading 
            ? <LoadingMessage /> 
            : (
                <PokemonCard 
                id={data?.id} 
                name={data?.name}
                sprites={ [
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.front_shiny,
                ] }
            />)
        }



        { 
            counter !== 1 && <button 
                                className='btn btn-primary mt-2' 
                                onClick={ () => decrement() }
                            >
                                Anterior
                            </button>
        }

        <button 
            className='btn btn-primary mt-2' 
            onClick={ () => incremet() }
        >   
            Siguiente
        </button>


    </>
  )
}
