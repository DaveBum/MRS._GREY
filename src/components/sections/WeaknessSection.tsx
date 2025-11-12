import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export function WeaknessSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-destructive">
            Weakness
          </h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <Card className="p-10 bg-gradient-to-br from-destructive/10 via-destructive/5 to-destructive/10 border-2 border-destructive/30 card-hover-glow relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-destructive/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-destructive/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="relative z-10 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Limitations & Vulnerabilities</h3>
              <p className="text-xl leading-relaxed text-foreground/90">
                <span className="text-destructive font-bold">Heat</span>, <span className="text-destructive font-bold">dehydration</span>, and <span className="text-destructive font-bold">electrolyte imbalance</span> (Na+/K+/Ca2+/Mg2+) disrupt signaling and cause cramps or fatigue; <span className="text-destructive font-bold">low oxygen</span> also reduces power.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK499895/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-full border border-destructive/30 hover:border-destructive/50 transition-all"
              >
                Source
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK541123/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-full border border-destructive/30 hover:border-destructive/50 transition-all"
              >
                Source 2
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1150229/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-full border border-destructive/30 hover:border-destructive/50 transition-all"
              >
                Source 3
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Card>
      </ScrollReveal>
    </section>
  );
}
