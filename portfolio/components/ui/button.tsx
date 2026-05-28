type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>;

    export default function Button({
    children,
    variant = "primary",
    ...props
    }: ButtonProps) {
    const base =
        "relative px-5 py-4 rounded-full font-medium text-white transition-all duration-300 overflow-hidden group";

    const variants = {
        primary:
        "bg-purple-700/90 hover:bg-purple-600 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)]",

        secondary:
        "bg-transparent border border-purple-400/50 text-purple-200 hover:text-white hover:border-purple-300/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]",
    };

    return (
        <button className={`${base} ${variants[variant]}`} {...props}>
        {/* reflexo */}
        <span
            className="
            absolute inset-0
            bg-linear-to-r from-transparent via-white/20 to-transparent
            translate-x-[-200%]
            group-hover:translate-x-[200%]
            transition-transform duration-1000
            "
        />

        {/* glow interno leve */}
        <span
            className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            bg-purple-400/5
            transition-opacity duration-300
            "
        />

        {/* texto */}
        <span className="relative z-10">{children}</span>
        </button>
    );
}