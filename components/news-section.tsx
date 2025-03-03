import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NewsSection() {
  const newsItems = [
    {
      type: "NEWS",
      title: "CELLENS IS ON SOSV HUMAN HEALTH 100 LIST",
      excerpt: "Welcome to the second annual SOSV Human Health 100. The list captures SOSV's 100 most exciting companies in human health ...",
      link: "#"
    },
    {
      type: "NEWS",
      title: "CELLENS WON GOLDEN TICKET IGNITE AWARD",
      excerpt: "CAMBRIDGE, Mass., Oct. 5, 2022 /PRNewswire/ — LabCentral Ignite, with support from key sponsors Pfizer, Br...",
      link: "#"
    },
    {
      type: "PUBLICATION",
      title: "2021 | ATOMIC FORCE MICROSCOPY DETECTS THE DIFFERENCE IN ...",
      excerpt: "A novel method based on atomic force microscopy (AFM) working in Ringing mode (RM) to distinguish between two similar human col...",
      link: "#"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-[#1a3a6c] to-[#0a1e3c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-2 text-sm font-medium">News</div>
          <h2 className="text-4xl md:text-5xl font-bold">Publications & News</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-15 transition-all"
            >
              <div className="mb-4 text-sm font-medium">{item.type}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{item.excerpt}</p>
              <Link 
                href={item.link} 
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-white' : 'bg-white/40'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
