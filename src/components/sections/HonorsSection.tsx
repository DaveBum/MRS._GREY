import { Card } from "@/components/ui/card";
import { ExternalLink, Sparkles, Shield } from "lucide-react";

export function HonorsSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-muscle-dark">Honors Add-Ons</h2>
      
      <div className="space-y-6">
        <Card className="p-8 bg-card border-2">
          <div className="flex items-start gap-4">
            <Sparkles className="w-8 h-8 text-muscle-yellow flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-muscle-dark">Real Science Use</h3>
              <p className="text-lg leading-relaxed mb-4">
                This power could accelerate rehab for people with muscle loss or injury by improving safe fiber recruitment and strength. (Conceptually grounded in motor-unit control and hypertrophy science.)
              </p>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6487929/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
              >
                Source
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-destructive/5 border-2 border-destructive/20">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-muscle-dark">Power Limit</h3>
              <p className="text-lg leading-relaxed mb-4">
                If pushed too far, extreme exertion risks tendon/ligament injury and rhabdomyolysis (muscle breakdown that can harm the kidneys)—so power must be limited.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.cdc.gov/niosh/rhabdo/about/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
                >
                  Source
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.cdc.gov/niosh/rhabdo/signs-symptoms/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
                >
                  Source 2
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
