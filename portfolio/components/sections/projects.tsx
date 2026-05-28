import Card from "@/components/ui/card";

export default function Projects() {
    return (
        <section id="projects" className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
            {/* header */}
            <div>
            <p className="text-purple-400 mb-4">projects</p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
                alguns projetos que {""}
                <span className="text-purple-400">
                desenvolvi.
                </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mt-10 max-w-3xl">
                teste teste teste teste teste teste teste teste teste
            </p>
            </div>

            {/* grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">

            <Card
                title="teste projeto 1"
                description="teste teste teste teste teste"
                image="/project1.png"
                github="https://github.com"
            />

            <Card
                title="teste projeto 2"
                description="teste teste teste teste teste"
                image="/project2.png"
                github="https://github.com"
            />

            <Card
                title="teste projeto 3"
                description="teste teste teste teste teste"
                image="/project3.png"
                github="https://github.com"
            />

            <Card
                title="teste projeto 4"
                description="teste teste teste teste teste"
                image="/project4.png"
                github="https://github.com"
            />

            </div>
        </div>
        </section>
    );
}