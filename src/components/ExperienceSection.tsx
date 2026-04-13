import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Outlier",
    role: "AI/ML Engineer",
    location: "Newark, CA",
    period: "Jan 2024 – Apr 2025",
    bullets: [
      "Fine-tuned ResNet-50 models using PyTorch for wildlife footprint identification, achieving 95%+ accuracy across 40+ species.",
      "Integrated ONNX models into WildTrackAI mobile app, reducing prediction time from 2s to 300ms for 1000+ field users.",
      "Implemented multi-agent healthcare assistant using Model Context Protocol (MCP) for modular agent workflows.",
      "Deployed BioBERT-based RAG model on SageMaker handling 500+ patient conversations/month.",
      "Reduced doctor-patient meeting time by 30% via BART-based conversation pre-summarization.",
      "Built scalable RESTful APIs using FastAPI and Flask for LLM inference with sub-second latency.",
      "Led cross-functional AI team of 7, implementing MLOps workflows reducing deployment time by 40%.",
    ],
    tech: ["PyTorch", "TensorFlow", "ONNX", "ResNet-50", "RAG", "BioBERT", "BART", "LangChain", "AWS", "SageMaker"],
  },
  {
    company: "StreetLight Data",
    role: "Founding AI/ML Engineer",
    location: "San Francisco, CA",
    period: "Jan 2022 – Dec 2023",
    bullets: [
      "Architected Graph WaveNet spatio-temporal forecasting models achieving 23% higher accuracy than ARIMA.",
      "Applied Transformer-based temporal encoders reducing congestion prediction error by 18%.",
      "Created real-time incident detection with 91% precision and 87% recall, cutting detection latency by 35%.",
      "Built RL model for adaptive traffic signal timing with 18% throughput improvement in SUMO simulations.",
      "Deployed real-time pipelines ingesting 500K+ daily records through Kafka with 99.9% uptime.",
      "Designed Snowflake data pipelines processing 2M-3M records/day with <1s query latency.",
    ],
    tech: ["PyTorch", "Graph WaveNet", "Transformer", "RL", "Kafka", "Spark", "Snowflake", "Redis", "SUMO"],
  },
  {
    company: "Metis",
    role: "Data Scientist & Instructor",
    location: "San Francisco, CA",
    period: "Aug 2019 – Dec 2021",
    bullets: [
      "Mentored 70+ students in feature engineering, model evaluation, and deployment.",
      "Authored 50+ hands-on exercises and guided 20+ capstone projects producing production-ready ML models.",
    ],
    tech: ["TensorFlow", "PyTorch", "Pandas", "Flask", "Docker", "AWS", "GCP", "Azure"],
  },
  {
    company: "Signifyd",
    role: "AI/ML Engineer",
    location: "San Jose, CA",
    period: "Aug 2018 – Jul 2019",
    bullets: [
      "Built ML models to detect fraudulent e-commerce transactions processing 100K+ daily transactions, reducing chargebacks by 15%.",
      "Optimized fraud thresholds via A/B tests, improving legitimate approval rates by 10%.",
    ],
    tech: ["XGBoost", "scikit-learn", "SQL", "A/B Testing", "FastAPI", "AWS"],
  },
  {
    company: "Brain Technologies",
    role: "Senior Data Scientist",
    location: "San Mateo, CA",
    period: "Jul 2017 – Jul 2018",
    bullets: [
      "Produced and annotated 50,000+ examples for NLP training data.",
      "Deployed entity recognition systems using spaCy, improving extraction accuracy by 25%.",
    ],
    tech: ["spaCy", "NER", "NLP", "Pandas", "NumPy"],
  },
  {
    company: "xAd",
    role: "Mid-level Data Scientist",
    location: "Mountain View, CA",
    period: "Apr 2016 – Jun 2017",
    bullets: [
      "Developed patent-pending hierarchical Bayesian algorithm on 10M observations, improving store visits by 25%.",
      "Built user ID quality ranking model with 30+ features, increasing targeting precision by 20%.",
    ],
    tech: ["Python", "SQL", "PyMC3", "Bayesian Modeling"],
  },
  {
    company: "PayPal",
    role: "Mobile Tools Development Intern",
    location: "San Jose, CA",
    period: "Aug 2014 – Oct 2015",
    bullets: [
      "Built PPUtils tool automating creation of 10,000+ test accounts for iOS and Android CI.",
      "Created login performance dashboard with automated alerts, improving testing efficiency by 45%.",
    ],
    tech: ["Python", "REST API", "CI/CD"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" />
                        <h3 className="font-semibold text-foreground text-lg">{exp.company}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary text-sm mb-1">{exp.role}</p>
                    <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
