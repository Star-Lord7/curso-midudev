import { useState, useEffect } from 'react';
import { getRandomFact } from '../services/facts';

export function useCatFact() {
  const [fact, setFact] = useState(); //Estado para el hecho

  //Función para obtener un nuevo hecho y actualizar el estado
  const refreshRandomFact = () => {
    //Mandamos a llamar a la función que obtiene un hecho aleatorio desde el Hook "getRandomFact"
    getRandomFact().then(newFact => setFact(newFact)); //Actualizamos el estado con el nuevo hecho
  }

  //Usamos "useEffect" para hacer la peticion a la API y se renderice solo una vez
  //El primer "useEffect" recupera el hecho al cargar el componente
  useEffect(refreshRandomFact, []);

  //Retornamos el hecho del estado actualizado y la función para refrescarlo
  return { fact, refreshRandomFact };
}