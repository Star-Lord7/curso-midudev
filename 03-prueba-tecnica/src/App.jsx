import { useEffect, useState } from 'react'
import './App.css'

// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

export default function App(){
  //Inicializamos los estados para el hecho y la imagen
  const [fact, setFact] = useState(); //Estado para el hecho
  const [imageUrl, setImageUrl] = useState(); //Estado para la URL de la imagen
  const [factError, setFactError] = useState(); //Estado para el error del hecho

  //Usamos "useEffect" para hacer la peticion a la API y se renderice solo una vez
  //El primer "useEffect" recupera el hecho al cargar el componente
  useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if(!res.ok){ //Manejamos el error si la respuesta no es correcta
          setFactError('No se ha podido obtener el hecho')
        }
        return res.json()
      })
      .then(data => {
        //Obtenemos el hecho de la respuesta
        const { fact } = data
        //Actualizamos el estado con el hecho obtenido
        setFact(fact)
      })
  }, [])

  //El segundo "useEffect" recupera la imagen cada vez que tenemos un nuevo hecho
  useEffect(() => {
    if(!fact) return //Si no hay hecho, no hacemos nada

    /**
     * Obtenemos las 3 primeras palabras del hecho usando "split"
     * donde le indicamos que divida el string en cada espacio
     */
    const threeFirstWord = fact.split(' ', 3).join(' ')
    // console.log(threeFirstWord)

    // Usamos la segunda API para obtener la imagen del gato con la palabra obtenida
    fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
      .then(response => {
        //Obtenemos el campo "url" de la respuesta
        const { url } = response
        //Actualizamos el estado con la URL de la imagen
        setImageUrl(url)
      })
  }, [fact])

  return(
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the words: ${fact}`} />}
    </main>
  )
}