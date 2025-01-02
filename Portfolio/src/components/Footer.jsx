import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: 'Github', href: 'https://github.com/Dielldev', icon: '↗' },
    { name: 'VSCO', href: 'https://vsco.co/diellgovorii/gallery', icon: '↗' },
    { name: 'Instagram', href: 'https://www.instagram.com/diellgovori/', icon: '↗' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/diell-govori-3a32b528b/', icon: '↗' },
  ];

  return (
    <footer className="relative w-full bg-[#0e1420] border-t border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-xs"
          >
            © {new Date().getFullYear()}. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-accent transition-colors text-xs flex items-center gap-1 group"
              >
                {link.name}
                <span className="text-xs group-hover:translate-x-0.5 transition-transform">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
