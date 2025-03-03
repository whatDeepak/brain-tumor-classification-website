import Image from 'next/image'

export default function PlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1a3a6c] to-[#0a1e3c]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="relative">
              <Image 
                src="/placeholder.svg?height=400&width=400" 
                alt="Cell visualization" 
                width={400} 
                height={400}
                className="mx-auto"
              />
              <Image 
                src="/placeholder.svg?height=100&width=100" 
                alt="Probe" 
                width={100} 
                height={100}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 text-sm font-medium">A NONINVASIVE, URINE-BASED CANCER DIAGNOSTICS PLATFORM</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Octosense Platform
            </h2>
            <p className="text-lg mb-8">
              Cellens platform is scalable and applicable to different types of
              cancer cells, extracted from bodily fluid to detect various
              clinical conditions. Our peer-reviewed, preliminary data
              highlights the superior performance of our platform to achieve
              high accuracy in detecting bladder cancer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                  <Image 
                    src="/placeholder.svg?height=40&width=40" 
                    alt="Cell Fixation" 
                    width={40} 
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold">1. Proprietary Cell Fixation</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                  <Image 
                    src="/placeholder.svg?height=40&width=40" 
                    alt="Urine Sample" 
                    width={40} 
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold">2. Urine Sample Processing</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                  <Image 
                    src="/placeholder.svg?height=40&width=40" 
                    alt="Cell Scanning" 
                    width={40} 
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold">3. Cell Surface Scanning</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                  <Image 
                    src="/placeholder.svg?height=40&width=40" 
                    alt="Machine Learning" 
                    width={40} 
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold">4. Machine Learning Analysis</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
