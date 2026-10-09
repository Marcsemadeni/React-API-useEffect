import type { ApiRecord } from './ApiRecord'

type PokemonCardProps = {
  pokemon: ApiRecord
  currentRating: number
}

function PokemonCard({ pokemon, currentRating }: PokemonCardProps) {
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base experience: {pokemon.baseExperience}</p>
      <p>Health: {currentRating}</p>
    </div>
  )
}

export default PokemonCard
