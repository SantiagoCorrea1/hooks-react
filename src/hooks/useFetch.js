import { useEffect, useState } from "react"

const localCache = {};

export const useFetch = (  url ) => {
    //useState
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    //useEffect
    useEffect(() => {
        getFetch();
        
    }, [url]);

    //setLoading to true
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });
    }

    //function to get the data
    const getFetch = async() => {

        //if is in cache get from there
        if ( localCache[url] ) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        //call setLoading
        setLoadingState();
        //get the resp
        const resp = await fetch( url );


        //sleep
        await new Promise( resolve => setTimeout(resolve, 1500));

        //set the data if response is correct
        if (!resp.ok) {
            setState({
                data:null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        //manejo en caché
        localCache[url] = data;


    }

    //return
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

