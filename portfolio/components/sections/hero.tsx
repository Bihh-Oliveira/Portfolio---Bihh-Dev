import Button from "@/components/ui/button";
export default function Hero() {
    return (
        <section
        className="
            min-h-screen
            flex items-center
            px-6
            relative
            overflow-hidden
        "
        >
        {/* glow */}
        <div
            className="
            absolute top-[-200px] left-1/2
            -translate-x-1/2
            w-[500px] h-[500px]
            bg-purple-500/20
            blur-3xl
            rounded-full
            "
        />

        <div
            className="
            relative z-10
            max-w-6xl mx-auto
            w-full
            grid md:grid-cols-2
            gap-16
            items-center
            "
        >
            {/* texto */}
            <div>
            <p className="text-purple-400 text-sm mb-4">
                Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Bianca{" "}
                <span className="text-purple-400">Oliveira</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-zinc-300 mt-6 leading-relaxed">
                Full Stack Developer | Javascript | Typescript | React
            </h2>

            <p className="text-zinc-400 mt-8 text-lg leading-8 max-w-xl">
                Desenvolvendo aplicações web modernas, responsivas e escaláveis,
                unindo performance, experiência do usuário e código limpo.
            </p>

            <div className="mt-10">
                <Button variant="primary">
                View projects
                </Button>
            </div>
            </div>

            {/* foto */}
            <div className="flex justify-center">
            <div
                className="
                relative
                w-[320px]
                h-[320px]
                rounded-[40px]
                border border-white/10
                bg-zinc-900
                overflow-hidden
                "
            >
                {/* glow */}
                <div className="absolute inset-0 bg-purple-500/10" />

                {/* imagem */}
                <img
                src="/hero.png"
                alt="profile"
                className="w-full h-full object-cover"
                />
            </div>
            </div>
        </div>
        </section>
    );
}