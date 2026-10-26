'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { resumeDetails } from '@/lib/config-loader';

export function Resume() {
  // Resume details loaded from configuration

  const handleOpen = () => {
    window.open(resumeDetails.downloadUrl, '_blank');
  };

  const meta = [
    resumeDetails.fileType,
    resumeDetails.lastUpdated && `Updated ${resumeDetails.lastUpdated}`,
    resumeDetails.fileSize,
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-8 w-full font-sans"
    >
      <div className="bg-accent w-full rounded-3xl px-4 py-5 sm:px-8 sm:py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <FileText className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h3 className="text-foreground text-lg font-semibold sm:text-xl">
                {resumeDetails.title}
              </h3>
              <p className="text-muted-foreground text-sm">{resumeDetails.description}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {meta.map((m) => (
                  <span
                    key={m as string}
                    className="bg-background text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 sm:shrink-0">
            <button
              onClick={handleOpen}
              className="bg-background text-foreground hover:bg-background/70 flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors sm:flex-none"
            >
              <ExternalLink className="h-4 w-4" />
              Open
            </button>
            <a
              href={resumeDetails.downloadUrl}
              download
              className="bg-foreground text-background hover:bg-foreground/85 flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:flex-none"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="bg-background mt-5 h-[420px] w-full overflow-hidden rounded-2xl border sm:h-[600px]">
          <iframe
            src={resumeDetails.downloadUrl}
            width="100%"
            height="100%"
            className="border-0"
            title="Resume Preview"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
