import { useState } from 'react';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isExpanded, setIsExpanded] = useState(false);

    const achievements = [
        {
            type: 'achievement',
            title: 'Hackathon Winner',
            organization: 'Junction Hackathon',
            date: '2024',
            description: 'Second place in Partner Challenge in the Junction Hackathon in Helsinki, Finland for developing a solution in 48 hours.',
            icon: <FaTrophy className="text-yellow-400" />
        },
        {
            type: 'achievement',
            title: 'Hackathon Winner',
            organization: 'JunctionxTirana Hackathon',
            date: '2024',
            description: 'First place in the Junction Hackathon for developing a client management solution in 48 hours.',
            icon: <FaTrophy className="text-yellow-400" />  
        },

        {
            type: 'achievement',
            title: 'Competition Winner',
            organization: 'ASEF 1st Place',
            date: '2022',
            description: 'Secured 1st place in ASEF(Albanian Science Engineering Fair) for Computer Science Category, in Web Design out of 50 Projects',
            icon: <FaTrophy className="text-yellow-400" />  
        },

        {
            type: 'achievement',
            title: 'Competition Winner',
            organization: 'ASEF 1st Place',
            date: '2023',
            description: 'Secured 1st place in ASEF(Albanian Science Engineering Fair) for Computer Science Category, in Web Design out of 50 Projects',
            icon: <FaTrophy className="text-yellow-400" />  
        },
        {
            type: 'achievement',
            title: 'Competition Winner',
            organization: 'STEM Olympiad Bronze Metal',
            date: '2023',
            description: 'Secured a Bronze Metal in STEM Olympiad in Coding Category, out of 400 participants world wide ',
            icon: <FaTrophy className="text-yellow-400" />  
        },
        // Add more achievements here
    ];

    const certificates = [
        {
            type: 'certificate',
            title: 'React',
            organization: 'Digital School / Shkolla Digjitale',
            date: '2023',
            credentialUrl: 'https://your-credential-url.com',
            image: '/path-to-certificate-image.jpg', // Add your certificate image
            icon: <FaCertificate className="text-blue-400" />
        },

        {
            type: 'certificate',
            title: 'Front-End',
            organization: 'Digital School / Shkolla Digjitale',
            date: '2021',
            credentialUrl: 'https://your-credential-url.com',
            image: '/path-to-certificate-image.jpg', // Add your certificate image
            icon: <FaCertificate className="text-blue-400" />
        },


        {
            type: 'certificate',
            title: 'Back-End',
            organization: 'Digital School / Shkolla Digjitale',
            date: '2022',
            credentialUrl: 'https://your-credential-url.com',
            image: '/path-to-certificate-image.jpg', // Add your certificate image
            icon: <FaCertificate className="text-blue-400" />
        },


        {
            type: 'certificate',
            title: 'Java',
            organization: 'Digital School / Shkolla Digjitale',
            date: '2024',
            credentialUrl: 'https://your-credential-url.com',
            image: '/path-to-certificate-image.jpg', // Add your certificate image
            icon: <FaCertificate className="text-blue-400" />
        },
        // Add more certificates here
    ];

    const allItems = [...achievements, ...certificates];
    const filteredItems = selectedCategory === 'all' 
        ? allItems 
        : allItems.filter(item => item.type === selectedCategory);

    const itemsToShow = isExpanded ? filteredItems : filteredItems.slice(0, 6);
    const hasMore = filteredItems.length > 6;

    return (
        <section className="bg-[#0e1420] text-white py-16 section-transition" id="achievements">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-accent uppercase tracking-wider mb-4 text-sm">RECOGNITION</p>
                    <h2 className="text-4xl font-bold mb-4">Achievements & Certificates</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Milestones and certifications that mark my journey in tech.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    {['all', 'achievement', 'certificate'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-accent text-white'
                                    : 'bg-[#131B2E]/50 text-gray-400 hover:bg-accent/10'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itemsToShow.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#131B2E]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-1">{item.organization}</p>
                                    <p className="text-xs text-gray-500">{item.date}</p>
                                    
                                    {item.type === 'certificate' && (
                                        <a
                                            href={item.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:text-accent/80 transition-colors"
                                        >
                                            View Credential
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    
                                    {item.type === 'achievement' && item.description && (
                                        <p className="mt-3 text-sm text-gray-400">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {hasMore && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-[#131B2E]/50 text-accent hover:bg-accent/10 transition-all duration-300 border border-white/5 hover:border-accent/30"
                        >
                            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                            <svg 
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Achievements;
