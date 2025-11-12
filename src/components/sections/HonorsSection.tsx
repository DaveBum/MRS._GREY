import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export function HonorsSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <h2 className="text-5xl font-black mb-12 text-center gradient-text">Honors Add-Ons</h2>
      </ScrollReveal>
      
      <div className="space-y-8">
        <ScrollReveal delay={0.1}>
          <Card className="p-10 bg-gradient-to-br from-card to-card/50 border-2 border-muscle-yellow/30 card-hover-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-muscle-yellow/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Real Science Use</h3>
                  <p className="text-lg leading-relaxed mb-4 text-foreground/90">
                    This power could accelerate <span className="text-muscle-yellow font-semibold">rehab for people with muscle loss or injury</span> by improving safe fiber recruitment and strength. (Conceptually grounded in motor-unit control and hypertrophy science.)
                  </p>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6487929/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-muscle-yellow/10 text-muscle-yellow hover:bg-muscle-yellow/20 rounded-full border border-muscle-yellow/30 hover:border-muscle-yellow/50 transition-all"
                  >
                    Source
                    <ExternalLink className="w-3 h-3" />
                  </a>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Card className="p-10 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30 card-hover-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-destructive/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-destructive">Power Limit</h3>
                  <p className="text-lg leading-relaxed mb-4 text-foreground/90">
                    If pushed too far, extreme exertion risks <span className="text-destructive font-semibold">tendon/ligament injury</span> and <span className="text-destructive font-semibold">rhabdomyolysis</span> (muscle breakdown that can harm the kidneys)—so power must be limited.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.cdc.gov/niosh/rhabdo/about/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-full border border-destructive/30 hover:border-destructive/50 transition-all"
                    >
                      Source
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.cdc.gov/niosh/rhabdo/signs-symptoms/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-full border border-destructive/30 hover:border-destructive/50 transition-all"
                    >
                      Source 2
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
