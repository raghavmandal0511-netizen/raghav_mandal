import { useState, useEffect } from "react"
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa"

const navLinks = [
    { name: "Home", id: "hero", icon: <FaHome /> },
    { name: "About", id: "about", icon: <FaUser /> },
    { name: "Skills", id: "skills", icon: <FaCode /> },
    { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
    { name: "Contact", id: "contact", icon: <FaEnvelope /> },
]

function Navbar() {
    const [active, setActive] = useState("hero")

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY

            navLinks.forEach((link) => {
                const section = document.getElementById(link.id)
                if (section) {
                    const top = section.offsetTop - 100
                    const height = section.offsetHeight

                    if (scrollY >= top && scrollY < top + height) {
                        setActive(link.id)
                    }
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="fixed  w-full bg-black/60 backdrop-blur-md text-white z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

                {/* Logo */}
                <h1 className="text-xl font-bold">RM</h1>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className={`flex items-center gap-2 hover:text-cyan-400 transition ${active === link.id ? "text-cyan-400" : ""
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar