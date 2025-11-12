import { Card } from "@/components/ui/card";
import { ExternalLink, AlertTriangle } from "lucide-react";

export function WeaknessSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-muscle-dark flex items-center gap-3">
        <AlertTriangle className="w-10 h-10 text-destructive" />
        Weakness
      </h2>
      <Card className="p-8 bg-destructive/5 border-2 border-destructive/20">
        <p className="text-lg leading-relaxed mb-4">
          Heat, dehydration, and electrolyte imbalance (Na⁺/K⁺/Ca²⁺/Mg²⁺) disrupt signaling and cause cramps or fatigue; low oxygen also reduces power.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.ncbi.nlm.nih.gov/books/NBK499895/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            Source
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.ncbi.nlm.nih.gov/books/NBK541123/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            Source 2
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1150229/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            Source 3
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </Card>
    </section>
  );
}
