import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Building,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const Contact = () => {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9302757694',
      subtext: 'Mon - Sat: 9 AM to 6 PM',
      link: 'tel:+919302757694',
      actionText: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ecomprimehandlers04@gmail.com',
      subtext: 'Online support & inquiries',
      link: 'mailto:ecomprimehandlers04@gmail.com',
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jabalpur, Madhya Pradesh',
      subtext: 'India - Serving sellers nationwide',
      link: 'https://maps.google.com/?q=Jabalpur,+Madhya+Pradesh',
      actionText: 'Open in Maps',
      external: true,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Saturday: 9 AM - 6 PM',
      subtext: 'Sunday: Closed',
    },
  ];

  const serviceOptions = [
    'Amazon Account Management',
    'Flipkart Growth Management',
    'Meesho Cataloging & Sales',
    'Product Listing Optimization & SEO',
    'Performance PPC & Ads Management',
    'FBA Support & Inventory Planning',
    'A+ Content & Graphic Design',
    'GST / Trademark / Brand Registry',
    'Complete E-commerce Support Package',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      <main className="grow">
        {/* PAGE HEADER */}
        <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
          <div
            className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4">
              Get In Touch
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Contact Ecomprime Handlers
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions about selling on Amazon, Flipkart, or Meesho? Contact us today for a consultation or free store catalog audit.
            </p>
          </div>
        </section>

        {/* CONTACT INFORMATION CARDS */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4 border border-amber-200">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {card.title}
                      </h2>
                      <p className="text-base font-bold text-slate-900 break-words">
                        {card.value}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {card.subtext}
                      </p>
                    </div>

                    {card.link && (
                      <div className="mt-5 pt-3 border-t border-slate-200/60">
                        <a
                          href={card.link}
                          target={card.external ? '_blank' : undefined}
                          rel={card.external ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                        >
                          <span>{card.actionText}</span>
                          {card.external ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <span aria-hidden="true">&rarr;</span>
                          )}
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FORM & MAP / LOCATION SECTION */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* CONTACT FORM COLUMN */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-2">
                      Inquiry Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fill out the details below and our team will get back to you promptly.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-emerald-950">
                        Thank You! Your Inquiry Has Been Received.
                      </h3>
                      <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                        We have received your message regarding{' '}
                        <strong className="font-semibold">{formData.service}</strong>. An Ecomprime Handlers specialist will review your request and contact you at{' '}
                        <span className="font-semibold">{formData.phone}</span> /{' '}
                        <span className="font-semibold">{formData.email}</span> shortly.
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-6 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-sm font-semibold transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor={nameId}
                            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                          >
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id={nameId}
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g. Rajesh Kumar"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-colors ${
                              errors.name
                                ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                                : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor={emailId}
                            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                          >
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            id={emailId}
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="name@example.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-colors ${
                              errors.email
                                ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                                : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Service Required Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor={phoneId}
                            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                          >
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id={phoneId}
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+91 9302757694"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-colors ${
                              errors.phone
                                ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                                : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                            }`}
                          />
                          {errors.phone && (
                            <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor={serviceId}
                            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                          >
                            Service Required <span className="text-rose-500">*</span>
                          </label>
                          <select
                            id={serviceId}
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-hidden transition-colors bg-white ${
                              errors.service
                                ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                                : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                            }`}
                          >
                            <option value="">Select a service...</option>
                            {serviceOptions.map((opt, idx) => (
                              <option key={idx} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.service}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor={messageId}
                          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                        >
                          Message / Store Details <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id={messageId}
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Tell us about your current store, active products, marketplaces, or specific requirements..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-colors resize-y ${
                            errors.message
                              ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                              : 'border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all shadow-md hover:shadow-lg hover:shadow-amber-500/20"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </button>

                      <p className="text-center text-xs text-slate-500">
                        We value your privacy. No spam. Fast response within 24 business hours.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* MAP & LOCATION COLUMN */}
              <div className="lg:col-span-5 space-y-6">
                {/* Location Box with Map Embed */}
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Head Office Location</h3>
                        <p className="text-xs text-slate-500">Jabalpur, Madhya Pradesh</p>
                      </div>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Jabalpur,+Madhya+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                      title="Open Jabalpur in Google Maps"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Responsive Map Embed */}
                  <div className="relative w-full h-72 bg-slate-100">
                    <iframe
                      title="Ecomprime Handlers Office Location Jabalpur"
                      src="https://maps.google.com/maps?q=Jabalpur%2C%20Madhya%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Registered City</p>
                        <p className="text-xs text-slate-500">Jabalpur, Madhya Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Hours of Operation</p>
                        <p className="text-xs text-slate-500">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-xs text-rose-500 font-medium">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://maps.google.com/?q=Jabalpur,+Madhya+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>Open Jabalpur in Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Assistance Callout */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Direct Seller Helpline</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Need immediate help with catalog suspensions, listing errors, or ad setup? Call our support desk directly.
                      </p>
                      <div className="mt-3">
                        <a
                          href="tel:+919302757694"
                          className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>+91-9302757694</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
