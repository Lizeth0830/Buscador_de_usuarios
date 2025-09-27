import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"
import SearchInput from "../components/SearchInput"

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [allUsuarios, setAllUsuarios] = useState([])

  // Cargar usuarios desde db.json (json-server)
  useEffect(() => {
    fetch("http://localhost:5000/usuarios")
      .then(res => res.json())
      .then(data => {
        setUsuarios(data)
        setAllUsuarios(data)
      })
      .catch(err => console.error("Error cargando usuarios:", err))
  }, [])

  // Buscar usuarios
  const handleSearch = (query) => {
    const filtrados = allUsuarios.filter(u =>
      `${u.nombre} ${u.apellidos}`.toLowerCase().includes(query.toLowerCase())
    )
    setUsuarios(filtrados)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Usuarios</h2>

      <SearchInput onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {usuarios.length > 0 ? (
          usuarios.map(usuario => (
            <UserCard key={usuario.id} usuario={usuario} />
          ))
        ) : (
          <p className="text-gray-500">No se encontraron usuarios</p>
        )}
      </div>
    </div>
  )
}
