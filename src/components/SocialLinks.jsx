import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="relative w-full flex flex-col items-center mt-12 px-8"
    >
      {/* Project Links - Shifted Right to Align with Contact Form */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="absolute -top-20 left-[20%] transform -translate-x-1/2 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20"
      >
        <h3 className="text-white text-2xl font-bold mb-4">🚀 Project Links</h3>
        <ul className="text-white space-y-3">
          <li>
            🔗 <a href="https://yourproject1.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300 text-lg font-medium">
              Portfolio
            </a>
          </li>
          <li>
            🔗 <a href="https://yourproject2.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300 text-lg font-medium">
              Project 2
            </a>
          </li>
          <li>
            🔗 <a href="https://yourproject3.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300 text-lg font-medium">
              Project 3
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Social Media Links - Floating Card on Bottom Right */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 flex flex-col items-center gap-4"
      >
        <h3 className="text-white text-xl font-bold">📢 Connect with Me</h3>
        <div className="flex gap-4">
          <a href="https://github.com/teswarreddy" target="_blank" rel="noopener noreferrer">
            <FaGithub size={45} className="text-white hover:text-gray-400 transition duration-300 transform hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/t-eswarreddy-05b2b3353" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={45} className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-125" />
          </a>
          <a href="https://www.instagram.com/eswar_abbu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={45} className="text-white hover:text-pink-400 transition duration-300 transform hover:scale-125" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;
