import './App.css'
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';

export default function App(){
  //Usamos nuestros hooks personalizados
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  
  //Función para manejar el clic del botón y llamar a "refreshRandomFact"
  const handleClick = async () => {
    refreshRandomFact();
  }

  return(
    <main>
      <h1>App de Gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the words: ${fact}`} />}
    </main>
  )
}