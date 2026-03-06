// importações
import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";

function App() {

const { valorInput, onChange, onSubmit, gifs, EstaCarregando } = useSearchGifs()

// JSX
return (
    <div className="App">

      <Buscador
        onSubmit={onSubmit}
        valorInput={valorInput}
        onChange={onChange}
      />

    {
      EstaCarregando ?
      (<h2>Carregando...</h2>) :

        (  
        <GridGifs
          gifs={gifs}
        />
        )
    }

      </div>
  )
}

export default App
