import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaFilePdf,
    } from "react-icons/fa";

    export default function About() {
    return (
        <section
        id="about"
        className="
            py-40
            px-6"
        >
        <div className="max-w-6xl mx-auto">
            
            {/* texto */}
            <div>
            <p className="text-purple-400 mb-4">
                about me
            </p>

            <h2
                className="
                text-4xl md:text-6xl
                font-bold
                leading-tight
                max-w-4xl">

                aplicações web {" "}
                <span className="text-purple-400">
                modernas e interativas.
                </span>
            </h2>

            <p
                className="
                text-zinc-400
                text-lg
                leading-8
                mt-10
                max-w-3xl"
            >
                Eu desenvolvo interfaces responsivas e modernas
                usando React, Next.js e TypeScript,
                com foco em desempenho, animações
                e experiência do usuário.
            </p>
            </div>

            {/* cards */}
            <div
            className="
                flex flex-wrap
                gap-5
                mt-10"
            >
            {/* github */}
            <a
                href="https://github.com/Bihh-Oliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4

                px-5 py-5

                rounded-2xl

                bg-purple-700
                border-purple-500
                shadow-[0_0_15px_rgba(168,85,247,0.15)]

                hover:border-purple-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]

                transition-all duration-300"
            >
                <FaGithub
                size={22}
                className="text-white"
                />

                <span className="text-white font-semibold text-xl">
                GitHub
                </span>
            </a>

            {/* linkedin */}
            <a
                href="https://www.linkedin.com/in/bianca-oliveira-73b433333/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4

                px-5 py-5
                rounded-2xl

                bg-purple-700
                border-purple-500
                shadow-[0_0_15px_rgba(168,85,247,0.15)]

                hover:border-purple-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]

                transition-all duration-300"
            >
                <FaLinkedin
                size={22}
                className="text-white"
                />

                <span className="text-white font-semibold text-xl">
                LinkedIn
                </span>
            </a>

            {/* currículo */}
            <a
                href="/cv.pdf"
                download
                className="
                flex items-center gap-4

                px-5 py-5
                rounded-2xl

                text-purple-400
                font-semibold
                text-xl

                border border-purple-500
                shadow-[0_0_15px_rgba(168,85,247,0.15)]

                hover:border-purple-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]

                transition-all duration-300"
            >
                <FaFilePdf size={22} />

                Currículo
            </a>

            {/* whatsapp */}
            <a
                href="https://wa.me/5511930183069"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4

                px-5 py-5
                rounded-2xl

                border border-green-500
                shadow-[0_0_15px_rgba(34,197,94,0.15)]

                hover:border-green-400
                hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]

                transition-all duration-300"
            >
                <FaWhatsapp
                size={22}
                className="text-green-400"
                />

                <span className="text-green-400 font-semibold text-xl">
                WhatsApp
                </span>
            </a>
            </div>
        </div>
        </section>
    );
}