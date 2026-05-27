export default function Footer() {
    return (
        <footer
        className="
            relative
            border-t border-white/10
            mt-40
            overflow-hidden"
        >
        {/* glow */}
        <div
            className="
            absolute bottom-[-120px] left-1/2
            -translate-x-1/2
            w-[400px] h-[400px]
            bg-purple-500/20
            blur-3xl
            rounded-full"
        />

        <div
            className="
            relative z-10
            max-w-6xl mx-auto
            px-6 py-14"
        >
            <div
            className="
                flex flex-col md:flex-row
                items-center justify-between
                gap-10"
            >
            {/* esquerda */}
            <div>
                <h2
                className="
                    text-2xl
                    font-bold
                    text-white"
                >
                bih.dev
                </h2>

                <p
                className="
                    text-zinc-400
                    mt-3
                    max-w-sm
                    leading-7"
                >
                Creating modern interfaces
                with React, Next.js and
                TypeScript.
                </p>
            </div>

            {/* links */}
            <div
                className="
                flex items-center gap-8
                text-sm text-zinc-400"
            >
                <a
                href="#about"
                className="
                    hover:text-purple-400
                    transition"
                >
                about
                </a>

                <a
                href="#projects"
                className="
                    hover:text-purple-400
                    transition"
                >
                projects
                </a>

                <a
                href="#contact"
                className="
                    hover:text-purple-400
                    transition"
                >
                contact
                </a>
            </div>
            </div>

            {/* bottom */}
            <div
            className="
                border-t border-white/10
                mt-10 pt-6
                flex flex-col md:flex-row
                items-center justify-between
                gap-4
                text-sm text-zinc-500"
            >
            <p>
                © 2026 bih.dev. all rights reserved.
            </p>

            <p>
                built with next.js & tailwind
            </p>
            </div>
        </div>
        </footer>
    );
}