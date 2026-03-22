import CharacterCard from "./CharacterCard"

type Character = {
  id: number
  name: string
  image: string
  status: string
  species: string
}

type Props = {
  characters: Character[]
  isGrid: boolean
}

export default function CharacterList({characters, isGrid }: Props) {
  if (characters.length === 0) {
    return <p style={{ textAlign: "center" }}>Nenhum personagem encontrado.</p>//o length vai retornar o numero de itens se for 0 vai achar ninguem
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isGrid ? "repeat(4, 1fr)" : "1fr",
      gap: "16px",
      padding: "0 24px 24px"
    }}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} isGrid={isGrid} />
      ))}
    </div>
  )
}