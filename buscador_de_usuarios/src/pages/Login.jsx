import { useState } from "react"
import { useAuth } from "../context/AuthContext.jsx"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading, error } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <form onSubmit={handleSubmit} 
            className="flex flex-col gap-4 max-w-sm w-full bg-purple-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-purple-700">Inicio de Sesion Lindo</h2>

        <label className="font-semibold text-gray-700" htmlFor="username">Nombre:</label>
        <input 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="border border-purple-400 rounded p-2 focus:ring-2 focus:ring-purple-500 outline-none" 
          type="text" 
          id="username" 
        />

        <label className="font-semibold text-gray-700" htmlFor="password">Contraseña:</label>
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border border-purple-400 rounded p-2 focus:ring-2 focus:ring-purple-500 outline-none" 
          type="password" 
          id="password" 
        />

        <button 
          className="bg-purple-600 hover:bg-purple-700 transition text-purple rounded p-2 font-semibold" 
          type="submit"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Login"}
        </button>

        {loading && (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-600 text-center p-2 rounded-lg">
            {error}
          </div>
        )}
      </form>
    </div>
  )
}
