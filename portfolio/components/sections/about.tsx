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
                gap-6
                mt-16"
            >
            {/* github */}
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4

                px-8 py-5

                rounded-2xl

                bg-sky-500
                hover:bg-sky-600

                transition"
            >
                <div className="text-2xl text-white">
                G
                </div>

                <span className="text-white font-semibold text-xl">
                GitHub
                </span>
            </a>

            {/* linkedin */}
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4

                px-8 py-5

                rounded-2xl

                bg-sky-500
                hover:bg-sky-600

                transition"
            >
                <div className="text-2xl text-white">
                in
                </div>

                <span className="text-white font-semibold text-xl">
                LinkedIn
                </span>
            </a>

            {/* whatsapp */}
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4

                px-8 py-5

                rounded-2xl

                border border-green-500
                hover:bg-green-500/10

                transition"
            >
                <div className="text-2xl text-green-400">
                W
                </div>

                <span className="text-green-400 font-semibold text-xl">
                WhatsApp
                </span>
            </a>

            {/* currículo */}
            <a
                href="/cv.pdf"
                target="_blank"
                className="
                flex items-center gap-4

                px-8 py-5

                rounded-2xl

                border border-red-500
                hover:bg-red-500/10

                transition"
            >
                <div className="text-2xl text-red-400">
                CV
                </div>

                <span className="text-red-400 font-semibold text-xl">
                Currículo
                </span>
            </a>
            </div>
        </div>
        </section>
    );
}