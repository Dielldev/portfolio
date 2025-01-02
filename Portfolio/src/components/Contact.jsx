import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-[#0e1420] text-white py-16 section-transition" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <p className="text-accent uppercase tracking-wider mb-4 text-sm">GET IN TOUCH</p>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          </div>

          {/* Simple Contact Message */}
          <p className="text-gray-400 text-lg mb-6">
            Want to chat? Just shoot me an email with a direct question at
          </p>
          
          {/* Email Link */}
          <a 
            href="mailto:diellgovori9@gmail.com"
            className="text-accent hover:text-accent/80 transition-colors duration-300 text-lg font-medium"
          >
            diellgovori9@gmail.com
          </a>
          
          <p className="text-gray-400 text-lg mt-6">
            and I'll respond whenever I can.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;