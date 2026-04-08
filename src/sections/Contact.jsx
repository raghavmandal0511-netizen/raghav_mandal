import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import AOS from "aos"
import "aos/dist/aos.css"

import { FaEnvelope, FaPaperPlane } from "react-icons/fa"

const FORMSPARK_URL = "https://submit-form.com/CARCkqSD"

function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await fetch(FORMSPARK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, message }),
            })

            toast.success("Message sent successfully ")
            setEmail("")
            setMessage("")
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            toast.error("Something went wrong ")
        }

        setLoading(false)
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#000104] text-white">
            <div className="max-w-3xl mx-auto px-4">

                {/* Title */}
                <h2
                    className="text-4xl md:text-5xl  font-extrabold text-center mb-6 pb-2"
                    data-aos="fade-up"
                >
                    Get in <span className="text-cyan-400">Touch</span>
                </h2>



                {/* Contact Card */}
                <div
                    className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg"
                    data-aos="zoom-in"
                >

                    {/* Direct Email */}
                    <div className="flex items-center gap-3 mb-6 text-gray-300">
                        <FaEnvelope className="text-cyan-400 text-xl" />
                        <span className="font-medium">
                            raghavmandal0511@gmail.com
                        </span>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 focus:outline-none focus:border-cyan-400 transition"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 focus:outline-none focus:border-cyan-400 transition"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 flex items-center justify-center gap-2 bg-[#1c8cd1] rounded-lg  transition font-semibold"
                        >
                            {loading ? (
                                "Sending..."
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    Send Message
                                </>
                            )}
                        </button>

                    </form>

                    {/*  Mailto fallback */}
                    <div className="text-center mt-6 text-gray-400">
                        <p>or</p>
                        <a
                            href="mailto:raghavmandal0511@gmail.com"
                            className="text-cyan-400 hover:underline"
                        >
                            Send directly via email →
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact