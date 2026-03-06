export const Buscador = ( {onSubmit, valorInput, onChange} ) => {
  return (
        <form className='buscador-input' onSubmit={onSubmit}>
        <input className="buscador" value={valorInput} onChange={onChange}/>
      </form>
  )
}