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
            w-100 h-100
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
                    text-purple-300"
                >
                dev.biahh__
                </h2>

            <div className="mt-3">
            <p className="text-zinc-500 text-sm">
                Full Stack Developer • São Paulo, Brasil
            </p>
            </div>

            </div>

            <div className="text-right max-w-xs">
            <p className="text-zinc-400">
                Transformando ideias em experiências digitais 
                através de código e criatividade.
            </p>
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
                © 2026 dev.biahh__. all rights reserved.
            </p>

            </div>
        </div>
        </footer>
    );
}