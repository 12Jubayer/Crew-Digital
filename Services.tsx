import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Gamepad, ShoppingBag, Globe, Facebook, Youtube } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "ওয়েব ডেভেলপমেন্ট",
      description: "MERN স্ট্যাক ব্যবহার করে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করি। রিয়েক্ট, নোড.জেএস, এক্সপ্রেস, এবং মঙ্গোডিবি ব্যবহার করে সম্পূর্ণ ফুল-স্ট্যাক সমাধান প্রদান করি।"
    },
    {
      icon: Smartphone,
      title: "অ্যাপ ডেভেলপমেন্ট",
      description: "রিয়েক্ট নেটিভ এবং ফ্লাটার ব্যবহার করে আধুনিক মোবাইল অ্যাপ্লিকেশন তৈরি করি। আইওএস এবং অ্যান্ড্রয়েড উভয় প্ল্যাটফর্মের জন্য অ্যাপ ডেভেলপমেন্ট সেবা প্রদান করি।"
    },
    {
      icon: Gamepad,
      title: "গেম ডেভেলপমেন্ট",
      description: "ইউনিটি এবং আনরিয়েল ইঞ্জিন ব্যবহার করে আকর্ষণীয় গেম তৈরি করি। 2D এবং 3D গেম ডেভেলপমেন্ট সেবা প্রদান করি।"
    },
    {
      icon: ShoppingBag,
      title: "গেমিং টপ-আপ সার্ভিস",
      description: "PUBG UC, PUBG ID, Free Fire ডায়মন্ড, Free Fire ID সহ বিভিন্ন গেমিং টপ-আপ সার্ভিস প্রদান করি।"
    },
    {
      icon: Globe,
      title: "SEO সার্ভিস",
      description: "আপনার ওয়েবসাইটের র‍্যাঙ্কিং বাড়ানোর জন্য পেশাদার SEO সেবা প্রদান করি। অন-পেজ এবং অফ-পেজ SEO সহ সম্পূর্ণ সমাধান।"
    },
    {
      icon: Facebook,
      title: "সোশ্যাল মিডিয়া মার্কেটিং",
      description: "ফেসবুক এবং ইনস্টাগ্রাম বিজ্ঞাপন, ফলোয়ার বৃদ্ধি, পেজ লাইক বৃদ্ধি সহ সম্পূর্ণ সোশ্যাল মিডিয়া মার্কেটিং সেবা।"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          আমাদের সেবাসমূহ
        </motion.h1>

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
    </div>
  );
};

export default Services;