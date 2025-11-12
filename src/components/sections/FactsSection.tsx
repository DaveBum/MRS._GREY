import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Lightbulb } from "lucide-react";

interface FactProps {
  title: string;
  content: string;
  sources: { url: string; label?: string }[];
  id?: string;
  delay?: number;
}

function Fact({ title, content, sources, id, delay = 0 }: FactProps) {
  return (
    <ScrollReveal delay={delay}>
      <Card id={id} className="p-8 bg-gradient-to-br from-card to-card/50 border-2 border-muscle-pink/20 card-hover-glow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-muscle-yellow/5 rounded-full blur-2xl group-hover:bg-muscle-yellow/10 transition-all duration-500" />
        <div className="relative z-10">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-muscle-pink/20 rounded-lg mt-1">
              <Lightbulb className="w-5 h-5 text-muscle-pink" />
            </div>
            <h3 className="text-2xl font-bold text-foreground flex-1">{title}</h3>
          </div>
          <p className="text-base leading-relaxed mb-4 text-foreground/90">{content}</p>
          <div className="flex flex-wrap gap-2">
            {sources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-muscle-pink/10 text-muscle-pink hover:bg-muscle-pink/20 rounded-full border border-muscle-pink/30 hover:border-muscle-pink/50 transition-all"
              >
                {source.label || `Source${sources.length > 1 ? ` ${idx + 1}` : ""}`}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}

export function FactsSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <h2 className="text-5xl font-black mb-12 text-center gradient-text">Key Facts</h2>
      </ScrollReveal>
      <div className="space-y-8">
        <Fact
          id="facts-movement-basics"
          title="Fact 1 — Movement Basics"
          content="Skeletal muscles move joints by pulling (not pushing) and usually work in coordinated pairs as agonist and antagonist."
          sources={[
            { url: "https://www.britannica.com/science/muscle", label: "Source" }
          ]}
          delay={0.1}
        />
        <ScrollReveal delay={0.15}>
          <div className="text-sm text-muted-foreground pl-8 -mt-4 italic">
            <strong className="text-muscle-yellow">Why this is solid:</strong> Standard anatomy texts (e.g., Britannica) describe skeletal muscle as the voluntary, multinucleated tissue that moves the skeleton via lever mechanics—implying paired actions for smooth control.
          </div>
        </ScrollReveal>

        <Fact
          id="facts-contraction"
          title="Fact 2 — How Contraction Starts"
          content="Contraction happens when an electrical signal releases Ca²⁺, which lets myosin heads bind to actin; ATP powers the sliding (cross-bridge) cycle."
          sources={[
            { url: "https://www.khanacademy.org/science/biology/human-biology/muscles/v/tropomyosin-and-troponin-and-their-role-in-regulating-muscle-contraction", label: "Source" },
            { url: "https://www.khanacademy.org/science/biology/human-biology/muscles/v/myosin-and-actin", label: "Source 2" }
          ]}
          delay={0.2}
        />

        <Fact
          id="facts-adaptation"
          title="Fact 3 — Adaptation & Structure"
          content="Strength improves through hypertrophy (more/larger myofibrils) and better motor-unit recruitment; skeletal muscle fibers are typically multinucleated."
          sources={[
            { url: "https://www.britannica.com/science/myofibril", label: "Source" },
            { url: "https://www.britannica.com/science/skeletal-muscle", label: "Source 2" }
          ]}
          delay={0.3}
        />
      </div>
    </section>
  );
}
