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
        description:
            "Explore meus projetos, estudos e experiências de desenvolvimento.",
        href: "https://github.com/Bihh-Oliveira",
        icon: FaGithub,
        },
        {
        title: "LinkedIn",
        description:
            "Acompanhe minha trajetória profissional e conexões na área.",
        href: "https://www.linkedin.com/in/bianca-oliveira-73b433333/",
        icon: FaLinkedin,
        },
        {
        title: "Email",
        description:
            "Entre em contato para oportunidades, propostas e parcerias.",
        href: "mailto:bibiolly2006@gmail.com",
        icon: MdEmail,
        },
        {
        title: "Instagram",
        description:
            "Conteúdo, bastidores e projetos relacionados à tecnologia.",
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
            overflow-hidden
        "
        >
        {/* glow */}
        <div
            className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2

            w-125 h-125

            bg-purple-500/10
            blur-3xl
            rounded-full

            pointer-events-none
            "
        />

        <div className="max-w-6xl mx-auto relative z-10">
            {/* título */}
            <div className="text-center mb-20">
            <p
                className="
                text-purple-400
                text-sm
                tracking-[0.2em]
                mb-4
                "
            >
                CONTATO
            </p>

            <h2
                className="
                text-5xl md:text-7xl
                font-bold
                leading-tight
                "
            >
                Vamos construir algo
                <span className="text-purple-400">
                {" "}juntos.
                </span>
            </h2>

            <p
                className="
                text-zinc-400
                text-lg
                leading-8
                max-w-3xl
                mx-auto
                mt-8
                "
            >
                Estou sempre aberta a novas oportunidades, colaborações e
                projetos que desafiem minha criatividade e ampliem meu
                conhecimento. Se você tem uma ideia ou procura alguém para
                transformá-la em uma solução digital moderna, será um prazer
                conversar.
            </p>
            </div>

            {/* cards */}
            <div className="flex flex-wrap justify-center gap-5 mt-16">

            {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                <a
                    key={contact.title}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="
                    group

                    flex items-center gap-4
                    px-6 py-5
                    rounded-2xl

                    border border-purple-500
                    shadow-[0_0_15px_rgba(168,85,247,0.15)]

                    hover:border-purple-400
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
                    hover:-translate-y-2
                    hover:scale-105

                    transition-all duration-300
                    "
                >
                    <Icon
                    className="
                        text-purple-400
                        text-2xl

                        group-hover:-rotate-12
                        group-hover:scale-110

                        transition-all duration-300
                    "
                    />

                    <span
                    className="
                        text-white
                        font-semibold
                        text-lg
                    "
                    >
                    {contact.title}
                    </span>
                </a>
                );
            })}
            </div>
        </div>
        </section>
    );
}