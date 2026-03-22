import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import SearchBar from "./componentes/SearchBar"
import CharacterList from "./componentes/CharacterList"
import CharacterDetails from "./componentes/CharacterDetails"

type Character = {
  id: number
  name: string
  image: string
  status: string
  species: string
}

export default function App() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [searchValue, setSearchValue] = useState("")
  const [isGrid, setIsGrid] = useState(true)

  async function fetchAllCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    setAllCharacters(data.results)
    setFilteredCharacters(data.results)
  }

  function filterCharactersByName() {
    const result = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredCharacters(result)
  }

  function handleSearchChange(value: string) {
    setSearchValue(value)
    const result = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredCharacters(result)
  }

  useEffect(() => {
    fetchAllCharacters()
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  searchValue={searchValue}
                  onSearchChange={handleSearchChange}
                  onSearchSubmit={filterCharactersByName}
                />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <button
                    onClick={() => setIsGrid(!isGrid)}
                    style={{ padding: "8px 24px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc", cursor: "pointer" }}
                  >
                    {isGrid ? "Mudar para Lista" : "Mudar para Grade"}
                  </button>
                </div>
                <CharacterList characters={filteredCharacters} isGrid={isGrid} />
              </>
            }
          />
          <Route path="/detalhes/:id" element={<CharacterDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}