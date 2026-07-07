import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Get in touch with Imperfect Arts</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Phone, label: 'Phone', value: '6364352654', href: 'tel:6364352654' },
            { icon: Mail, label: 'Email', value: 'imperfectartss@gmail.com', href: 'mailto:imperfectartss@gmail.com' },
            { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka, India', href: '#map' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory rounded-3xl p-8 card-shadow text-center hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-brown" />
                <p className="font-serif font-bold text-text text-lg mb-2">{item.label}</p>
                <p className="text-text-light">{item.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-3xl p-8 text-white text-center card-shadow">
            <MessageSquare className="w-12 h-12 mx-auto mb-4" />
            <h2 className="font-serif font-bold text-2xl mb-3">Chat with us on WhatsApp</h2>
            <p className="mb-6 text-white/90">Get instant support and answers to your questions</p>
            <a
              href="https://wa.me/916364352654"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors inline-block"
            >
              Message on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-serif font-bold text-2xl text-text mb-6">Send us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="input-field"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="input-field h-32 resize-none"
              required
            />
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          <div>
            <h2 className="font-serif font-bold text-2xl text-text mb-6">Find Us</h2>
            <div className="rounded-3xl overflow-hidden h-96 card-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890123!2d77.6245!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d53c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
