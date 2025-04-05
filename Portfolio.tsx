import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "ই-কমার্স ওয়েবসাইট",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      description: "MERN স্ট্যাক ব্যবহার করে তৈরি একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম",
      timeline: "৪-৬ সপ্তাহ",
      price: "৫০,০০০ টাকা থেকে শুরু",
      features: [
        "রেস্পন্সিভ ডিজাইন",
        "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
        "অ্যাডমিন প্যানেল",
        "ইনভেন্টরি ম্যানেজমেন্ট"
      ]
    },
    {
      title: "সোশ্যাল মিডিয়া অ্যাপ",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600",
      description: "রিয়েল-টাইম চ্যাট এবং পোস্টিং ফিচার সহ সোশ্যাল নেটওয়ার্কিং অ্যাপ্লিকেশন",
      timeline: "৮-১২ সপ্তাহ",
      price: "৮০,০০০ টাকা থেকে শুরু",
      features: [
        "রিয়েল-টাইম মেসেজিং",
        "ফাইল শেয়ারিং",
        "ইউজার প্রোফাইল",
        "নোটিফিকেশন সিস্টেম"
      ]
    },
    {
      title: "এডুটেক প্ল্যাটফর্ম",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600",
      description: "অনলাইন লার্নিং ম্যানেজমেন্ট সিস্টেম (LMS)",
      timeline: "৬-৮ সপ্তাহ",
      price: "৬০,০০০ টাকা থেকে শুরু",
      features: [
        "কোর্স ম্যানেজমেন্ট",
        "লাইভ ক্লাস সিস্টেম",
        "প্রোগ্রেস ট্র্যাকিং",
        "সার্টিফিকেট জেনারেশন"
      ]
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
          আমাদের প্রজেক্টস
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500 transition-colors"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-cyan-500">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>সময়সীমা: {project.timeline}</span>
                  </div>
                  <div className="flex items-center text-purple-500">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span>মূল্য: {project.price}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">প্রজেক্ট ফিচারস:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity">
                  বিস্তারিত জানুন
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            * প্রজেক্টের মূল্য এবং সময়সীমা প্রজেক্টের আকার ও জটিলতার উপর নির্ভর করে পরিবর্তন হতে পারে।
            <br />
            বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;