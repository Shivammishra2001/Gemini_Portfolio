import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Shivam Mishra - Full Stack Software Engineer | Professional Portfolio",
    template: "%s | Shivam Mishra Portfolio"
  },
  description: "Professional portfolio of Shivam Mishra - Full Stack Software Engineer. 3+ years engineering secure, scalable enterprise systems with .NET Core, C#, SQL Server and Strapi CMS.",
  keywords: ["Shivam Mishra","Full Stack Software Engineer","ASP.NET Core","C#","Entity Framework","SQL Server","REST API","Full-stack Developer","Developer Portfolio"],
  authors: [
    {
      name: "Shivam Mishra",
      url: "https://your-domain.com/",
    },
  ],
  creator: "Shivam Mishra",
  publisher: "Shivam Mishra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com/",
    title: "Shivam Mishra - Full Stack Software Engineer | Professional Portfolio",
    description: "Professional portfolio of a Full Stack Software Engineer: enterprise systems, REST APIs and SaaS products.",
    siteName: "Shivam Mishra Portfolio",
    images: [
      {
        url: "https://localhost:3000/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Shivam Mishra - Professional Portfolio with AI Chatbot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Mishra - Full Stack Software Engineer",
    description: "Professional portfolio of a Full Stack Software Engineer: enterprise systems, REST APIs and SaaS products.",
    creator: "@shivam1301",
    site: "@shivam1301",
    images: [{
      url: "https://localhost:3000/portfolio.png",
      alt: "Shivam Mishra Professional Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://your-domain.com/",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://your-domain.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shivam Mishra",
              "jobTitle": "Full Stack Software Engineer",
              "url": "https://your-domain.com/",
              "image": "https://your-domain.com/profile.jpeg",
              "sameAs": ["https://github.com/Shivammishra2001", "https://linkedin.com/in/shivam1301"],
              "worksFor": {
                "@type": "Organization",
                "name": "ROI Mantra"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Millennium Institute of Technology and Science"
              },
              "knowsAbout": [".NET Core","ASP.NET MVC","C#","Entity Framework Core","SQL Server","REST APIs","JavaScript"],
              "description": "Full Stack Software Engineer experienced in secure, scalable web applications with ASP.NET Core and SQL Server."
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}