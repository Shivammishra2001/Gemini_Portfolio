'use client';

import { motion, type Variants } from 'framer-motion';
import { Code, Cpu, Users, Database, Cloud, Microchip, Brain } from 'lucide-react';
import { getConfig } from '@/lib/config-loader';
import { Tilt } from '@/components/tilt';

const Skills = () => {
  // Get skills from configuration
  const config = getConfig();

  // Transform skills data with icons
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: config.skills.programming,
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      category: 'AI & Tooling',
      icon: <Brain className="h-5 w-5" />,
      skills: config.skills.ml_ai,
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      category: 'Web Development',
      icon: <Cpu className="h-5 w-5" />,
      skills: config.skills.web_development,
      color: 'bg-green-500/10 text-green-500',
    },
    {
      category: 'Databases',
      icon: <Database className="h-5 w-5" />,
      skills: config.skills.databases,
      color: 'bg-orange-500/10 text-orange-500',
    },
    {
      category: 'Tools & Platforms',
      icon: <Cloud className="h-5 w-5" />,
      skills: config.skills.devops_cloud,
      color: 'bg-sky-500/10 text-sky-500',
    },
    {
      category: 'IoT & Hardware',
      icon: <Microchip className="h-5 w-5" />,
      skills: config.skills.iot_hardware,
      color: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      category: 'Practices & Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: config.skills.soft_skills,
      color: 'bg-amber-500/10 text-amber-500',
    },
  ].filter((category) => category.skills && category.skills.length > 0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-8 w-full max-w-5xl"
    >
      <div className="bg-accent w-full rounded-3xl px-4 py-6 font-sans sm:px-8 sm:py-8 md:px-12 md:py-10">
        <div className="mb-6">
          <h2 className="text-foreground text-2xl font-semibold sm:text-3xl md:text-4xl">
            Skills &amp; Expertise
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            What I work with every day.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((section) => (
            <Tilt
              key={section.category}
              variants={itemVariants}
              max={5}
              className={`bg-background rounded-2xl border p-4 sm:p-5 ${
                section.skills.length > 8 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${section.color}`}
                >
                  {section.icon}
                </span>
                <h3 className="text-foreground text-base font-semibold sm:text-lg">
                  {section.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background rounded-full border px-3 py-1 text-xs transition-colors sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
