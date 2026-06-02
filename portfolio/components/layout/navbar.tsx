"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
        let current = "hero";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop) {
            current = section.getAttribute("id") || "hero";
            }
        });

        setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLink = (id: string, label: string) => (
        <a
        href={`#${id}`}
        className={`
            relative
            transition-all duration-300

            ${
            activeSection === id
                ? "text-purple-400 after:w-full"
                : "text-zinc-300 after:w-0"
            }

            hover:text-purple-400

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-2

            after:h-0.5
            after:bg-purple-500

            after:transition-all
            after:duration-300

            hover:after:w-full
        `}
        >
        {label}
        </a>
    );

    return (
        <header
        className="
            fixed top-0 left-0 w-full z-50
            border-b border-white/10
            backdrop-blur-md
            bg-black/30
        "
        >
        <div
            className="
            max-w-7xl mx-auto
            h-20
            px-6
            flex items-center justify-between
            "
        >
            <h1 className="text-2xl font-bold text-white">
            Bih.Dev
            </h1>

            <nav className="flex items-center gap-8 text-sm">
            {navLink("hero", "Home")}
            {navLink("about", "Sobre mim")}
            {navLink("projects", "Projetos")}
            {navLink("technologies", "Tecnologias")}
            {navLink("contact", "Contato")}
            </nav>
        </div>
        </header>
    );
}