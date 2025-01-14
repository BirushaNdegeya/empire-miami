// src/components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">
              Empire<span className="text-blue-600">Miami</span>
            </h1>
            <p className="text-sm mt-2">Luxury Services Redefined</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Empire Miami. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692V10.79h3.118V8.412c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.243h-1.917c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.915h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.069-4.851.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.583 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.013 7.052.071 5.77.13 4.579.413 3.515 1.477 2.451 2.541 2.168 3.732 2.109 5.014 2.051 6.294 2.038 6.698 2.038 12c0 5.302.013 5.706.071 6.986.059 1.282.342 2.473 1.406 3.537 1.064 1.064 2.255 1.347 3.537 1.406 1.28.058 1.684.071 6.986.071s5.706-.013 6.986-.071c1.282-.059 2.473-.342 3.537-1.406 1.064-1.064 1.347-2.255 1.406-3.537.058-1.28.071-1.684.071-6.986s-.013-5.706-.071-6.986c-.059-1.282-.342-2.473-1.406-3.537C20.059.755 18.868.472 17.586.413 16.306.355 15.902.342 12 .342z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.444 4.834c-.81.36-1.68.61-2.594.722a4.478 4.478 0 001.968-2.48 8.862 8.862 0 01-2.835 1.084 4.423 4.423 0 00-7.532 4.026A12.56 12.56 0 011.64 3.165 4.423 4.423 0 003.035 9.7a4.385 4.385 0 01-2.004-.552v.06a4.426 4.426 0 003.55 4.33 4.4 4.4 0 01-1.998.076 4.43 4.43 0 004.14 3.074A8.877 8.877 0 010 19.54a12.528 12.528 0 006.79 1.977c8.145 0 12.6-6.75 12.6-12.6 0-.19-.004-.38-.013-.57a9.005 9.005 0 002.216-2.283z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
