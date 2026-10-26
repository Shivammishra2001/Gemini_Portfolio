'use client';

import { motion, type Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { profileInfo } from '@/lib/config-loader';
import { Tilt } from '@/components/tilt';

export function Presentation() {
  // Personal information now loaded from configuration
  const profile = profileInfo;

  // Animation variants for text elements
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-5xl font-sans">
      <div className="bg-accent rounded-3xl px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:items-start">
          {/* Image section */}
          <Tilt max={10} className="relative mx-auto aspect-square w-full max-w-xs md:max-w-none">
            <div className="ring-background relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-4">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="h-full w-full"
              >
                <Image
                  src={profile.src}
                  alt={profile.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = profile.fallbackSrc;
                  }}
                />
              </motion.div>
            </div>
          </Tilt>

          {/* Text content section */}
          <div className="flex flex-col">
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
              <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                {profile.name}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {profile.age && (
                  <span className="bg-background text-muted-foreground rounded-full border px-3 py-1 text-sm">
                    {profile.age}
                  </span>
                )}
                <span className="bg-background text-muted-foreground flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-rose-500" />
                  {profile.location}
                </span>
              </div>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={paragraphAnimation}
              className="text-foreground/90 mt-5 leading-relaxed whitespace-pre-line"
            >
              {profile.description}
            </motion.p>

            {/* Tags/Keywords */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {['Full Stack Engineer', '.NET Core', 'C#', 'React.js', 'SQL Server'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-background text-foreground rounded-full border px-3 py-1 text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
