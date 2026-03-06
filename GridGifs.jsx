import { Gif } from "./Gif"
// Componente GridGifs que recebe uma lista de gifs e renderiza cada um usando o componente Gif, passando o gif e seu índice como props
export const GridGifs = ({ gifs }) => {
    return (
        <>
            { 
                gifs.map((gif, index) => (
                    <Gif key={gif.id} gif={gif}/>
                    ))
            }
        </>
    )
}