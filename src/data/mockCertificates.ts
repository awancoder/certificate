export interface Certificate {
  id: string;
  filePath: string;
  certificateNumber: string;
  fullName: string;
  program: string;
  role: string;
  date_start: Date;
  date_end: Date;
  date_publish: Date;
  isValid: boolean;
  notes?: string;
  grade?: {
    soft_skill: {
      communication: string; // A - E
      manners: string; // A - E
      attendance: string; // A - E
    };
    hard_skill: {
      technical_knowledge: string; // A - E
      practical_application: string; // A - E
      project_execution: string; // A - E
    };
    level: string; // Beginner, Intermediate, Advanced
  };
}

export const mockCertificates: Certificate[] = [
  {
    id: "7d83af1b-3270-4666-8a23-d4998ab0fc61",
    filePath: "/certificates/CERT-2024-001.pdf",
    certificateNumber: "0000/CERT/ADS/I/2025",
    fullName: "Awan Digitals",
    program: "Employee",
    role: "Owner",
    date_start: new Date("2025-01-01"),
    date_end: new Date("2025-12-30"),
    date_publish: new Date("2025-11-01"),
    isValid: true,
    notes: "Good job!",
    grade: {
      soft_skill: {
        communication: "A",
        manners: "A",
        attendance: "A"
      },
      hard_skill: {
        technical_knowledge: "A",
        practical_application: "A",
        project_execution: "A"
      },
      level: "EXPERT"
    }
  },
  {
    id: "39ec0a58-fff5-4110-aa9d-82fc76fea5d4",
    filePath: "/certificates/CERT-0001-CERT-ADS-V-X-2025.pdf",
    certificateNumber: "0001/CERT/ADS-V/X/2025",
    fullName: "Adam Dzakwan",
    program: "Volunteer",
    role: "UI/UX Designer",
    date_start: new Date("2025-08-11"),
    date_end: new Date("2025-10-11"),
    date_publish: new Date("2025-11-01"),
    isValid: true,
    notes: "Catatan",
    grade: {
      soft_skill: {
        communication: "AB",
        manners: "AB",
        attendance: "A"
      },
      hard_skill: {
        technical_knowledge: "B",
        practical_application: "B",
        project_execution: "B"
      },
      level: "JUNIOR"
    }
  },
  {
    id: "1f00e368-9ee6-460d-b11a-1e716b25b45f",
    filePath: "/certificates/CERT-0002-CERT-ADS-V-X-2025.pdf",
    certificateNumber: "0002/CERT/ADS-V/X/2025",
    fullName: "Arya Setiadi",
    program: "Volunteer",
    role: "UI/UX Designer",
    date_start: new Date("2025-08-11"),
    date_end: new Date("2025-10-11"),
    date_publish: new Date("2025-11-01"),
    isValid: true,
    notes: "Catatan",
    grade: {
      soft_skill: {
        communication: "AB",
        manners: "B",
        attendance: "A"
      },
      hard_skill: {
        technical_knowledge: "B",
        practical_application: "B",
        project_execution: "B"
      },
      level: "JUNIOR"
    }
  },
  {
    id: "28f58624-b89a-4ff2-9d63-e12a62ae0534",
    filePath: "/certificates/CERT-0003-CERT-ADS-V-X-2025.pdf",
    certificateNumber: "0003/CERT/ADS-V/X/2025",
    fullName: "Muhammad Fadhil Firdaus",
    program: "Volunteer",
    role: "UI/UX Designer",
    date_start: new Date("2025-08-11"),
    date_end: new Date("2025-10-11"),
    date_publish: new Date("2025-11-01"),
    isValid: true,
    notes: "Catatan",
    grade: {
      soft_skill: {
        communication: "A",
        manners: "AB",
        attendance: "A"
      },
      hard_skill: {
        technical_knowledge: "A",
        practical_application: "A",
        project_execution: "A"
      },
      level: "INTERMEDIATE"
    }
  },
  {
    id: "59f10a14-d8de-4956-9ddd-1742e73aa400",
    filePath: "/certificates/CERT-0004-CERT-ADS-V-X-2025.pdf",
    certificateNumber: "0004/CERT/ADS-V/X/2025",
    fullName: "Muhammad Fikri Irfan Kusumah",
    program: "Volunteer",
    role: "UI/UX Designer",
    date_start: new Date("2025-08-11"),
    date_end: new Date("2025-10-11"),
    date_publish: new Date("2025-11-01"),
    isValid: true,
    notes: "Catatan",
    grade: {
      soft_skill: {
        communication: "AB",
        manners: "AB",
        attendance: "AB"
      },
      hard_skill: {
        technical_knowledge: "BC",
        practical_application: "BC",
        project_execution: "BC"
      },
      level: "JUNIOR"
    }
  },
];
