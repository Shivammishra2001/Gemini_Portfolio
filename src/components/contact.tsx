'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { contactInfo, getConfig } from '@/lib/config-loader';
import { Tilt } from '@/components/tilt';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="h-5 w-5" />,
  GitHub: <Github className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
};

export function Contact() {
  const config = getConfig();

  const items = [
    {
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: <Mail className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-500',
      wide: true,
    },
    contactInfo.phone && {
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      icon: <Phone className="h-5 w-5" />,
      color: 'bg-green-500/10 text-green-500',
    },
    {
      label: 'Location',
      value: config.personal.location,
      icon: <MapPin className="h-5 w-5" />,
      color: 'bg-rose-500/10 text-rose-500',
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href?: string;
    icon: React.ReactNode;
    color: string;
    wide?: boolean;
  }[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-8 w-full"
    >
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-4 py-6 font-sans sm:px-10 sm:py-8 md:px-14 md:py-10">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-semibold sm:text-3xl md:text-4xl">
              Let&apos;s connect
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Open to new opportunities. Reach out any time.
            </p>
          </div>
          <span className="bg-background text-muted-foreground w-fit rounded-full border px-3 py-1 text-sm">
            {contactInfo.handle}
          </span>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => {
            const content = (
              <>
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-muted-foreground block text-xs">{item.label}</span>
                  <span className="text-foreground block text-sm font-medium break-words sm:text-base">
                    {item.value}
                  </span>
                </span>
                {item.href && (
                  <ArrowUpRight className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </>
            );

            const base =
              'bg-background group flex h-full items-center gap-3 rounded-2xl border p-3 sm:p-4 transition-colors duration-200';

            return (
              <Tilt key={item.label} className={item.wide ? 'sm:col-span-2' : ''}>
                {item.href ? (
                  <a href={item.href} className={`${base} hover:border-foreground/30 hover:shadow-lg`}>
                    {content}
                  </a>
                ) : (
                  <div className={base}>{content}</div>
                )}
              </Tilt>
            );
          })}
        </div>

        {/* Social links */}
        {contactInfo.socials.length > 0 && (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background hover:bg-foreground/85 group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {SOCIAL_ICONS[social.name] ?? <Globe className="h-5 w-5" />}
                {social.name}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Contact;
