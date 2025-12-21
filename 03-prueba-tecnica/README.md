# Prueba técnica para Juniors y Trainees de React en Live Coding 🐱 

Este ejercicio consiste en una pequeña aplicación desarrollada con React que consume dos APIs externas, utilizando dos hooks useEffect para manejar efectos secundarios y el flujo de datos.

📌 Descripción del funcionamiento

Al cargar la aplicación, se realiza un fetch a la API Cat Facts para obtener un hecho aleatorio sobre gatos.
Del texto recibido, se extraen las tres primeras palabras. Luego se ejecuta un segundo useEffect que realiza un nuevo fetch a la API Cataas, generando una imagen de un gato con dichas palabras mostradas como texto sobre la imagen.

🔄 Uso de useEffect

- El primero se ejecuta al montar el componente y se encarga de obtener el hecho aleatorio del gato.

    Facts Random: https://catfact.ninja/fact

- El segundo se ejecuta cuando las palabras obtenidas cambian y se utiliza para construir dinámicamente la URL de la imagen del gato.

    Imagen random: https://cataas.com/cat/says/hello

    Enpoint para usar `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

🎯 Objetivo del ejercicio

- Hooks de React (useEffect, useState)

- Consumo de APIs con fetch

- Manejo de dependencias entre efectos

- Renderizado dinámico de contenido

🌐 DEMO: https://app-gatos-react.netlify.app/