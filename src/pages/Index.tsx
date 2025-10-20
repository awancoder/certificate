import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 py-12">
        <HeroSection />
        <SearchSection />
        
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-card rounded-xl border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Aman & Terpercaya</h3>
            <p className="text-sm text-muted-foreground">
              Sistem verifikasi yang aman dengan enkripsi tingkat tinggi
            </p>
          </div>
          
          <div className="p-6 bg-card rounded-xl border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Cepat & Mudah</h3>
            <p className="text-sm text-muted-foreground">
              Verifikasi instan hanya dengan memasukkan nomor sertifikat
            </p>
          </div>
          
          <div className="p-6 bg-card rounded-xl border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Akurat & Valid</h3>
            <p className="text-sm text-muted-foreground">
              Database terpusat dengan informasi lengkap dan akurat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
