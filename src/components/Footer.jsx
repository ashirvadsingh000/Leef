import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              We provide innovative tech solutions for modern problems. Follow us to stay updated with the latest trends in technology and design.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="/services" className="hover:text-white">Services</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Tech Street, Barabanki, uttar pradesh India</p>
            <p className="mb-2">Email:adrakshtech@gmail.com</p>
            <p className="mb-2">Phone: +1 234 567 890</p>
          </div>
          
          {/* Social Media Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="hover:text-white"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="hover:text-white"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-white"><FaLinkedin size={24} /></a>
              <a href="https://github.com" className="hover:text-white"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} aShi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
