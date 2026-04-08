import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import {
    FaPython, FaJava, FaJs, FaGitAlt, FaGithub, FaReact, FaNodeJs, FaEye, FaCss3Alt
} from "react-icons/fa"

import {
    SiC, SiMongodb, SiMysql, SiExpress, SiNextdotjs, SiTailwindcss,
    SiPhp, SiHtml5, SiRos,
} from "react-icons/si"

const skillCategories = [
    {
        title: "Robotics",
        skills: [
            { name: "ROS2", icon: <SiRos /> },
            { name: "OpenCV", icon: <FaEye /> },
            { name: "TF / Gazebo", icon: <SiRos /> },
            { name: "Robot Manipulation", icon: <SiRos /> },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "C", icon: <SiC /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "PHP", icon: <SiPhp /> },
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
        ]
    },
    {
        title: "Database & Tools",
        skills: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
        ]
    }
]

function Skills() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-[#0f172a] via-[#000104] to-[#020617] text-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* 🔹 Title */}
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide"
                    data-aos="fade-up"
                >
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                {/* 🔹 Categories */}
                <div className="grid md:grid-cols-2 gap-10">

                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center justify-center bg-[#020617] p-4 rounded-xl border border-gray-700 hover:border-cyan-400 hover:scale-105 transition"
                                    >
                                        <div className="text-2xl text-cyan-400 mb-2">
                                            {skill.icon}
                                        </div>
                                        <p className="text-sm text-center text-gray-300">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Skills