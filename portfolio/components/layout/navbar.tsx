export default function Navbar() {
    return (
        <header
        className="
            fixed top-0 left-0 w-full z-50
            border-b border-white/10
            backdrop-blur-md
            bg-black/30"
        >
        <div
            className="
            max-w-7xl mx-auto
            h-20
            px-6
            flex items-center justify-between"
        >
            <h1 className="text-2xl font-bold text-white">
            bih.dev
            </h1>

            <nav className="flex items-center gap-8 text-sm text-zinc-300">
            <a
                href="#about"
                className="hover:text-white transition">
                Sobre mim
            </a>

            <a
                href="#projects"
                className="hover:text-white transition">
                Projetos
            </a>

            <a
                href="#contact"
                className="hover:text-white transition">
                contato
            </a>

            </nav>
        </div>
        </header>
    );
}