import { Link } from "react-router-dom"
export const Navbar = (props) => {

  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  return (
    <div className="navbar bg-zinc-800">
      <div className="navbar-start">
        <a href="" className="navbar-item text-indigo-600 font-bold">BLOGS</a>
      </div>
      <div className="navbar-center">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">About</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item font-bold">{props.username}</a>
        <Link to="/" onClick={handleLogout} className="navbar-item outline outline-indigo-700 hover:bg-indigo-700">Log out</Link>
      </div>
    </div>
  )
}
