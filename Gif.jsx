import { motion, scale, useInView } from "motion/react"
import { useRef } from "react";

// Variantes de animação para os gifs, definindo a opacidade e escala inicial, e a animação de entrada com um delay baseado no índice do gif
const variantes = {
    inicial: {
        opacity: 0,
        scale: 0
    },
    
    animacao: ({ index }) => ({
        opacity: 1, 
        scale: 1,
        transition: {
            delay: index*.1
        }
    })
}


export const Gif = ({ gif, index }) => {

    const ref = useRef(null)
    const estaVisivel = useInView(ref, { once: true })

    return (
        <motion.img
        ref={ref}
        initial="inicial"
        animate={estaVisivel ? "animacao" : "inicial"}
        variants={variantes}
        custom={{ index }}
        whileHover={{
            scale: 1.1
        }}
        className="gif"
        key={gif.id}
        src ={gif.images.original.url}
        alt={gif.title}/>
    )
}