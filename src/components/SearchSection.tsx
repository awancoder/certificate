import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { toast } from "sonner";
import { mockCertificates } from "@/data/mockCertificates";

const SearchSection = () => {
  const [certificateId, setCertificateId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      toast.error("Silakan masukkan nomor sertifikat");
      return;
    }

    // Find certificate by certificateNumber
    const certificate = mockCertificates.find(cert => 
      cert.certificateNumber === certificateId.trim()
    );

    if (!certificate) {
      toast.error("Nomor sertifikat tidak ditemukan");
      return;
    }

    // Navigate using the certificate's id
    navigate(`/certificate/${certificate.id}`);
  };

  return (
    <section className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Masukkan nomor sertifikat (contoh: 0000/CERT/ADS-V/X/2025)"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            className="h-14 text-lg pl-12 shadow-[var(--shadow-card)] border-2 focus-visible:border-primary transition-[var(--transition-smooth)]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="w-full h-14 text-lg shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]"
        >
          Cek
        </Button>
      </form>
      
      <div className="mt-8 p-4 bg-card rounded-lg border">
        <p className="text-sm font-medium mb-2">Contoh nomor sertifikat:</p>
        <div className="flex flex-wrap gap-2">
          {["0000/CERT/ADS/I/2025"].map((id) => (
            <Button
              key={id}
              variant="outline"
              size="sm"
              onClick={() => setCertificateId(id)}
              className="font-mono"
            >
              {id}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
