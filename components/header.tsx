"use client";
import { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./logo";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-background text-foreground z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Logo />
        <Link href="/" className="text-2xl font-bold">
          Empire<span className="text-primary">Miami</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-foreground hover:text-primary transition"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="text-foreground hover:text-primary transition"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          variant="outline"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <AlignJustify />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-background text-foreground shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-foreground hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-foreground hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
