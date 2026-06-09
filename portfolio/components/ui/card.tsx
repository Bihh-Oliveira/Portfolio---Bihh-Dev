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

            hover:border-purple-500
            hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]

            hover:scale-[1.02]
            hover:-translate-y-2

            transition-all duration-300
            "
        >
        {/* imagem */}
        <div
            className="
            h-52
            bg-zinc-800

            flex items-center justify-center
            text-zinc-500

            overflow-hidden
            "
        >
            {image ? (
            <img
                src={image}
                alt={title}
                className="
                w-full
                h-full
                object-cover
                "
            />
            ) : (
            "teste imagem"
            )}
        </div>

        {/* conteúdo */}
        <div className="p-6">
            <h3
            className="
                text-xl
                font-bold

                text-white
                group-hover:text-purple-400

                transition-colors duration-300
            "
            >
            {title}
            </h3>

            <p
            className="
                text-zinc-400
                mt-3
                text-sm
                leading-6
            "
            >
            {description}
            </p>

            {/* links */}
            <div className="flex gap-6 mt-6">
            {github && (
                <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-sm
                    font-medium

                    text-purple-400
                    hover:text-purple-300

                    transition-colors
                "
                >
                GitHub →
                </a>
            )}

            {live && (
                <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-sm
                    font-medium

                    text-white
                    hover:text-purple-300

                    transition-colors
                "
                >
                Live →
                </a>
            )}
            </div>
        </div>

        {/* glow */}
        <div
            className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            bg-purple-500/5

            transition-opacity duration-300

            pointer-events-none
            "
        />
        </div>
    );
}