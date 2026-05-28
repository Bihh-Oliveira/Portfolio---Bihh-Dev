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
                max-w-4xl"
            >
                aplicações web modernas
                e interativas.
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

                bg-purple-600
                hover:bg-purple-500

                transition
                "
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

                bg-purple-600
                hover:bg-purple-500

                transition
                "
            >
                <FaLinkedin
                size={22}
                className="text-white"
                />

                <span className="text-white font-semibold text-xl">
                LinkedIn
                </span>
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
                hover:bg-green-500/10

                transition
                "
            >
                <FaWhatsapp
                size={22}
                className="text-green-400"
                />

                <span className="text-green-400 font-semibold text-xl">
                WhatsApp
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

                border border-red-500

                text-red-400
                font-semibold
                text-xl

                hover:bg-red-500/10

                transition
                "
            >
                <FaFilePdf size={22} />

                Currículo
            </a>
            </div>
        </div>
        </section>
    );
}