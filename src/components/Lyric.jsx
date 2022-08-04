import { useLyrics } from "../hooks/useLyrics"
import { Spinner } from "./Spinner";

export function Lyric () {

    const { lyric, loading } = useLyrics();

    return (
        loading ? <Spinner/> : <div className="lyric"> { lyric } </div>
    )
}