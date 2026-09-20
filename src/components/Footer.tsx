import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 text-white font-bold text-xl tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight">Ecomprime</span>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest leading-none">
                  Handlers
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              E-commerce service provider specializing in account management, cataloging, marketing, and sales growth across Amazon, Flipkart, and Meesho.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-amber-400 text-xs font-medium border border-slate-700">
              <span>Your Store, Our Strategy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-slate-400"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <a href="tel:+919302757694" className="hover:text-amber-400 transition-colors">
                  +91-9302757694
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <a
                  href="mailto:ecomprimehandlers04@gmail.com"
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  ecomprimehandlers04@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Jabalpur, Madhya Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Working Hours</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <p className="text-slate-200 font-medium">Monday - Saturday</p>
                  <p className="text-slate-400 text-xs">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="pl-7">
                <p className="text-slate-400 font-medium">Sunday</p>
                <p className="text-rose-400 text-xs font-medium">Closed</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium hover:underline"
                >
                  <span>Get Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Ecomprime Handlers. All rights reserved.</p>
          <p className="text-slate-500">Professional Amazon, Flipkart & Meesho Account Management</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
