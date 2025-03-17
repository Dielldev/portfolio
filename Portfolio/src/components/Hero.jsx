import '../styles/Hero.css';
import '../styles/Transitions.css';
import pfp from '../assets/images/pfp.png'
import { FaReact, FaNode, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiLaravel  } from 'react-icons/si';

const Hero = () => {
  const techStack = [
    { name: "React", icon: <FaReact className="tech-icon" /> },
    { name: "JavaScript", icon: <SiJavascript className="tech-icon" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="tech-icon" /> },
    { name: "Python", icon: <FaPython className="tech-icon" /> },
    { name: "Node", icon: <FaNode className="tech-icon" /> },
    { name: "Java", icon: <FaJava className="tech-3icon" /> },
    { name: "Laravel", icon: <SiLaravel className="tech-icon" /> }
    
  ];

  return (
    <div className="hero-container section-transition" id="home">
      <div className="stars-background">
        {techStack.map((tech, i) => (
          <div key={i} className={`star star-${i + 1}`}>
            {tech.icon}
            <span className="tech-label">{tech.name}</span>
          </div>
        ))}
      </div>
      
      <div className="circle-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`circle circle-${i + 1}`} />
        ))}
      </div>




      <div className="content">
      <div className="profile-image">
          <img src={ pfp } alt="Profile" />
        </div>
        

        <h1 className="text-7xl font-bold">Hi, I'm<br />Diell Govori</h1>
        
        <p>
          I specialize in transforming designs into functional, high-performing 
          web applications. Let's discuss your next project.
        </p>

        <div className="cta-buttons">
        <a href="#projects"><button className="btn primary">Explore My Work</button></a> 
        <a href="#contact"><button className="btn secondary">Let's Connect</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero