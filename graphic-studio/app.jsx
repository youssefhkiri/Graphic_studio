import React from 'react';
import { motion } from 'framer-motion';
import { Gallery } from 'react-grid-gallery';
import { Button } from '@/components/ui/button';

const images = [
  { src: '/images/clothes1.jpg', thumbnail: '/images/clothes1_thumb.jpg', caption: 'Streetwear Collection' },
  { src: '/images/logo1.jpg', thumbnail: '/images/logo1_thumb.jpg', caption: 'Minimal Logo Design' },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-center my-6">
        Graphic Studio
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-center text-lg mb-10">
        Showcasing Creative Clothing Lines and Logo Designs
      </motion.p>
      <Gallery images={images} enableImageSelection={false} />
      <div className="mt-10 text-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="outline" className="p-4 text-lg">Contact Me</Button>
        </motion.div>
      </div>
    </div>
  );
}
