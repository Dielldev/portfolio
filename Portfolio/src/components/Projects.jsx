import '../styles/Transitions.css';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';


const Projects = () => {
    const projects = [
        {
            company: "Aorta Plus",
            year: "2024",
            title: "Clinic Website",
            description: "A modern clinic website that displays the company's features",
            tags: ["React", "Tailwind", "Node.js"],
            image: project1Image,
            liveUrl: "https://aortaplus.vercel.app/",
            githubUrl: "https://github.com/Dielldev/Aortaplus"
        },
        {
            company: "Dekor Drilon",
            year: "2023",
            title: "Furniture Website",
            description: "Full-featured Website with minimalistic design",
            tags: ["Html", "Css", "JavaScript"],
            image: project2Image,
            liveUrl: "https://dekordrilon.com/",
            githubUrl: "#"
        },
        {
            company: "Erta Flow",
            year: "2024",
            title: "Client Management ",
            description: "A client management website done in 48 hours during a hackathon  ",
            tags: ["Vanilla", "Tailwind", "PHP", "JavaScript"],
            image: project4Image,
            liveUrl: "https://youtu.be/bHDd1XsMENA?si=-4HIfmJg8C5M5bNI",
            githubUrl: "https://github.com/Drijoni/junction-erta"
        },

        {
            company: "aava match",
            year: "2024",
            title: "Job Matching Application",
            description: "A job matching application with the purpose of matching people with their dream job.",
            tags: ["Vanilla", "Tailwind", "PHP", "JavaScript"],
            image: project5Image,
            liveUrl: "https://youtu.be/9bH2aULUfYI?si=b9muHrH22qnj04hW",
            githubUrl: "https://github.com/lirikrexhepi/aavaMatach"
        },
    ];

    return (
        <section className="bg-[#0e1420] text-white py-16 section-transition" id="projects">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-accent uppercase tracking-wider mb-4 text-sm">REAL-WORLD RESULTS</p>
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See how I transformed concepts into engaging digital experiences.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-[#131B2E]/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm border border-white/5 hover:border-accent/30 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="mb-6">
                                <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img 
                                        src={project.image}
                                        alt={`${project.title} Screenshot`}
                                        className="relative rounded-lg shadow-2xl w-full h-[350px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <p className="text-accent text-sm font-medium">{project.company}</p>
                                        <p className="text-gray-400 text-sm">{project.year}</p>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 text-xs text-accent bg-accent/10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    <a 
                                        href={project.liveUrl}
                                        className="inline-flex items-center gap-2 text-white bg-accent hover:bg-accent-dark px-4 py-2 rounded-lg transition-colors text-sm"
                                    >
                                        <span>Live Demo</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a 
                                        href={project.githubUrl}
                                        className="inline-flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors text-sm"
                                    >
                                        <span>Source Code</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;