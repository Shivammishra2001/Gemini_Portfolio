'use client';

import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, Code2, Globe, Mail, Sparkles, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getConfig } from '@/lib/config-loader';
import { Tilt } from '@/components/tilt';

// Kept for compatibility with the chat tool result; the card reads from the config.
interface AvailabilityCardProps {
  data?: unknown;
}

const AvailabilityCard = ({ data }: AvailabilityCardProps) => {
  void data;
  const router = useRouter();
  const config = getConfig();
  const experience = config.experience;
  const techStack = [
    ...config.skills.programming.slice(0, 3),
    ...config.skills.web_development.slice(0, 5),
    ...config.skills.databases.slice(0, 2),
    ...config.skills.devops_cloud.slice(0, 3),
  ];

  const handleContactClick = () => {
    // Navigate to home page with the contact preset question
    router.push('/?query=How can I reach you?');
  };

  const tiles = [
    {
      label: 'Status',
      value: 'Open to new opportunities',
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-green-500/10 text-green-500',
    },
    {
      label: 'Looking for',
      value: 'Full-time roles & Contract work',
      icon: <Target className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      label: 'Availability',
      value: 'Full-time roles (currently at ROI Mantra)',
      icon: <CalendarDays className="h-5 w-5" />,
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      label: 'Location',
      value: `${config.personal.location} · Remote or on-site`,
      icon: <Globe className="h-5 w-5" />,
      color: 'bg-rose-500/10 text-rose-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-4 py-6 font-sans sm:px-8 sm:py-8 md:px-12 md:py-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-muted ring-background h-16 w-16 shrink-0 overflow-hidden rounded-full shadow-md ring-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpeg"
              alt="Shivam's avatar"
              className="h-full w-full scale-95 object-cover object-[center_top_-5%]"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">{config.personal.name}</h2>
            <p className="text-muted-foreground text-sm">{config.personal.title}</p>
          </div>
        </div>

        <span className="bg-background flex items-center gap-2 rounded-full border border-green-500/60 px-4 py-1.5 text-sm font-medium text-green-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Open to Work
        </span>
      </div>

      {/* Status tiles */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {tiles.map((tile) => (
          <Tilt
            key={tile.label}
            max={6}
            className="bg-background flex items-center gap-3 rounded-2xl border p-3 sm:p-4"
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tile.color}`}
            >
              {tile.icon}
            </span>
            <span className="min-w-0">
              <span className="text-muted-foreground block text-xs">{tile.label}</span>
              <span className="text-foreground block text-sm font-medium break-words">
                {tile.value}
              </span>
            </span>
          </Tilt>
        ))}
      </div>

      {/* Tech stack */}
      <div className="bg-background mt-3 rounded-2xl border p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
            <Code2 className="h-5 w-5" />
          </span>
          <h3 className="text-foreground text-base font-semibold">Tech stack</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {techStack.map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground rounded-full border px-3 py-1 text-xs sm:text-sm"
            >
              {skill}
            </span>
          ))}
          <a
            href="/?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
            className="rounded-full border border-blue-500/40 px-3 py-1 text-xs text-blue-500 hover:bg-blue-500/10 sm:text-sm"
          >
            See more →
          </a>
        </div>
      </div>

      {/* What I bring + Goal */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="bg-background rounded-2xl border p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="text-foreground text-base font-semibold">What I bring</h3>
          </div>
          <ul className="text-foreground/90 list-disc space-y-1.5 pl-5 text-sm">
            {experience[0] && (
              <li>
                {experience[0].position} at {experience[0].company} ({experience[0].duration})
              </li>
            )}
            {config.education.achievements.slice(0, 2).map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-2xl border p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="text-foreground text-base font-semibold">Goal</h3>
          </div>
          <p className="text-foreground/90 text-sm leading-relaxed">
            {config.internship.goals} I&apos;m a strong problem solver and team player, ready to
            contribute to collaborative, innovative teams! 🚀
          </p>
        </div>
      </div>

      {/* Contact button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleContactClick}
          className="bg-foreground text-background hover:bg-foreground/85 flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors duration-300"
        >
          <Mail className="h-4 w-4" />
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
