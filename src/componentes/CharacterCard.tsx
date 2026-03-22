import { useNavigate } from "react-router-dom"

type Character = {
  id: number
  name: string
  image: string
  status: string
  species: string
}

type Props = {
  character: Character
  isGrid: boolean
}

export default function CharacterCard({ character, isGrid }: Props) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/detalhes/${character.id}`)}
      style={{
        border:"1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        display: isGrid ?"block" : "flex",
        alignItems: isGrid ? "unset" : "center",
        gap:isGrid ? "0":"16px"
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{ width:isGrid ? "100%" : "80px", height: isGrid ? "auto": "80px",objectFit: "cover" }}
      />
      <div style={{ padding: "12px"}}>
        <p><strong>Nome:</strong> {character.name}</p>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Espécie:</strong> {character.species}</p>
      </div>
    </div>
  )
}
