import { useContext } from "react";
import LyricsContext from "../context/LyricsProvider";

export function useLyrics () {
    return useContext( LyricsContext );
}
