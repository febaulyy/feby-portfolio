import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h3 className="text-lg font-bold mb-4 text-center">Contact Us</h3>
        
        {/* Contact Email */}
        <div className="flex items-center space-x-2 mb-2">
          <FaEnvelope size={18} />
          <p className="text-sm">DivaFeby@gmail.com</p>
        </div>
        
        {/* Contact Phone */}
        <div className="flex items-center space-x-2 mb-2">
          <FaPhone size={18} />
          <p className="text-sm">123-456-789</p>
        </div>

        {/* Contact Address */}
        <div className="flex items-center space-x-2 mb-2">
          <FaMapMarkerAlt size={18} />
          <p className="text-sm">Bandung</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com/febaulyy_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.whatsapp.com/0881-0243-75951" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://github.com/febaulyy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Copyright Diva Feby</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
