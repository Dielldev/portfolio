const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            technologies: [
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "HTML/CSS",
                "Next.js",
                "Redux"
            ]
        },
        {
            category: "Backend",
            technologies: [
                "Node.js",
                "Python",
                "Java",
                "Laravel",
                "Express.js",
                "SQL",
                "MongoDB"
            ]
        },
        {
            category: "Tools & Others",
            technologies: [
                "Git",
                "Docker",
                "AWS",
                "Firebase",
                "REST APIs",
                "CI/CD",
                "Agile"
            ]
        }
    ];

    return (
        <section className="bg-[#0e1420] text-white py-16 section-transition" id="skills">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-accent uppercase tracking-wider mb-4 text-sm">TECHNOLOGIES</p>
                    <h2 className="text-4xl font-bold mb-4">My Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of technologies I work with to bring ideas to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, index) => (
                        <div 
                            key={index}
                            className="bg-[#131B2E]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-accent">
                                {skillCategory.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillCategory.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm hover:bg-accent/20 transition-all duration-300 hover:scale-105"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
