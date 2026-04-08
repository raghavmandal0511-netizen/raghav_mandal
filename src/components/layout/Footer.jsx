import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"

function Footer() {
    return (
        <footer className=" bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#000104] text-white py-10 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* 🔹 Name & Role */}
                <h2 className="text-xl font-semibold mb-2">
                    Raghav Mandal
                </h2>
                <p className="text-gray-400 mb-6 text-sm">
                    Software Engineer • Robotics Engineer
                </p>

                {/* 🔹 Social Links */}
                <div className="flex justify-center gap-6 mb-6 text-xl">

                    <a
                        href="https://x.com/Raghav_Mandal_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 hover:scale-110 transition"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://www.instagram.com/_.raghav.01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 hover:scale-110 transition"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://github.com/raghavmandal0511-netizen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 hover:scale-110 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/raghav-mandal-4b678b34a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 hover:scale-110 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:raghavmandal0511@gmail.com"
                        className="hover:text-cyan-400 hover:scale-110 transition"
                    >
                        <FaEnvelope />
                    </a>

                </div>

                {/* 🔹 Divider */}
                <div className="border-t border-gray-800 my-6"></div>

                {/* 🔹 Bottom Text */}
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Raghav Mandal. All rights reserved.
                </p>

                <p className="text-gray-500 text-xs mt-2">
                    Made with <span className="text-red-500">❤️</span> using React & Tailwind CSS
                </p>

            </div>
        </footer>
    )
}

export default Footer