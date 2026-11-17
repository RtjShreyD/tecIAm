export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  projects: string[];
  highlights: string[];
  technologies: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Tech Mahindra",
    role: "Team Lead",
    period: "April 2025 — Present",
    summary:
      "Leading engineering work on enterprise solutions for Cisco, spanning Agentic AI, multi-agent applications, and DevOps automation.",
    projects: [
      "Agentic AI RCA Engine",
      "Agentic AI YAML Generator",
      "Ops Jira Jenkins Automation",
    ],
    highlights: [
      "Designed and guided Agentic AI solutions for root-cause analysis and CUCM configuration workflows.",
      "Built RAG-based log ingestion and retrieval workflows backed by Qdrant and its MCP server.",
      "Led architecture, prompt engineering, guardrails, debugging, testing, and application maintenance.",
      "Worked on full-stack monitoring and control workflows for Jenkins pipelines, Jira, and CUCM testbeds.",
    ],
    technologies: [
      "Python",
      "Qdrant",
      "MCP",
      "GitHub Copilot",
      "LangGraph",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Angular",
      "Jenkins",
      "Docker",
    ],
    current: true,
  },
  {
    company: "Broadcast Engineering Consultants India Ltd",
    role: "Malware Research Consultant",
    period: "July 2024 — April 2025",
    summary:
      "Worked across cybersecurity research and development, application scanning, backend engineering, and security tooling.",
    projects: ["AppScan Engine", "Botnet RAT Research"],
    highlights: [
      "Contributed to AppScan Engine, an application scanning system in the category of platforms such as Shodan, FOFA, and Censys.",
      "Researched and integrated scanning modules and developed backend components.",
      "Worked on security research, architecture, integrations, testing, and cross-platform development.",
    ],
    technologies: [
      "Golang",
      "Python",
      "Nmap",
      "Gin",
      "C",
      "Docker",
      "PostgreSQL",
      "QEMU",
    ],
  },
  {
    company: "Acadecraft",
    role: "Fullstack Software Developer",
    period: "February 2024 — June 2024",
    summary:
      "Developed ColdEmailer, an internal platform for operating and analyzing large-scale email marketing campaigns.",
    projects: ["ColdEmailer"],
    highlights: [
      "Designed and developed backend services for bulk email workflows.",
      "Built autonomous background processing using Celery.",
      "Worked across backend, frontend, testing, and deployment.",
      "Prepared the application for portable deployment using Docker and AWS EC2.",
    ],
    technologies: ["Python", "FastAPI", "Celery", "Docker", "AWS EC2"],
  },
  {
    company: "APYL Software & Systems Ltd",
    role: "Software Developer",
    period: "October 2021 — January 2024",
    summary:
      "Worked on LEAR (Legacy Email Archive Repository), an enterprise email archiving and search platform for Sullivan Strickler, USA.",
    projects: ["LEAR — Legacy Email Archive Repository"],
    highlights: [
      "Developed backend microservices using Python and Node.js.",
      "Built frontend functionality with AngularJS and TypeScript.",
      "Integrated Elasticsearch for indexing email and other file formats.",
      "Implemented background processing with RabbitMQ and cloud file storage with AWS S3.",
      "Worked on containerized deployments and CI/CD pipelines.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Node.js",
      "AngularJS",
      "TypeScript",
      "Elasticsearch",
      "RabbitMQ",
      "MongoDB",
      "MySQL",
      "AWS S3",
      "Docker",
    ],
  },
  {
    company: "E-Bibil Technologies",
    role: "Systems Design Consultant & Software Developer",
    period: "October 2020 — October 2021",
    summary:
      "Worked on automated trading systems and contributed as a technical consultant to a smart parking platform.",
    projects: [
      "CCXE — Cryptocurrency Trading Bot",
      "Cocoon — Smart Parking Management",
    ],
    highlights: [
      "Designed the architecture and execution engine for a multi-user cryptocurrency trading bot.",
      "Implemented JWT authentication, background worker processes, and exchange API integrations.",
      "Designed the Cocoon platform architecture and supervised development across backend, dashboard, mobile app, and IoT integrations.",
      "Worked on ANPR, boom-barrier operations, parking workflows, and payment integrations.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Node.js",
      "Express.js",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Docker",
      "MQTT",
      "RabbitMQ",
      "Flutter",
      "Arduino",
    ],
  },
  {
    company: "Tronano Innovations",
    role: "Software & IoT Developer",
    period: "July 2019 — October 2020",
    summary:
      "Worked at the intersection of software, embedded systems, connected devices, and hardware integration.",
    projects: [
      "Smart Tags Management System",
      "Constum — Construction 3D Printer",
      "Dog Food Vending Machine",
    ],
    highlights: [
      "Designed backend systems and IoT integrations for connected smart tags using GPS, RFID, and 4G.",
      "Developed and modified firmware for the Constum construction 3D printer.",
      "Integrated printer monitoring and developed its control electronics.",
      "Designed APIs and device communication workflows for an IoT-enabled vending machine.",
      "Worked with Arduino, sensors, controllers, and stepper motors.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Arduino",
      "C",
      "MQTT",
      "AWS IoT Core",
      "RFID",
      "GPS",
      "3D Printing",
      "MongoDB",
    ],
  },
];