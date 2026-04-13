import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certs = [
  {
    name: "Exam P (Probability)",
    issuer: "Society of Actuaries",
    date: "September 2024",
    description: "Probability theory, combinatorial/conditional probability, distributions, moments, and risk modeling.",
  },
  {
    name: "Exam FM (Financial Mathematics)",
    issuer: "Society of Actuaries",
    date: "August 2024",
    description: "Interest theory, time value of money, annuities, bonds, spot/forward rates, and derivative pricing.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <Card key={cert.name} className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
