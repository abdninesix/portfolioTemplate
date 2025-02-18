import { FaLinkedin } from "react-icons/fa"
import logo from "../assets/a.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3">
        <div className="mx-8 flex flex-shrink-0 items-center w-16 h-16 rounded-2xl bg-indigo-800">
            <a href="/" aria-label="Home">
                <img className="m-1.5" width={50} height={50} src={logo} alt="Logo"/>
            </a>
        </div>

        <div className="mx-12 4flex items-center justify-center gap-4 text-2xl">
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <FaLinkedin className="text-4xl text-blue-900"/>
            </a>
        </div>
        
    </nav>
  )
}

export default Navbar