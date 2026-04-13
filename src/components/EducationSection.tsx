import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    school: "University of California, Berkeley",
    detail: "Master's in EECS — GPA: 3.86",
    period: "May 2015 – Dec 2016",
    description: "Electrical Engineering and Computer Science.",
  },
  {
    school: "Columbia University",
    detail: "Bachelor's in Computer Science — GPA: 3.9",
    period: "Sep 2011 – Apr 2015",
    description: "New York, NY.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text inline-block">Education</h2>
        <div className="space-y-6">
          {education.map((ed, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6 flex gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 h-fit">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{ed.school}</h3>
                  <p className="text-primary text-sm">{ed.detail}</p>
                  <p className="text-xs text-muted-foreground mb-1">{ed.period}</p>
                  <p className="text-sm text-muted-foreground">{ed.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
