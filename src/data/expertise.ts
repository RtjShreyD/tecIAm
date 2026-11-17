export type Skill = {
  name: string;
  logo?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

export const expertiseGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "The foundations I build with",
    skills: [
      { name: "Python", logo: "python" },
      { name: "JavaScript", logo: "javascript" },
      { name: "Golang", logo: "go" },
      { name: "C", logo: "c" },
      { name: "MATLAB", logo: "mathworks" },
      { name: "Java", logo: "openjdk" },
      { name: "Shell", logo: "gnubash" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Application engineering and development",
    skills: [
      { name: "FastAPI", logo: "fastapi" },
      { name: "Django", logo: "django" },
      { name: "Flask", logo: "flask" },
      { name: "Gin" },
      { name: "NumPy", logo: "numpy" },
      { name: "Pandas", logo: "pandas" },
      { name: "OpenAI", logo: "openai" },
      { name: "LangChain", logo: "langchain" },
      { name: "LangGraph" },
      { name: "Google ADK", logo: "google" },
      { name: "Brownie" },
      { name: "Express.js", logo: "express" },
      { name: "Angular", logo: "angular" },
      { name: "React", logo: "react" },
      { name: "Bootstrap", logo: "bootstrap" },
    ],
  },
  {
    title: "AI & Agentic Systems",
    description: "Building intelligent and autonomous workflows",
    skills: [
      { name: "GitHub Copilot", logo: "githubcopilot" },
      { name: "Cursor", logo: "cursor" },
      { name: "Claude Code", logo: "anthropic" },
      { name: "Codex", logo: "openai" },
      { name: "Llama", logo: "meta" },
      { name: "LangSmith", logo: "langchain" },
      { name: "MCP" },
      { name: "RAG" },
      { name: "Loops" },
      { name: "Multi-agent Systems" },
      { name: "Guardrails" },
      { name: "Vector Databases" },
      { name: "Model Fine-tuning" },
      { name: "Routing & Decision Pipelines" },
    ],
  },
  {
    title: "Databases & Search",
    description: "Structured, document, and vector data",
    skills: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MySQL", logo: "mysql" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Elasticsearch", logo: "elasticsearch" },
      { name: "Firebase", logo: "firebase" },
      { name: "Qdrant", logo: "qdrant" },
      { name: "pgvector", logo: "postgresql" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Deployment, orchestration, and cloud",
    skills: [
      { name: "Docker", logo: "docker" },
      { name: "Kubernetes", logo: "kubernetes" },
      { name: "Jenkins", logo: "jenkins" },
      { name: "GitLab", logo: "gitlab" },
      { name: "AWS", logo: "amazonaws" },
      { name: "Nginx", logo: "nginx" },
      { name: "Git", logo: "git" },
    ],
  },
  {
    title: "AWS Development",
    description: "Cloud services and application infrastructure",
    skills: [
      { name: "EC2" },
      { name: "S3" },
      { name: "CloudFront CDN" },
      { name: "Lambda" },
      { name: "API Gateway" },
      { name: "Cognito" },
      { name: "KMS" },
      { name: "SES" },
      { name: "RDS" },
      { name: "IoT Core" },
      { name: "Route 53" },
    ],
  },
  {
    title: "Observability & Integrations",
    description: "Monitoring, analytics, and external services",
    skills: [
      { name: "Kibana", logo: "kibana" },
      { name: "Grafana", logo: "grafana" },
      { name: "Logstash", logo: "logstash" },
      { name: "Elastic APM", logo: "elastic" },
      { name: "Lens" },
      { name: "Apache Traffic Ops", logo: "apache" },
      { name: "Twilio", logo: "twilio" },
      { name: "Postmark" },
    ],
  },
  {
    title: "Communication Protocols",
    description: "Connecting services, systems, and devices",
    skills: [
      { name: "TCP/IP" },
      { name: "HTTP / HTTPS" },
      { name: "WebSockets" },
      { name: "AMQP" },
      { name: "MQTT" },
      { name: "WebRTC" },
      { name: "FTP" },
      { name: "MCP" },
      { name: "A2A" },
    ],
  },
];

export const expertiseDomains = [
  "Full-stack Web Development",
  "Backend & System Architecture",
  "DevOps",
  "Cybersecurity",
  "Machine Learning & AI",
  "Internet of Things",
  "Blockchain",
];