export default function Hero() {
    return (
        <section
        className="
            min-h-screen
            flex items-center justify-center
            px-6
            relative
            overflow-hidden
        "
        >
        <div
            className="
            absolute top-[-200px]
            w-[500px] h-[500px]
            bg-purple-500/30
            blur-3xl
            rounded-full
            "
        />

        <div className="relative z-10 max-w-5xl text-center">
            <p className="text-purple-400 text-sm mb-4">
            frontend developer
            </p>

            <h1
            className="
                text-5xl md:text-7xl
                font-bold
                leading-tight
            "
            >
            creating modern
            <span className="text-purple-400">
                {" "}web experiences
            </span>
            </h1>

            <p
            className="
                text-zinc-400
                mt-6
                max-w-2xl
                mx-auto
                text-lg
            "
            >
            React, Next.js and TypeScript projects
            focused on modern UI, animations
            and performance.
            </p>

            <div className="mt-10">
            <button
                className="
                px-8 py-4
                rounded-full
                bg-purple-500
                hover:bg-purple-600
                transition
                font-medium
                "
            >
                view projects
            </button>
            </div>
        </div>
        </section>
    );
}