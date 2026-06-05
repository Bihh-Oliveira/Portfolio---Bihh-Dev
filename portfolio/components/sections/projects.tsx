import Card from "@/components/ui/card";

export default function Projects() {
    return (
        <section id="projects" className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
            
            {/* header */}
            <div className="">
            <p
                className="
                text-purple-400
                text-sm
                tracking-[0.2em]
                mb-4"
            >
                PROJETOS
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
                Cada linha de código é uma oportunidade de {""}
                <span className="text-purple-400">
                criar algo extraordinário.
                </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mt-8 max-w-3xl">
                Esses são alguns dos projetos que tive o prazer de desenvolver, cada um representando uma jornada única de aprendizado e inovação.
            </p>
            </div>

            {/* grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">

            <Card
                title="Next-Acess"
                description="Sistema inteligente de controle de acesso corporativo com painel web, aplicativo mobile e integração IoT, utilizando QR Code dinâmico para gerenciamento seguro de funcionários, visitantes e acessos em prédios empresariais."
                image="/project1.png"
                github="https://github.com/Bihh-Oliveira/Next-Acess"
            />

            <Card
                title="NEXUS FITNESS - Admin"
                description="Plataforma completa de gestão para academias composto por painel administrativo web, focado no gerenciamento de alunos, professores, planos e pagamentos, tendo uma visão geral da academia em tempo real."
                image="/project2.png"
                github="https://github.com/Bihh-Oliveira/Admin---Academia"
            />

            <Card
                title="NexiumCode - Landing Page"
                description="Landing page institucional desenvolvida para fortalecer a presença digital da empresa e apresentar seus serviços de forma clara, moderna e estratégica."
                image="/project3.png"
                github="https://github.com/Bihh-Oliveira/NexiumCode---Landing_Page"
            />

            <Card
                title="App - Money Control"
                description="App de controle de gastos pessoais que permite aos usuários registrar e categorizar suas despesas, oferecendo uma visão clara de seus hábitos financeiros e auxiliando no planejamento orçamentário. Criado utilizando React Native com Expo."
                image="/project4.png"
                github="https://github.com/Bihh-Oliveira/Mobile-Development"
            />

            </div>
        </div>
        </section>
    );
}