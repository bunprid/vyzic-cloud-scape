
import React from 'react';
import { Cloud, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vyzic-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="h-8 w-8 text-vyzic-400" />
              <span className="font-bold text-2xl">Vyzic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering your business with scalable cloud solutions and cutting-edge infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Cloud Compute</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Storage Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Database Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Network Infrastructure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Security & Compliance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Data Centers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-vyzic-400" />
                <span className="text-gray-300">123 Cloud Street, Tech City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-vyzic-400" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-vyzic-400" />
                <a href="mailto:info@vyzic.com" className="text-gray-300 hover:text-white">info@vyzic.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vyzic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
