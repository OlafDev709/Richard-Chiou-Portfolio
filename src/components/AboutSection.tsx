const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">About Me</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm an AI/ML Engineer and Data Scientist with over <strong className="text-foreground">10 years of experience</strong> designing, developing, and deploying production-grade machine learning systems across <strong className="text-foreground">computer vision, NLP, GenAI, real-time analytics, and large-scale cloud infrastructures</strong>.
          </p>
          <p>
            My work spans impactful AI applications in wildlife conservation, healthcare automation, transportation intelligence, and e-commerce fraud prevention. I have held senior roles at Outlier, StreetLight Data, Signifyd, and Brain Technologies, leading teams, mentoring engineers, and shipping mission-critical AI applications.
          </p>
          <p>
            Key achievements include the <strong className="text-foreground">WildTrack AI system</strong> achieving <strong className="text-foreground">95%+ accuracy</strong> in species identification, an LLM-based <strong className="text-foreground">Healthcare Virtual Assistant</strong> reducing clinical workflow time by <strong className="text-foreground">60%</strong>, and a real-time <strong className="text-foreground">Traffic Intelligence System</strong> used during <strong className="text-foreground">Hurricane Ian (2022)</strong> for safe evacuation planning.
          </p>
          <p>
            I hold a <strong className="text-foreground">Master's in EECS from UC Berkeley</strong> and a <strong className="text-foreground">Bachelor's in CS from Columbia University</strong>. Since January 2024, I've been pursuing a <strong className="text-foreground">Ph.D. in Computer Science</strong> (expected February 2026).
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
