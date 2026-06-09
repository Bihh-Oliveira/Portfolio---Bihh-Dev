type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>;

    export default function Button({
    children,
    variant = "primary",
    ...props
    }: ButtonProps) {
    const base = `
        relative

        px-5 py-4
        rounded-full

        font-medium
        text-white

        overflow-hidden
        group

        hover:scale-105
        hover:-translate-y-1

        active:scale-95

        transition-all duration-300
    `;

    const variants = {
        primary: `
        bg-purple-600
        hover:bg-purple-500

        border border-purple-300/40

        shadow-[0_0_15px_rgba(168,85,247,0.25)]
        hover:shadow-[0_0_35px_rgba(168,85,247,0.65)]
        `,

        secondary: `
        bg-transparent

        border border-purple-400/50

        text-purple-200
        hover:text-white

        hover:bg-purple-500/10
        hover:border-purple-300

        hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
        `,
    };

    return (
        <button
        className={`${base} ${variants[variant]}`}
        {...props}
        >
        {/* reflexo */}
        <span
            className="
            absolute inset-0

            bg-linear-to-r
            from-transparent
            via-white/20
            to-transparent

            translate-x-[-200%]
            group-hover:translate-x-[200%]

            transition-transform
            duration-1000
            "
        />

        {/* glow interno */}
        <span
            className="
            absolute inset-0

            opacity-0
            group-hover:opacity-100

            bg-purple-400/5

            transition-opacity
            duration-300
            "
        />

        {/* texto */}
        <span className="relative z-10">
            {children}
        </span>
        </button>
    );
}