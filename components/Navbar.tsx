"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/projects", label: "Projects" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="z-50">
      <div className="navbar bg-white flex items-center justify-between px-5 md:px-20 py-1 bg-neutral bg-opacity-35 backdrop-blur-3xl fixed w-full z-10">
        <div className="logo w-16">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/logo.png" alt="Logo" width={64} height={64} />
            </motion.div>
          </Link>
        </div>
        
        <nav className="navlinks hidden md:flex gap-10">
          <ul className="flex gap-10">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <Link href={item.href} className="py-2 px-1">
                  <span className="relative z-10">{item.label}</span>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light"
                      layoutId="underline"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden text-black text-2xl"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.div>
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          className="mobile-menu md:hidden bg-white bg-opacity-35 backdrop-blur-xl w-full px-5 py-2 fixed top-16 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="block w-full py-2 px-4 rounded-lg hover:bg-black/5 transition-colors duration-200"
                >
                  <motion.span
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;