import {
    FaReact,
    FaJs,
    FaGitAlt,
    FaGithub,
    } from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    } from "react-icons/si";

    export default function Technologies() {
    const technologies = [
        {
        name: "React",
        icon: <FaReact size={28} />,
        },

        {
        name: "Next.js",
        icon: <SiNextdotjs size={28} />,
        },
        
        {
        name: "TypeScript",
        icon: <SiTypescript size={28} />,
        },

        {
        name: "JavaScript",
        icon: <FaJs size={28} />,
        },

        {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={28} />,
        },

        {
        name: "Git",
        icon: <FaGitAlt size={28} />,
        },

        {
        name: "GitHub",
        icon: <FaGithub size={28} />,
        },
    ];

    return (
        <section
        id="technologies"
        className="
            py-40
            px-6
            relative"
        >
        {/* glow */}
        <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-125
            h-125

            bg-purple-500/10
            blur-[120px]
            rounded-full

            pointer-events-none"
        />

        <div className="relative z-10 max-w-6xl mx-auto">

            <p className="text-purple-400 mb-4">
            Tecnologias
            </p>

            <h2
            className="
                text-5xl md:text-7xl
                font-bold
                max-w-4xl"
            >
            Código, criatividade e
            <span className="text-purple-400">
            {" "}evolução constante.
            </span>
            </h2>

            <p
            className="
                text-zinc-400
                text-lg
                mt-8
                max-w-3xl"
            >
            Tecnologias utilizadas no desenvolvimento de interfaces modernas,
            aplicações escaláveis e experiências digitais de alta qualidade.
            </p>

            <div
            className="
                flex
                flex-wrap
                justify-center
                gap-5
                mt-20"
            >

            {technologies.map((tech) => (
                <div
                key={tech.name}
                className="
                    group

                    flex items-center
                    gap-4

                    px-6 py-4
                    rounded-2xl

                    bg-zinc-900
                    border border-white/10

                    hover:border-purple-500
                    hover:bg-purple-500/10

                    hover:-translate-y-1
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                    transition-all duration-300"
                >
                <div
                    className="
                    text-zinc-400
                    group-hover:text-purple-400
                    transition-colors"
                >
                    {tech.icon}
                </div>

                <span
                    className="
                    text-zinc-300
                    font-medium

                    group-hover:text-white
                    transition-colors"
                >
                    {tech.name}
                </span>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}