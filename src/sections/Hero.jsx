import { ReactTyped } from "react-typed"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"

import hero1 from "../assets/images/hero1.jpg"
import hero2 from "../assets/images/hero2.jpg"
import hero3 from "../assets/images/hero3.jpg"

function Hero() {

    const images = [hero1, hero2, hero3]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-black to-[#020617] text-white"
        >
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">

                    {/* TEXT */}
                    <div data-aos="fade-up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Raghav Mandal
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-6">
                            I'm a{" "}
                            <span className="text-cyan-400 font-semibold">
                                <ReactTyped
                                    strings={[
                                        "Software Engineer",
                                        "Robotics Engineer",
                                        "Kabaddi Player (District Level)"
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={50}
                                    loop
                                />
                            </span>
                        </p>
                    </div>

                    {/* MOBILE IMAGE */}
                    <div
                        className="md:hidden flex justify-center mb-6"
                        data-aos="zoom-in"
                    >
                        <img
                            src={hero1}
                            alt="hero"
                            className="w-2/3 rounded-2xl border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                        />
                    </div>

                    {/* SOCIAL */}
                    <div
                        className="flex gap-5 mb-6 text-xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <a href="https://github.com/raghavmandal0511-netizen" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/raghav-mandal-4b678b34a" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.instagram.com/_.raghav.01" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition">
                            <FaInstagram />
                        </a>

                        <a href="https://x.com/Raghav_Mandal_" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition">
                            <FaTwitter />
                        </a>

                        <a href="mailto:raghavmandal0511@gmail.com" className="hover:text-cyan-400 hover:scale-110 transition">
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* BUTTON */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition font-semibold shadow-lg"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* DESKTOP STACK CAROUSEL */}
                <div className="hidden md:flex justify-center relative w-[480px] h-[520px]" data-aos="zoom-in">

                    {images.map((img, i) => {
                        const position = (i - index + images.length) % images.length

                        return (
                            <img
                                key={i}
                                src={img}
                                alt="hero"
                                className={`absolute w-full h-full object-cover rounded-2xl border-4 border-cyan-400 transition-all duration-1000
                                ${position === 0
                                        ? "z-30 scale-100 opacity-100 translate-x-0"
                                        : position === 1
                                            ? "z-20 scale-95 opacity-70 translate-x-6"
                                            : "z-10 scale-90 opacity-40 translate-x-12"
                                    }
                                `}
                            />
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default Hero