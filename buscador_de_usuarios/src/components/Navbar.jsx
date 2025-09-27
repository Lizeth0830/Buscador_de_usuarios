import { useAuth } from "../context/AuthContext.jsx"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="flex justify-between items-center p-4 bg-pink-200 shadow-md">
      <h1 className="text-xl font-bold text-pink-700">Mi App</h1>
      {user && (
        <button 
          onClick={logout} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}
    </nav>
  )
}