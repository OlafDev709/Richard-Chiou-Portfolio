import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Stethoscope, TrafficCone } from "lucide-react";

const projects = [
  {
    title: "WildTrack AI System",
    period: "Jan 2024 – Dec 2024",
    icon: PawPrint,
    description:
      "Led a cross-functional team of 10 to build a non-invasive AI-powered wildlife monitoring system that identifies species, individuals, sex, and age-class from footprint images—eliminating the need for GPS collars or physical capture.",
    highlights: [
      "95%+ accuracy across 40+ species using ResNet-50",
      "ONNX optimization reduced inference from 2s to 300ms on mobile",
      "18% improvement in model generalization via augmentation pipeline",
      "Deployed to 1000+ field users for offline, real-time predictions",
    ],
    tech: ["PyTorch", "ResNet-50", "ONNX", "OpenCV", "AWS", "MLflow"],
  },
  {
    title: "Healthcare Virtual Assistant",
    period: "Jan 2025 – Dec 2025",
    icon: Stethoscope,
    description:
      "Built a two-part AI healthcare platform: an appointment booking & clinical intake voice agent, and an AI-powered health advice assistant—both using Transformer-based NLP with RAG pipelines.",
    highlights: [
      "500+ patient conversations/month with personalized advice",
      "30% reduction in doctor-patient meeting time via pre-summarization",
      "HIPAA-compliant backend with FastAPI, PostgreSQL, and AWS",
      "Integrated speech-to-text and text-to-speech interfaces",
    ],
    tech: ["BioBERT", "BART", "RAG", "LangChain", "FastAPI", "PostgreSQL", "AWS"],
  },
  {
    title: "Traffic Evacuation AI System",
    period: "Jan 2022 – Dec 2023",
    icon: TrafficCone,
    description:
      "Developed an AI-driven decision support system for evacuation traffic management, used during Hurricane Ian (2022) to optimize traffic flow and support safe evacuation planning.",
    highlights: [
      "Graph WaveNet forecasting with 23% higher accuracy than ARIMA",
      "Real-time incident detection: 91% precision, 87% recall",
      "RL-based adaptive signal timing with 18% throughput improvement",
      "500K+ daily GPS/sensor records processed via Kafka + Spark",
    ],
    tech: ["Graph WaveNet", "Transformer", "RL", "Kafka", "Spark", "SUMO", "PostGIS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <project.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground">{project.period}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
