import { useState, useEffect } from 'react';

// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

export function useCatImage({ fact }){ //Recibimos el hecho como parámetro
  const [imageUrl, setImageUrl] = useState(); //Estado para la URL de la imagen

  //El segundo "useEffect" recupera la imagen cada vez que tenemos un nuevo hecho
  useEffect(() => {
    if(!fact) return //Si no hay hecho, no hacemos nada

    /**
     * Obtenemos las 3 primeras palabras del hecho usando "split"
     * donde le indicamos que divida el string en cada espacio
     */
    const threeFirstWords = fact.split(' ', 3).join(' ')
    // console.log(threeFirstWords)

    // Usamos la segunda API para obtener la imagen del gato con las palabras obtenidas
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      .then(response => {
        //Obtenemos el campo "url" de la respuesta
        const { url } = response
        //Actualizamos el estado con la URL de la imagen
        setImageUrl(url)
      })
  }, [fact]) //El useEffect depende del hecho

  //Retornamos la URL de la imagen
  return { imageUrl }
}