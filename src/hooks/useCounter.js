import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const incremet = ( value = 1) => {
        setCounter(counter + value)
    }

    const decrement = (value = 1) => {
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter( initialValue )
    }


    return {
        counter,
        incremet,
        decrement,
        reset
    }
}