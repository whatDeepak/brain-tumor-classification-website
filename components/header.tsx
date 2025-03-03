"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { motion } from "motion/react"

export default function Header() {
  return (
    <header className="container mx-auto px-32 py-8 flex items-center justify-between">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="NeuroX Logo" 
            width={180} 
            height={50}
            className="h-12 w-auto"
          />
        </Link>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        className="hidden md:flex items-center gap-10"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {["Technology", "About Us", "News", "Careers"].map((item, index) => (
          <motion.div 
            key={item}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={`#${item.toLowerCase().replace(" ", "")}`} className="text-white hover:text-gray-300 transition-colors">
              {item}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Right-side Actions */}
      <motion.div 
        className="flex items-center gap-6"
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link 
            href="#get-started" 
            className="bg-white text-black px-4 py-2 rounded hover: transition-colors font-medium"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </header>
  )
}
