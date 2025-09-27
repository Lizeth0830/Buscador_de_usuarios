import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const login = (username, password) => {
    setLoading(true)
    setError("")

    setTimeout(() => { // simulamos validación con delay
      if (username === "Santiago" && password === "160804") {
        setUser({ username: "Santiago" })
        navigate("/usuarios")
      } else {
        setError("Contraseña inválida ❌")
      }
      setLoading(false)
    }, 1500)
  }

  const logout = () => {
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

