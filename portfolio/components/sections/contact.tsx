export default function Contact() {
    return (
        <section
        id="contact"
        className="
            py-40
            px-6"
        >
        <div className="max-w-6xl mx-auto">
            {/* título */}
            <div className="text-center mb-20">
            <h2
                className="
                text-4xl md:text-6xl
                font-bold"
            >
                contato
            </h2>

            <div
                className="
                w-24 h-1
                bg-purple-400
                mx-auto
                mt-5
                rounded-full"
            />

            <p
                className="
                text-zinc-400
                text-lg
                mt-10"
            >
                Vamos construir algo incrível juntos?
                Entre em contato!
            </p>
            </div>

            {/* grid */}
            <div
            className="
                grid md:grid-cols-2
                gap-8"
            >
            {/* github */}
            <a
                href="https://github.com/Bihh-Oliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-zinc-950
                border border-white/10
                rounded-3xl
                p-10
                flex items-center gap-8
                hover:border-purple-400/50
                hover:-translate-y-1
                transition"
            >
                <div
                className="
                    w-20 h-20
                    rounded-2xl
                    bg-purple-500/10
                    flex items-center justify-center
                    text-purple-400
                    text-3xl"
                >
                G
                </div>

                <div>
                <h3 className="text-3xl font-bold">
                    GitHub
                </h3>

                <p className="text-zinc-400 mt-2">
                    Bihh-Oliveira
                </p>
                </div>
            </a>

            {/* linkedin */}
            <a
                href="https://www.linkedin.com/in/bianca-oliveira-73b433333/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-zinc-950
                border border-white/10
                rounded-3xl
                p-10
                flex items-center gap-8
                hover:border-purple-400/50
                hover:-translate-y-1
                transition"
            >
                <div
                className="
                    w-20 h-20
                    rounded-2xl
                    bg-purple-500/10
                    flex items-center justify-center
                    text-purple-400
                    text-3xl"
                >
                in
                </div>

                <div>
                <h3 className="text-3xl font-bold">
                    LinkedIn
                </h3>

                <p className="text-zinc-400 mt-2">
                    Bianca Oliveira
                </p>
                </div>
            </a>

            {/* email */}
            <a
                href="mailto:seuemail@gmail.com"
                className="
                bg-zinc-950
                border border-white/10
                rounded-3xl
                p-10
                flex items-center gap-8
                hover:border-purple-400/50
                hover:-translate-y-1
                transition"
            >
                <div
                className="
                    w-20 h-20
                    rounded-2xl
                    bg-purple-500/10
                    flex items-center justify-center
                    text-purple-400
                    text-3xl"
                >
                @
                </div>

                <div>
                <h3 className="text-3xl font-bold">
                    Email
                </h3>

                <p className="text-zinc-400 mt-2">
                    bibiolly2006@gmail.com
                </p>
                </div>
            </a>

            {/* whatsapp */}
            <a
                href="https://wa.me/5511930183069"
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-zinc-950
                border border-white/10
                rounded-3xl
                p-10
                flex items-center gap-8
                hover:border-purple-400/50
                hover:-translate-y-1
                transition"
            >
                <div
                className="
                    w-20 h-20
                    rounded-2xl
                    bg-purple-500/10
                    flex items-center justify-center
                    text-purple-400
                    text-3xl"
                >
                W
                </div>

                <div>
                <h3 className="text-3xl font-bold">
                    WhatsApp
                </h3>

                <p className="text-zinc-400 mt-2">
                    +55 11 93018-3069
                </p>
                </div>
            </a>
            </div>
        </div>
        </section>
    );
}