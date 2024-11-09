import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import {
  Home,
  History,
  Settings,
  Menu,
  X,
  PenTool
} from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <Home className="w-4 h-4" /> 
    },
    { 
      name: 'History', 
      path: '/history', 
      icon: <History className="w-4 h-4" /> 
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: <Settings className="w-4 h-4" /> 
    },
  ];

  const isActivePath = (path: string) => {
    return router.pathname === path;
  };

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="w-6 h-6" />
            <span className="font-bold text-xl">Blog Rewriter AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActivePath(item.path) ? "secondary" : "ghost"}
                onClick={() => router.push(item.path)}
                className="flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.name}</span>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={isActivePath(item.path) ? "secondary" : "ghost"}
                  onClick={() => {
                    router.push(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full justify-start"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;