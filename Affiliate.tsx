import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Affiliate = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          অ্যাফিলিয়েট প্রোগ্রাম
        </motion.h1>

        <div className="max-w-md mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex mb-8">
              <button
                className={`flex-1 py-2 text-center ${isLogin ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
                onClick={() => setIsLogin(true)}
              >
                লগইন
              </button>
              <button
                className={`flex-1 py-2 text-center ${!isLogin ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
                onClick={() => setIsLogin(false)}
              >
                রেজিস্টার
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      নাম
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      ফোন নাম্বার
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                </>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                  পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                {isLogin ? 'লগইন করুন' : 'রেজিস্টার করুন'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;