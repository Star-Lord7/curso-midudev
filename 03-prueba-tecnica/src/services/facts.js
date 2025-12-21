
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    // const [factError, setFactError] = useState(); //Estado para el error del hecho

    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)

    //Manejamos el error si la respuesta no es OK
    if (!res.ok) throw new Error('Error al obtener el hecho');

    const data = await res.json()
    //Obtenemos el hecho de la respuesta
    const { fact } = data
    return fact //Retornamos el hecho obtenido desde la API
}