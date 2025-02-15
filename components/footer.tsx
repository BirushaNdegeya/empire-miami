import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-background text-foreground py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">
              Empire<span className="text-primary">Miami</span>
            </h1>
            <p className="text-sm mt-2">L'élégance au sommet du luxe.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center border-t border-border pt-6">
          {/* Copyright */}
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} Empire Miami. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61570557058232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/williammasivi?igsh=dDFycWQ0cW9mM3hj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/WMasivi54623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
