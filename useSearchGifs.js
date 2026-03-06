// Resultado da refatoração do código do App.jsx, extraindo a lógica de busca de gifs para um hook personalizado chamado useSearchGifs.js
import { useState } from 'react';

export const useSearchGifs = () => {
    
const [valorInput, setValorInput] = useState('')
const [gifs, setGifs] = useState([]);
const [EstaCarregando, setEstaCarregando] = useState(false);

const onChange = (evento) => {
  const valor= evento.target.value;
  setValorInput(valor)
}

const getGifs = async () => {
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=Up4SsEYFNZwg5MVufLoORdc1cmwkqvLx&q=' + valorInput;
  setEstaCarregando(true);
  await new Promise(resolve =>{
     setTimeout(() =>{
        resolve(true)
     },1000);
  })
  const response = await fetch(url);
  const data = await response.json();
  setEstaCarregando(false);
  console.log(data);
  return data.data;
}

const onSubmit = async (evento) => {
  evento.preventDefault();
  const gifs = await getGifs(valorInput);
  setGifs(gifs)

}


    return {
        onSubmit,
        valorInput,
        onChange,
        gifs,
        EstaCarregando
    }

}