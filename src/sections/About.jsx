function About() {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-[#000104] via-[#020617] to-[#0f172a] text-white"
        >
            <div className="max-w-4xl mx-auto px-4">

                {/* 🔹 Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-wide">
                    About <span className="text-cyan-400">Me</span>
                </h2>

                {/* 🔹 Subtitle */}
                <p className="text-center text-gray-400 mb-10">
                    Passionate about building intelligent systems through software and robotics.
                </p>

                {/* 🔹 Card */}
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl">

                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400 text-center">
                        Software Engineer & Robotics Engineer
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-4 text-center">
                        I am a passionate Software Engineer specializing in building scalable web
                        applications and intelligent robotic systems. I have hands-on experience
                        working with ROS2, computer vision, and robotic manipulation, where I
                        develop real-world solutions for automation and robotics.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-8 text-center">
                        Currently pursuing a Bachelor's degree in Information Technology, I enjoy
                        solving complex problems, learning new technologies, and working on impactful
                        projects. Alongside engineering, I am also a Kabaddi player, which reflects
                        my discipline, teamwork, and competitive mindset.
                    </p>

                    {/* 🔹 Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">

                        <div className="bg-[#020617] p-4 rounded-lg border border-cyan-400/20">
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="text-cyan-400 font-semibold">+91 9104915715</p>
                        </div>

                        <div className="bg-[#020617] p-4 rounded-lg border border-cyan-400/20">
                            <p className="text-sm text-gray-400">City</p>
                            <p className="text-cyan-400 font-semibold">Dadra & Nagar Haveli, India</p>
                        </div>

                        <div className="bg-[#020617] p-4 rounded-lg border border-cyan-400/20">
                            <p className="text-sm text-gray-400">Degree</p>
                            <p className="text-cyan-400 font-semibold">
                                Bachelor of Engineering (Information Technology)
                            </p>
                        </div>

                        <div className="bg-[#020617] p-4 rounded-lg border border-cyan-400/20">
                            <p className="text-sm text-gray-400">Email</p>
                            <a
                                href="mailto:raghavmandal0511@gmail.com"
                                className="text-cyan-400 font-semibold hover:underline"
                            >
                                raghavmandal0511@gmail.com
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About