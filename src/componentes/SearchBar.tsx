type Props = {
   searchValue: string
    onSearchChange: (value: string) => void
      onSearchSubmit: () => void
}

export default function SearchBar({ searchValue, onSearchChange, onSearchSubmit }: Props) { //funçao que diz que esta digitando, avisa o app.tsx que esta digitando algo, avisa o enter 
  function handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearchSubmit()
    }
  }

  return (
    <div style={{ display:"flex", justifyContent: "center", gap: "8px", padding: "24px" }}>
      <input
        type="text"
          placeholder="Buscar personagem..." 
            value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                  style={{ padding: "8px 16px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc", width: "300px" }}
      />
      <button
        onClick={onSearchSubmit}
        style={{ padding: "8px 16px", fontSize: "16px", borderRadius: "8px", background: "#00b4d8", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Buscar
      </button>
    </div>
  )
}