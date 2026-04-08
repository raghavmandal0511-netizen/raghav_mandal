import { useState, useEffect } from "react"
import { FaCode, FaPlus, FaMinus } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

const projects = [
    {
        title: "Krishi CoBot (eYRC 2025–26)",
        desc: "Built an autonomous agricultural robotic system using ROS2. Implemented fruit detection using OpenCV, TF-based localization, and UR5 manipulation using Cartesian servoing. Focused on real-world multi-system integration.",
        tech: ["ROS2", "OpenCV", "Python", "UR5", "TF", "Gazebo"],
        link: "#",
    },
    {
        title: "InterviewIQ – AI Interview Platform",
        desc: "AI-powered interview practice platform with categorized questions, response recording, and feedback system to improve communication and confidence.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Clerk"],
        link: "https://ai-interviewer-sable.vercel.app/",
    },
    {
        title: "FarmFresh AI (Runner-Up 🏆)",
        desc: "Hackathon project enabling farmers to directly sell products to buyers. Worked as frontend developer using Next.js, building scalable UI and user interaction flows.",
        tech: ["Next.js", "React", "Tailwind", "Clerk"],
        link: "https://github.com/amanchauhan-dev/farm-fresh-ai-frontend",
    }
]

function Projects() {
    const [limit, setLimit] = useState(2)

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        })
    }, [])

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#000104]  text-white">
            <div className="max-w-5xl mx-auto px-4">
                {/* from-[#0f172a] via-[#020617] to-[#000104] */}
                {/* Title */}
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide"
                    data-aos="fade-up"
                >
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                {/* Timeline */}
                <div className="relative border-l border-gray-700">

                    {projects.slice(0, limit).map((project, i) => (
                        <div
                            key={i}
                            className="mb-10 ml-6"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >

                            {/* Icon */}
                            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-cyan-500 rounded-full">
                                <FaCode className="text-black" />
                            </span>

                            {/* Card */}
                            <div className="bg-[#020617] p-5 rounded-xl border border-gray-700 hover:border-cyan-400 transition hover:shadow-lg hover:shadow-cyan-500/10">

                                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-3 leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* Tech */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-sm px-2 py-1 bg-gray-800 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:underline"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Buttons */}
                    <div className="flex justify-center mt-6 gap-4">

                        {limit < projects.length && (
                            <button
                                onClick={() => setLimit(limit + 1)}
                                className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-400 transition"
                            >
                                <FaPlus />
                            </button>
                        )}

                        {limit > 2 && (
                            <button
                                onClick={() => setLimit(2)}
                                className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-400 transition"
                            >
                                <FaMinus />
                            </button>
                        )}

                    </div>
                </div>

                {/* 🔥 Coming Soon Message */}
                <div
                    className="text-center mt-12 text-gray-400"
                    data-aos="fade-up"
                >
                    <p className="text-lg">
                        🚀 More exciting projects coming soon...
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Projects