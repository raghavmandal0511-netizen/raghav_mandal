import aboutImg from "../assets/images/hero1.jpg"

function About() {
    return (
        <section
            id="about"
            className="py-20 bg-[#020617] text-white"
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* 🔹 Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About Me
                </h2>

                {/* 🔹 Content */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="w-60 h-60 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Software Developer
                        </h3>

                        <p className="text-gray-400 mb-4">
                            A passionate Full Stack Developer, Competitive Programmer,
                            and Robotics enthusiast. I enjoy building scalable applications
                            and solving real-world problems.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Always seeking challenging opportunities where I can grow,
                            improve my skills, and contribute to impactful projects.
                        </p>

                        {/* 🔹 Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 text-gray-300">

                            <div>
                                <p><span className="text-cyan-400 font-semibold">Phone:</span> +91 XXXXXXXX</p>
                                <p><span className="text-cyan-400 font-semibold">City:</span> Ahmedabad, India</p>
                            </div>

                            <div>
                                <p><span className="text-cyan-400 font-semibold">Degree:</span> B.Tech (Your Branch)</p>
                                <p>
                                    <span className="text-cyan-400 font-semibold">Email:</span>{" "}
                                    <a
                                        href="mailto:your@email.com"
                                        className="hover:text-cyan-400"
                                    >
                                        your@email.com
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About