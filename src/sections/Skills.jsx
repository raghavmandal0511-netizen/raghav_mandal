const skills = [
    "JavaScript",
    "Python",
    "Flask",
    "React",
    "Java",
    "Spring Boot",
    "JPA",
    "Hibernate",
    "Machine Learning",
    "MySQL",
    "Oracle DB",
]

function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#0f172a] text-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* 🔹 Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Skills
                </h2>

                {/* 🔹 Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="bg-[#020617] border border-gray-700 rounded-xl p-4 text-center 
                        hover:border-cyan-400 hover:scale-105 transition"
                        >
                            <p className="font-medium text-gray-300">
                                {skill}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Skills