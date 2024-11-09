import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Blog Rewriter AI</h3>
            <p className="text-sm text-slate-400">
              Advanced content optimization powered by AI. Transform your content for better SEO performance and readability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-sm hover:text-white transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-sm hover:text-white transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-sm hover:text-white transition-colors">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/blogrewriter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/blogrewriter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/company/blogrewriter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@blogrewriter.ai"
                className="hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} Blog Rewriter AI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="text-sm text-slate-400 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;