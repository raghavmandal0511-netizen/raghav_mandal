import { useState, useEffect } from "react"

const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
]

function Navbar() {
    const [active, setActive] = useState("hero")
    const [open, setOpen] = useState(false)

    // 🔥 detect active section on scroll
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

    // 🔥 smooth scroll
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
            setOpen(false)
        }
    }

    return (
        <nav className="fixed top-0 w-full  text-white shadow-md bg-[#020617]">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

                {/* Logo */}
                <h1 className="text-xl font-bold">Raghav Mandal</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className={`hover:text-blue-400 ${active === link.id ? "text-cyan-400" : ""
                                    }`}
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-black to-[#020617] px-4 pb-4 space-y-3">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </nav>

    )
}

export default Navbar