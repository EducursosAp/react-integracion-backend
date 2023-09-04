import { useState } from "react"

const API_URL = 'https://meowfacts.herokuapp.com/'

//fetch -> Asincrona 

export function CatFactGenerator(){

    const [phraseState, setPhraseState] = useState('')

    async function handleClick(){

        const response = await fetch(API_URL)

        if(response.ok){
            const data = await response.json()
            setPhraseState(data.data[0])
        }
    }
    return <>
        <button onClick={handleClick}>Generar Nueva frase</button>

        <p style={{backgroundColor: 'blueviolet', color: 'white'}}>{phraseState}</p>
    </>
}
