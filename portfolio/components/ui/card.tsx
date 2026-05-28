type CardProps = {
    title: string;
    description: string;
    image?: string;
    github?: string;
    live?: string;
    };

    export default function Card({
    title,
    description,
    image,
    github,
    live,
    }: CardProps) {
    return (
        <div
        className="
            group
            relative
            rounded-2xl
            overflow-hidden
            border border-white/10
            bg-zinc-900
            hover:border-purple-400/40
            transition
        "
        >
        {/* imagem */}
        <div className="h-52 bg-zinc-800 flex items-center justify-center text-zinc-500 overflow-hidden">
            {image ? (
            <img
                src={image}
                alt={title}
                className="
                w-full h-full object-cover
                group-hover:scale-105
                transition duration-500
                "
            />
            ) : (
            "teste imagem"
            )}
        </div>

        {/* conteúdo */}
        <div className="p-6">
            <h3 className="text-xl font-bold text-white">
            {title}
            </h3>

            <p className="text-zinc-400 mt-2 text-sm leading-6">
            {description}
            </p>

            {/* link */}
            <div className="flex gap-4 mt-6">
            {github && (
                <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-sm text-purple-400
                    hover:text-purple-300
                    cursor-pointer
                "
                >
                GitHub
                </a>
            )}

            {live && (
                <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-sm text-white
                    hover:text-purple-300
                    cursor-pointer
                "
                >
                Live
                </a>
            )}
            </div>
        </div>

        {/* glow hover (IMPORTANTE: não bloqueia clique) */}
        <div
            className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            bg-purple-800/5
            transition
            pointer-events-none
            "
        />
        </div>
    );
}