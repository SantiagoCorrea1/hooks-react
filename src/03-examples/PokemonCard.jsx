import React, {  useLayoutEffect, useRef, useState } from 'react'
import PropType from 'prop-types'

export const PokemonCard = ( {id, name, sprites} ) => {

    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

    const h2Ref = useRef();

    useLayoutEffect(() => {
        
        const {height, width} = h2Ref.current.getBoundingClientRect();
        setBoxSize({
            height: height, 
            width: width
        });
        
    }, [name]);


  return (
    <section style={{ height: 200, display: 'flex', flexDirection: 'row' }}>
        <h2 ref={h2Ref} className='text-capitalize'>
            #{ id } - { name }
        </h2>

        {/* imagenes */}
        <div>
            {
                sprites.map((sprite, index) => 
                    <img key={index} src={sprite} alt={name} />
                )
            }
        </div>
        <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  )
}

PokemonCard.propType = {
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    sprites: PropType.array
}
