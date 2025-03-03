import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function PartnerSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1a3a6c] to-[#0a1e3c]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Calling for<br />Partners today
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              We are eager to partner withh cancer institutes, health care providers, and
              industry leaders to bring our non-invasive cancer diagnostics to patients.
            </p>
            <p className="text-lg mb-8">
              Contact us by the form below or send us a mail directly to{' '}
              <a href="mailto:contact@cellensinc.com" className="underline">
                contact@cellensinc.com
              </a>
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-white/10 border-none h-12 text-white placeholder:text-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/10 border-none h-12 text-white placeholder:text-gray-400"
                />
              </div>
              <Textarea 
                placeholder="Your Message" 
                className="bg-white/10 border-none min-h-[120px] text-white placeholder:text-gray-400"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="tel" 
                  placeholder="Contact Number" 
                  className="bg-white/10 border-none h-12 text-white placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  className="bg-[#6bc6e5] hover:bg-[#5ab6d5] text-white h-12 rounded-md"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
