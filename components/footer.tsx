import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-[linear-gradient(to_bottom,#000,#000)] text-white/60 border-t border-white/20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center text-sm sm:text-base">
            © {currentYear} NeuroX UI. All rights reserved.
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="NeuroX Logo"
              width={180}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
