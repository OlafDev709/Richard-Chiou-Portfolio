import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Cloud, FlaskConical, TestTubeDiagonal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: FlaskConical,
    skills: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "Seaborn"],
  },
  {
    title: "ML & AI",
    icon: Brain,
    skills: [
      "PyTorch", "TensorFlow", "Hugging Face", "SageMaker", "LangChain",
      "LangGraph", "Databricks", "RAG", "Fine-tuning", "Transformer",
      "CNN", "RNN", "LSTM", "LLM", "BERT", "OpenCV", "Graph WaveNet",
      "MCP", "Speech-to-Text", "Text-to-Speech",
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "PostGIS", "Spark", "Snowflake", "Hive", "Hadoop"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Jenkins", "AWS SageMaker", "AWS Lambda", "AWS EC2", "AWS EKS", "Kafka"],
  },
  {
    title: "Simulation & Testing",
    icon: TestTubeDiagonal,
    skills: ["SUMO", "A/B Testing", "PyTest", "UnitTest"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <Card key={cat.title} className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <cat.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
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

export default SkillsSection;
