import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-[#0a1e3c] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/">
              <Image 
                src="/placeholder.svg?height=150&width=150" 
                alt="Cellens Logo" 
                width={150} 
                height={150}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 mt-4">© 2023 Cellensinc.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Sitemap</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#technology" className="text-gray-300 hover:text-white transition-colors">
                Technology
              </Link>
              <Link href="#careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#news" className="text-gray-300 hover:text-white transition-colors">
                News
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <div className="flex space-x-6 pt-4">
                <Link href="#privacy" className="text-gray-300 hover:text-white transition-colors underline">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="text-gray-300 hover:text-white transition-colors underline">
                  Terms of Usage
                </Link>
              </div>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <p className="mb-2">contact@cellensinc.com</p>
            <p className="mb-6">700 Main Street, Cambridge, MA 02139</p>
            
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-block mb-8"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            
            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email here" 
                className="bg-transparent border-b border-gray-600 rounded-none focus:border-white px-0 h-10"
              />
              <button className="ml-2">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
