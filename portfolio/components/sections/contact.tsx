import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    } from "react-icons/fa";

    import { MdEmail } from "react-icons/md";

    import { HiArrowUpRight } from "react-icons/hi2";

    export default function Contact() {
    const contacts = [
        {
        title: "GitHub",
        description: "Bihh-Oliveira",
        href: "https://github.com/Bihh-Oliveira",
        icon: FaGithub,
        },
        {
        title: "LinkedIn",
        description: "Bianca Oliveira",
        href: "https://www.linkedin.com/in/bianca-oliveira-73b433333/",
        icon: FaLinkedin,
        },
        {
        title: "Email",
        description: "bibiolly2006@gmail.com",
        href: "mailto:bibiolly2006@gmail.com",
        icon: MdEmail,
        },
        {
        title: "Instagram",
        description: "dev.biahh__",
        href: "https://www.instagram.com/dev.biahh__/",
        icon: FaInstagram,
        },
    ];

    return (
        <section
        id="contact"
        className="
            relative
            py-40
            px-6
            overflow-hidden"
        >
        {/* glow */}
        <div
            className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2

            w-125
            h-125

            bg-purple-500/10
            blur-3xl
            rounded-full

            pointer-events-none"
        />

        <div className="max-w-6xl mx-auto relative z-10">
            {/* título */}
            <div className="text-center mb-20">
            <p
                className="
                text-purple-400
                text-sm
                tracking-[0.2em]
                mb-4"
            >
                CONTATO
            </p>

            <h2
                className="
                text-5xl md:text-7xl
                font-bold
                leading-tight"
            >
                Vamos criar algo
                <span className="text-purple-400">
                {" "}incrível.
                </span>
            </h2>

            <p
                className="
                text-zinc-400
                text-lg
                leading-8
                max-w-2xl
                mx-auto
                mt-8"
            >
                Entre em contato através das minhas redes
                ou me envie uma mensagem diretamente.
            </p>
            </div>

            {/* cards */}
            <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                <a
                    key={contact.title}
                    href={contact.href}
                    target={
                    contact.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                    contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                    group
                    relative

                    p-px
                    rounded-3xl

                    bg-linear-to-br
                    from-purple-500/30
                    via-transparent
                    to-white/5

                    overflow-hidden
                    "
                >
                    <div
                    className="
                        bg-zinc-950/95
                        backdrop-blur-xl

                        rounded-3xl
                        px-8 py-7

                        flex items-center justify-between
                        border border-white/5
                        group-hover:border-purple-400/30
                        transition-all duration-300"
                    >
                    {/* esquerda */}
                    <div className="flex items-center gap-5">
                        {/* ícone */}
                        <div
                        className="
                            w-16 h-16
                            rounded-2xl

                            bg-purple-500/10
                            border border-purple-400/20

                            flex items-center justify-center

                            text-purple-400
                            text-3xl

                            group-hover:scale-110
                            group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]

                            transition-all duration-300"
                        >
                        <Icon />
                        </div>

                        {/* texto */}
                        <div>
                        <h3
                            className="
                            text-2xl
                            font-semibold
                            text-white"
                        >
                            {contact.title}
                        </h3>

                        <p
                            className="
                            text-zinc-400
                            mt-1
                            text-sm"
                        >
                            {contact.description}
                        </p>
                        </div>
                    </div>

                    {/* seta */}
                    <div
                        className="
                        text-zinc-600

                        group-hover:text-purple-400
                        group-hover:translate-x-1
                        group-hover:-translate-y-1

                        transition-all duration-300"
                    >
                        <HiArrowUpRight size={24} />
                    </div>
                    </div>
                </a>
                );
            })}
            </div>
        </div>
        </section>
    );
}