import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ScienceSection() {
  return (
    <section className="py-20 px-32  relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="mb-4 text-sm font-medium">WHAT WE ARE DOING</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Touching cancer cells<br />with a nanoscale finger
            </h2>
            <p className="text-lg mb-8">
              Cellens is pioneering a novel diagnostic modality based on single cell
              biophysical markers. By touching cells at the nanoscale level, we uncover
              unique physical fingerprints of cancer cells that are ideal for accurate and
              non-invasive cancer detection.
            </p>
            <Link 
              href="#science" 
              className="inline-flex items-center bg-white text-[#0a1e3c] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Our Science <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold">800,000+</div>
                <p className="text-lg mt-2">
                  Bladder cancer patients<br />undergo routine BC monitoring
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold">70%</div>
                <p className="text-lg mt-2">
                  Estimated recurrence rate of<br />bladder cancer after treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
