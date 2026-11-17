export type Project = {
  number: string;
  name: string;
  category: string;
  type: string;
  description: string;
  details: string[];
  technologies: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Agentic AI RCA Engine",
    category: "AGENTIC AI / RAG",
    type: "Enterprise · Cisco",
    description:
      "An AI-assisted root-cause analysis system for Cisco Camelot services, combining log ingestion, retrieval, and GitHub Copilot agent skills.",
    details: [
      "RAG pipeline for ingesting service logs into Qdrant.",
      "Qdrant MCP integration for querying relevant operational context.",
      "GitHub Copilot skills designed to support automated RCA for Jira tickets.",
    ],
    technologies: [
      "Python",
      "Qdrant",
      "RAG",
      "MCP",
      "GitHub Copilot",
    ],
    featured: true,
  },
  {
    number: "02",
    name: "Agentic AI YAML Generator",
    category: "MULTI-AGENT SYSTEMS",
    type: "Enterprise · Cisco",
    description:
      "A multi-agent application that turns natural-language scenarios into configuration YAML for CUCM pipelines.",
    details: [
      "Multi-agent chatbot and agent control panel.",
      "LLM-driven configuration generation from natural-language prompts.",
      "Agent orchestration and application backend built with Python.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "FastMCP",
      "PostgreSQL",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "AppScan Engine",
    category: "CYBERSECURITY / RESEARCH",
    type: "Research & Development",
    description:
      "An application scanning platform in the same broad category as Shodan, FOFA, and Censys.",
    details: [
      "Backend development and scanning-module integrations.",
      "Research and development of application scanning capabilities.",
      "Testing, maintenance, and performance monitoring.",
    ],
    technologies: [
      "Golang",
      "Python",
      "Nmap",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    number: "04",
    name: "Cocoon",
    category: "IOT / SMART INFRASTRUCTURE",
    type: "Product · Smart Parking",
    description:
      "A smart parking management platform designed to connect parking discovery, reservations, payments, and on-site infrastructure.",
    details: [
      "Designed scalable system architecture and product workflows.",
      "Integrated backend, dashboard, mobile app, ANPR, and boom-barrier operations.",
      "Connected IoT devices using AMQP and MQTT messaging.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "PostgreSQL",
      "MQTT",
      "RabbitMQ",
      "Flutter",
      "Arduino",
    ],
  },
  {
    number: "05",
    name: "CCXE Trading Bot",
    category: "BACKEND / AUTOMATION",
    type: "Product · FinTech",
    description:
      "A multi-user cryptocurrency trading bot supporting background execution and configurable investment strategies.",
    details: [
      "Designed a scalable architecture and Python execution engine.",
      "Implemented JWT authentication and background worker processes.",
      "Integrated APIs from multiple exchanges, with Redis and PostgreSQL.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },
  {
    number: "06",
    name: "Constum",
    category: "HARDWARE / IOT",
    type: "Research · Construction 3D Printing",
    description:
      "An IoT-based construction 3D printer project developed to print structures for real-world use.",
    details: [
      "Modified open-source Marlin firmware for the printer.",
      "Integrated OctoPrint for printer monitoring.",
      "Developed a RepRap control shield and coordinated hardware control with the mechanical design team.",
    ],
    technologies: [
      "C",
      "Arduino",
      "Marlin",
      "OctoPrint",
      "RepRap",
      "3D Printing",
    ],
  },
];