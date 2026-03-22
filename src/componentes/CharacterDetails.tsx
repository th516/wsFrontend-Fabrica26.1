import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"

type CharacterDetail = {
  id: number
  name: string
  image: string
  status: string
  species: string
  origin: {name: string }
  location: { name: string }
}

export default function CharacterDetails() {
  const { id } =useParams()
   
const navigate = useNavigate()
     const [character,setCharacter] =useState<CharacterDetail | null>(null)

  async function fetchCharacterById(){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
            setCharacter(data)
  }

  useEffect(() => {
    fetchCharacterById()
  }, [id])

  if (!character) {
    return <p style={{ textAlign:"center", padding: "40px" }}>Carregando...</p>  //se o personagem nao chega, mostre carregando, enquanto o fetch nao termina a busca
  }

  return (
    <div style={{ maxWidth: "500px",margin: "40px auto", padding: "24px", border: "1px solid #ccc", borderRadius: "12px" }}>
      <button
         onClick={() => navigate("/")}
             style={{    marginBottom: "16px", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", border: "1px solid #ccc" }}
      >
         voltar
      </button>
      <img src={character.image} alt={character.name} style={{ width: "100%", borderRadius: "8px" }} />
         <div style={{ marginTop: "16px" }}>
            <p><strong>ID:</strong>{character.id}</p>
             <p><strong>Nome:</strong> {character.name}</p>
                 <p><strong>Status:</strong> {character.status}</p>
                     <p><strong>Espécie:</strong>{character.species}</p>
                         <p><strong>Origem:</strong> {character.origin.name}</p>
                              <p><strong>Localização atual:</strong> {character.location.name}</p>
      </div>
    </div>
  )
}