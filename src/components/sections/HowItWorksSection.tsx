import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import beforeAfterImage from "@/assets/before-after-ca2.png";

export function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-muscle-dark">How the Power Works</h2>
      <Card className="p-8 bg-card border-2 space-y-6">
        <p className="text-lg leading-relaxed">
          I amplify calcium release and speed ATP turnover, so more motor units fire together and cross-bridge cycling is faster—turning pink "normal" fibers into bright yellow "super" fibers.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.khanacademy.org/science/biology/human-biology/muscles/v/tropomyosin-and-troponin-and-their-role-in-regulating-muscle-contraction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            Source
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4898252/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            Source 2
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6487929/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted border-muted-foreground hover:border-muscle-red transition-colors"
          >
            Source 3
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <figure className="mt-8">
          <img
            src={beforeAfterImage}
            alt="Before and after diagram showing Ca²⁺ signaling and motor-unit recruitment: BEFORE shows pink background with 3 muscle fibers and Ca²⁺ with upward arrow; AFTER shows yellow background with 5 stacked muscle fibers and Ca²⁺ with upward arrow"
            className="w-full rounded-xl shadow-md"
          />
          <figcaption className="text-center mt-4 text-sm text-muted-foreground">
            Before / After: Ca²⁺ signaling & motor-unit recruitment
          </figcaption>
        </figure>
      </Card>
    </section>
  );
}
