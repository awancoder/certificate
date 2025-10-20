import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { XCircle, ArrowLeft, Calendar, User, Award, FileText, Download, Share2, Linkedin, Facebook, Twitter } from "lucide-react";
import { mockCertificates } from "@/data/mockCertificates";

const CertificateDetail = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();

  const certificate = mockCertificates.find(cert => cert.id === certificateId);
  console.log(certificate, 'certificate detail');
  

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <XCircle className="h-16 w-16 text-destructive" />
            </div>
            <CardTitle>Sertifikat Tidak Ditemukan</CardTitle>
            <CardDescription>
              Nomor sertifikat yang Anda cari tidak ditemukan dalam database kami.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/")} className="w-full" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Pencarian
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentUrl = window.location.href;
  const shareText = `Sertifikat ${certificate.program} - ${certificate.fullName}`;
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  const handleShareWhatsApp = () => {
    const whatsappText = `Sertifikat ${certificate.program} – ${certificate.fullName}
Diterbitkan oleh: Awan Digitals

Cek sertifikat:
${currentUrl}

*Silahkan tambahkan sertifikat ke linkedin dengan menekan tombol tambah pada halaman web*`;
    const text = encodeURIComponent(whatsappText);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleAddToLinkedIn = () => {
    const certName = encodeURIComponent(`${certificate.role} ${certificate.program}`);
    const year = certificate.date_publish.getFullYear();
    const month = certificate.date_publish.getMonth() + 1;
    
    // Create full URL for the certificate media
    const mediaUrl = certificate.filePath.startsWith('http') 
      ? certificate.filePath 
      : `${window.location.origin}${certificate.filePath}`;
    
    window.open(
      `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${certName}&organizationId=106711738&issueYear=${year}&issueMonth=${month}&certUrl=${encodeURIComponent(currentUrl)}&certId=${certificate.id}&licenseNumber=${encodeURIComponent(certificate.certificateNumber)}&media=${encodeURIComponent(mediaUrl)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button onClick={() => navigate("/")} variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        {/* Share & LinkedIn Actions */}
        {certificate.isValid && (
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" />
                Bagikan & Tambahkan ke Profil
              </CardTitle>
              <CardDescription>
                Bagikan sertifikat ini atau tambahkan ke profil LinkedIn Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add to LinkedIn */}
              <div>
                <p className="text-sm font-medium mb-2">Tambahkan ke Profil</p>
                <Button 
                  onClick={handleAddToLinkedIn}
                  className="w-full sm:w-auto"
                  variant="default"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Tambahkan ke LinkedIn
                </Button>
              </div>

              {/* Share Buttons */}
              <div>
                <p className="text-sm font-medium mb-2">Bagikan</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    onClick={handleShareWhatsApp}
                    variant="outline"
                    size="sm"
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </Button>
                  
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Certificate Details */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Detail Sertifikat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <FileText className="h-4 w-4" />
                  Nomor Sertifikat
                </div>
                <p className="font-mono font-semibold text-lg">{certificate.certificateNumber}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <User className="h-4 w-4" />
                  Nama Lengkap
                </div>
                <p className="font-semibold text-lg">{certificate.fullName}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Award className="h-4 w-4" />
                  Program
                </div>
                <p className="font-semibold">{certificate.program}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Award className="h-4 w-4" />
                  Posisi
                </div>
                <p className="font-semibold">{certificate.role}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  Tanggal Mulai
                </div>
                <p className="font-semibold">{formatDate(certificate.date_start)}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  Tanggal Selesai
                </div>
                <p className="font-semibold">{formatDate(certificate.date_end)}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Status Sertifikat</p>
                <Badge variant={certificate.isValid ? "default" : "destructive"} className="text-sm px-4 py-1">
                  {certificate.isValid ? "Selesai" : "Gagal"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grade Card */}
        {certificate.isValid && certificate.grade && (
          <Card className="shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-muted/20">
            <CardHeader>
              <CardTitle>Penilaian</CardTitle>
              <CardDescription>Hasil kinerja {certificate.program}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Level Badge */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Level Keahlian</p>
                  <Badge variant="default" className="text-lg px-4 py-2">
                    {certificate.grade.level}
                  </Badge>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Soft Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">Communication</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{certificate.grade.soft_skill.communication}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">Manners</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{certificate.grade.soft_skill.manners}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">Attendance</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{certificate.grade.soft_skill.attendance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hard Skills */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Hard Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">Technical Knowledge</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{certificate.grade.hard_skill.technical_knowledge}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">Practical Application</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{certificate.grade.hard_skill.practical_application}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">Project Execution</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">{certificate.grade.hard_skill.project_execution}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {certificate.notes && (
                <div className="p-4 bg-background rounded-lg border">
                  <p className="text-sm font-medium mb-2">Catatan</p>
                  <p className="text-sm text-muted-foreground">{certificate.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* PDF Viewer Card */}
        {certificate.isValid && certificate.filePath && (
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Dokumen Sertifikat
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <a href={certificate.filePath} download target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
              <CardDescription>Preview dokumen sertifikat resmi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] border rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={certificate.filePath}
                  className="w-full h-full"
                  title="Certificate PDF"
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CertificateDetail;
