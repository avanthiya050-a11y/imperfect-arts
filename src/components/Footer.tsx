import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sage text-white mt-24 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Imperfect Arts</h3>
            <p className="text-white/80 text-sm">
              Premium handmade gifts and artisan products crafted with love and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections/Clay Creations" className="hover:text-gold transition-colors">Clay Creations</Link></li>
              <li><Link to="/collections/Resin Studio" className="hover:text-gold transition-colors">Resin Studio</Link></li>
              <li><Link to="/collections/Bead Boutique" className="hover:text-gold transition-colors">Bead Boutique</Link></li>
              <li><Link to="/collections/Paint Studio" className="hover:text-gold transition-colors">Paint Studio</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">FAQs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Refund Policy</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Shipping Policy</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" />
                <a href="tel:6364352654" className="hover:text-gold transition-colors">6364352654</a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" />
                <a href="mailto:imperfectartss@gmail.com" className="hover:text-gold transition-colors">imperfectartss@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-sm text-white/70">
            <p>&copy; 2024 Imperfect Arts. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
