import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { FaTrophy, FaMedal, FaRobot, FaCode } from "react-icons/fa"

const achievements = [
    {
        icon: <FaTrophy />,
        title: "Hackathon Winner 🏆",
        description: "Won 1st place in Python Code 2025 hackathon by building innovative software solutions.",
    },
    {
        icon: <FaMedal />,
        title: "CodeWave 1.0 Runner-Up 🥈",
        description: "Secured Runner-Up position in CodeWave hackathon (SSEC Bhavnagar) with team-based development.",
    },
    {
        icon: <FaRobot />,
        title: "Top 5 – eYRC 2025–26 🤖",
        description: "Ranked in Top 5 nationally in e-Yantra Robotics Competition with KRISHI COBOT system.",
    },
    {
        icon: <FaCode />,
        title: "Robotics System Development",
        description: "Built real-world robotic system using ROS2, OpenCV, and UR5 manipulation for automation tasks.",
    },
]

function Achievements() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section id="achievements" className="py-20  scroll-mt-24  bg-gradient-to-br from-[#000104] via-[#020617] to-[#0f172a] text-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* 🔹 Title */}
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide"
                    data-aos="fade-up"
                >
                    My <span className="text-cyan-400">Achievements</span>
                </h2>

                {/* 🔹 Grid */}
                <div className="grid sm:grid-cols-2 gap-8">

                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-400 transition transform hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="text-3xl text-cyan-400 mb-4">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

                {/* 🔥 Bottom Line */}
                <div
                    className="text-center mt-12 text-gray-400"
                    data-aos="fade-up"
                >
                    <p className="text-lg">
                        🚀 Continuously learning, building, and competing...
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Achievements