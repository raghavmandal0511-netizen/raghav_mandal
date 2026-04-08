import { useState, useEffect } from "react"
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaTrophy } from "react-icons/fa"

const navLinks = [
    { name: "Home", id: "hero", icon: <FaHome /> },
    { name: "About", id: "about", icon: <FaUser /> },
    { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
    { name: "Skills", id: "skills", icon: <FaCode /> },
    { name: "Achievements", id: "achievements", icon: <FaTrophy /> },
    { name: "Contact", id: "contact", icon: <FaEnvelope /> },
]
function Navbar() {
    const [active, setActive] = useState("hero")

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 2

            navLinks.forEach((link) => {
                const section = document.getElementById(link.id)

                if (section) {
                    const top = section.offsetTop
                    const bottom = top + section.offsetHeight

                    if (scrollY >= top && scrollY < bottom) {
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
        <>
            {/* 🔥 DESKTOP SIDEBAR */}
            <nav className="hidden md:flex fixed top-1/2 left-4 -translate-y-1/2 z-50 flex-col gap-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl  shadow-lg">

                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
                        ${active === link.id
                                ? "bg-cyan-500 text-black"
                                : "text-white hover:text-cyan-400"
                            }`}
                    >
                        <span className="text-lg">{link.icon}</span>
                        <span className="hidden lg:inline">{link.name}</span>
                    </button>
                ))}

            </nav>

            {/* 📱 MOBILE BOTTOM NAV */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md border-t border-gray-700 z-50">

                <div className="flex justify-around py-2">

                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`flex flex-col items-center text-xs transition
                            ${active === link.id
                                    ? "text-cyan-400"
                                    : "text-gray-400"
                                }`}
                        >
                            <span className="text-lg">{link.icon}</span>
                            {link.name}
                        </button>
                    ))}

                </div>
            </nav>
        </>
    )
}

export default Navbar