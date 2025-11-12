import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Zap } from "lucide-react";
import beforeAfterImage from "@/assets/before-after-ca2.png";

export function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <ScrollReveal>
        <h2 className="text-5xl font-black mb-12 text-center gradient-text">How the Power Works</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Card className="p-10 bg-gradient-to-br from-card via-card/80 to-card/50 border-2 border-muscle-yellow/30 card-hover-glow relative overflow-hidden space-y-8">
          <div className="absolute top-0 left-0 w-64 h-64 bg-muscle-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-muscle-pink/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-muscle-yellow/20 rounded-xl">
                <Zap className="w-8 h-8 text-muscle-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Mechanism</h3>
            </div>
            
            <p className="text-xl leading-relaxed text-foreground/90 font-medium">
              I amplify <span className="text-muscle-pink font-bold">calcium release</span> and speed <span className="text-muscle-yellow font-bold">ATP turnover</span>, so more motor units fire together and cross-bridge cycling is faster—turning pink "normal" fibers into bright yellow "super" fibers.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-wrap gap-2">
            <a
              href="https://www.khanacademy.org/science/biology/human-biology/muscles/v/tropomyosin-and-troponin-and-their-role-in-regulating-muscle-contraction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-muscle-yellow/10 text-muscle-yellow hover:bg-muscle-yellow/20 rounded-full border border-muscle-yellow/30 hover:border-muscle-yellow/50 transition-all"
            >
              Source
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4898252/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-muscle-yellow/10 text-muscle-yellow hover:bg-muscle-yellow/20 rounded-full border border-muscle-yellow/30 hover:border-muscle-yellow/50 transition-all"
            >
              Source 2
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6487929/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-muscle-yellow/10 text-muscle-yellow hover:bg-muscle-yellow/20 rounded-full border border-muscle-yellow/30 hover:border-muscle-yellow/50 transition-all"
            >
              Source 3
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <figure className="relative z-10 mt-8">
            <div className="relative group">
              <img
                src={beforeAfterImage}
                alt="Before and after diagram showing Ca²⁺ signaling and motor-unit recruitment: BEFORE shows pink background with 3 muscle fibers and Ca²⁺ with upward arrow; AFTER shows yellow background with 5 stacked muscle fibers and Ca²⁺ with upward arrow"
                className="w-full rounded-2xl shadow-2xl border-2 border-muscle-yellow/20 group-hover:border-muscle-yellow/40 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-muscle-yellow/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <figcaption className="text-center mt-6 text-sm text-muted-foreground font-medium">
              Before / After: Ca²⁺ signaling & motor-unit recruitment
            </figcaption>
          </figure>
        </Card>
      </ScrollReveal>
    </section>
  );
}
