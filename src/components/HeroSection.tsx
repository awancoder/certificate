import { Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative text-center mb-16 py-12">
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-6 shadow-[var(--shadow-glow)] animate-in zoom-in duration-500">
          <Shield className="h-10 w-10 text-primary-foreground" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
          Cek Sertifikat
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Semua sertifikat yang diterbitkan oleh Awan Digitals dapat diverifikasi keasliannya melalui platform ini. 
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
