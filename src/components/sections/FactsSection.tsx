import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface FactProps {
  title: string;
  content: string;
  sources: { url: string; label?: string }[];
  id?: string;
}

function Fact({ title, content, sources, id }: FactProps) {
  return (
    <Card id={id} className="p-6 bg-card border">
      <h3 className="text-xl font-bold mb-3 text-muscle-dark">{title}</h3>
      <p className="text-base leading-relaxed mb-4">{content}</p>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, idx) => (
          <a
            key={idx}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            {source.label || `Source${sources.length > 1 ? ` ${idx + 1}` : ""}`}
            <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </Card>
  );
}

export function FactsSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-muscle-dark">Key Facts</h2>
      <div className="space-y-6">
        <Fact
          id="facts-movement-basics"
          title="Fact 1 — Movement Basics"
          content="Skeletal muscles move joints by pulling (not pushing) and usually work in coordinated pairs as agonist and antagonist."
          sources={[
            { url: "https://www.britannica.com/science/muscle", label: "Source" }
          ]}
        />
        <div className="text-sm text-muted-foreground pl-6 -mt-4">
          <strong>Why this is solid:</strong> Standard anatomy texts (e.g., Britannica) describe skeletal muscle as the voluntary, multinucleated tissue that moves the skeleton via lever mechanics—implying paired actions for smooth control.
        </div>

        <Fact
          id="facts-contraction"
          title="Fact 2 — How Contraction Starts"
          content="Contraction happens when an electrical signal releases Ca²⁺, which lets myosin heads bind to actin; ATP powers the sliding (cross-bridge) cycle."
          sources={[
            { url: "https://www.khanacademy.org/science/biology/human-biology/muscles/v/tropomyosin-and-troponin-and-their-role-in-regulating-muscle-contraction", label: "Source" },
            { url: "https://www.khanacademy.org/science/biology/human-biology/muscles/v/myosin-and-actin", label: "Source 2" }
          ]}
        />

        <Fact
          id="facts-adaptation"
          title="Fact 3 — Adaptation & Structure"
          content="Strength improves through hypertrophy (more/larger myofibrils) and better motor-unit recruitment; skeletal muscle fibers are typically multinucleated."
          sources={[
            { url: "https://www.britannica.com/science/myofibril", label: "Source" },
            { url: "https://www.britannica.com/science/skeletal-muscle", label: "Source 2" }
          ]}
        />
      </div>
    </section>
  );
}
