import { useLyrics } from "../hooks/useLyrics"
import { Alert } from "./Alert";
import { Form } from "./Form"
import { Lyric } from "./Lyric";
import { Spinner } from "./Spinner";


export function AppLyrics () {

    const { alert, lyric, loading } = useLyrics();

    return (
       <>
            <header> Busqueda de letras de canciones </header>

            <Form/>

            <main>
                { alert ? <Alert message={ alert } /> : 
                    lyric ? <Lyric/> :
                    loading ? <Spinner/> : 
                    <p className="text-center"> Busca letras de tus artistas favoritos </p> }
            </main>
       </>
    )

}