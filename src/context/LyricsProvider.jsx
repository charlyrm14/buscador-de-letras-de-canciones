import { useState, createContext } from "react";
import axios from 'axios';

const LyricsContext     = createContext();

const LyricsProvider    = ( { children } ) => {

    const [ alert, setAlert ]       = useState('');
    const [ lyric, setLyric ]       = useState('');
    const [ loading, setLoading ]   = useState(false);

    const searchLyric = async ( search ) => {

        setLoading(true);

        try {

            const { artist, song }  = search;
            const urlAPI            = `https://api.lyrics.ovh/v1/${ artist }/${ song }`;
            const { data }          = await axios( urlAPI );

            setLyric( data.lyrics );
            setAlert('');
            
        } catch ( error ) {
            setAlert('No pudimos encontrar la canción que estas buscando :( ');
        }

        setLoading(false);
        
    }

    return (
        <LyricsContext.Provider
            value={{
                alert,
                setAlert,
                searchLyric,
                lyric,
                loading,
            }}>
                { children }
        </LyricsContext.Provider>
    )
}

export {
    LyricsProvider
}

export default LyricsContext;