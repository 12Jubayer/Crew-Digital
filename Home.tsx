import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, Youtube, Facebook, Instagram, Smartphone, ShoppingBag } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
          >
            ক্রু ডিজিটাল
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            আপনার ডিজিটাল সাফল্যের সর্বোত্তম সহযোগী
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <HashLink
              smooth
              to="#services"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              আমাদের সেবাসমূহ
              <ArrowRight className="w-5 h-5" />
            </HashLink>
            <HashLink
              smooth
              to="/contact"
              className="px-8 py-3 rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors"
            >
              যোগাযোগ করুন
            </HashLink>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
            আমাদের সেবাসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-900 border border-cyan-500/20 hover:border-cyan-500 transition-colors"
              >
                <service.icon className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: "ওয়েব ডেভেলপমেন্ট",
    description: "MERN স্ট্যাক ব্যবহার করে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি"
  },
  {
    icon: Globe,
    title: "SEO সার্ভিস",
    description: "আপনার ওয়েবসাইটের র‍্যাঙ্কিং বাড়ানোর জন্য পেশাদার SEO সেবা"
  },
  {
    icon: Facebook,
    title: "ফেসবুক মার্কেটিং",
    description: "ফেসবুক বিজ্ঞাপন এবং ফলোয়ার বৃদ্ধি সেবা"
  },
  {
    icon: Youtube,
    title: "ইউটিউব সার্ভিস",
    description: "ইউটিউব চ্যানেল বৃদ্ধি এবং ভিউ বাড়ানোর সেবা"
  },
  {
    icon: Smartphone,
    title: "অ্যাপ ডেভেলপমেন্ট",
    description: "কাস্টম মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট"
  },
  {
    icon: ShoppingBag,
    title: "গেমিং সার্ভিস",
    description: "PUBG UC, Free Fire ডায়মন্ড এবং আইডি বিক্রয়"
  }
];

export default Home;