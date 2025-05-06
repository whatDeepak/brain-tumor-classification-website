import { BrainTumorUploader } from "@/components/brain-tumor-uploader"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_30%,#4F21A1_60%,#A46EDB_85%,#200D42_95%,#000)] text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
            Upload your medical brain scan images for instant, accurate classification powered by advanced deep learning
            algorithms.
          </p>
        </div>

        <BrainTumorUploader />
      </main>

    <Footer />
    </div>
  )
}
