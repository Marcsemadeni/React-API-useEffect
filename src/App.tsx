import { useEffect, useState } from 'react'
import type { ApiRecord } from './ApiRecord'
import PokemonCard from './PokemonCard'
import './App.css'

function App() {
  const [subject, setSubject] = useState<ApiRecord | null>(null)
  const [currentRating, setCurrentRating] = useState(100)

  async function refreshSubject() {
    const id = Math.floor(Math.random() * 1000) + 1
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    setSubject({
      name: data.name,
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      baseExperience: data.base_experience,
    })
    setCurrentRating(100)
  }

  useEffect(() => {
    refreshSubject()
  }, [])

  useEffect(() => {
    console.log("Value synchronized")
    if (currentRating === 0) {
      refreshSubject()
    }
  }, [currentRating])

  function takeDamage() {
    setCurrentRating(currentRating - 25)
  }

  return (
    <div>
      <h1>Pokémon</h1>
      {subject === null ? (
        <p>Loading...</p>
      ) : (
        <PokemonCard pokemon={subject} currentRating={currentRating} />
      )}
      <button onClick={takeDamage}>Take Damage</button>
    </div>
  )
}

export default App
