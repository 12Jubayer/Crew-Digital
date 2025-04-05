import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          যোগাযোগ
        </motion.h1>
      </div>
    </div>
  );
};

export default Contact;