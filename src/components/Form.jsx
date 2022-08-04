import { useState } from 'react';
import { AiOutlineUser, AiOutlineAudio, AiOutlineSearch } from 'react-icons/ai';
import { useLyrics } from '../hooks/useLyrics';



export function Form ()  {

    const { setAlert, searchLyric } = useLyrics();

    const [ search, setSearch ] = useState({
        artist: '',
        song:   '',
    });

    const handleSubmit = e => {
        e.preventDefault();

        if ( Object.values( search ).includes('') ) {
            setAlert('Ingresa el nombre de un artista y una canción');
            return;
        }
        
        searchLyric( search );
    }
    
    return (
        <form onSubmit={ handleSubmit }>

            <legend> Busca las letras de tus canciones favoritas </legend>

            <div className="form-grid">

                <div>
                    <label> <AiOutlineUser/> Artista  </label>
                    <input  type='text'
                            name='artist'
                            placeholder='Nombre Artista'
                            value={ search.artist }
                            onChange={ e => setSearch({
                                ...search,
                                [ e.target.name ]: e.target.value
                            }) }/>
                </div>

                <div>
                    <label> <AiOutlineAudio/> Canción  </label>
                    <input  type='text'
                            name='song'
                            placeholder='Nombre Canción'
                            value={ search.song }
                            onChange={ e => setSearch({
                                ...search,
                                [ e.target.name ]: e.target.value
                            }) }/>
                </div>

                <button type='submit'> Buscar </button>

            </div>

        </form>
    )
}