import { ReactTyped } from "react-typed"
import heroImg from "../assets/images/hero1.jpg"

function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-black to-[#020617] text-white"
        >
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <div className="flex flex-col">

                    {/* 🔹 TEXT */}
                    <div className="order-1">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Raghav Mandal
                        </h1>

                        <p className="text-xl text-gray-300 mb-6">
                            I'm a{" "}
                            <span className="text-cyan-400 font-semibold">
                                <ReactTyped
                                    strings={[
                                        "Software Engineer",
                                        "Robotics Engineer",
                                        "kabddi player (District Level)"
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={50}
                                    loop
                                />
                            </span>
                        </p>
                    </div>

                    {/* 🔹 IMAGE (mobile: 2nd, desktop: right side anyway) */}
                    <div className="order-2 md:hidden flex justify-center mb-6">
                        <img
                            src={heroImg}
                            alt="hero"
                            className="w-2/3 rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* 🔹 SOCIAL + BUTTON */}
                    <div className="order-3">
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="hover:text-blue-400">GitHub</a>
                            <a href="#" className="hover:text-blue-400">LinkedIn</a>
                            <a href="#" className="hover:text-blue-400">Instagram</a>
                            <a href="#" className="hover:text-blue-400">Email</a>
                        </div>

                        <a
                            href="#"
                            className=" center md:inline-block px-6 py-3 border border-gray-400 rounded-lg hover:bg-blue-500 hover:border-blue-500 transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE (desktop only) */}
                <div className="hidden md:flex justify-center">
                    <img
                        src={heroImg}
                        alt="hero"
                        className="w-2/3 rounded-2xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero