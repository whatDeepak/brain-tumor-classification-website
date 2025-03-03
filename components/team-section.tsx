import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1a3a6c] to-[#0a1e3c]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="mb-2 text-sm font-medium">WHO WE ARE</div>
          <h2 className="text-4xl md:text-5xl font-bold">Meet the Cellens Team</h2>
        </div>
        
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <Image 
              src="/placeholder.svg?height=500&width=1200" 
              alt="Cellens Team" 
              width={1200} 
              height={500}
              className="w-full object-cover"
            />
          </div>
          
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full">
            <ArrowRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-lg">
              We know what it takes to bring physical touch to
              bring physical touch to
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg">
              Our team brings expertise in mechanobiology, mechanical engineering,
              and innovation commercialization, and we are supported by an
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Link 
            href="#about" 
            className="inline-flex items-center bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-medium transition-colors"
          >
            About Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
