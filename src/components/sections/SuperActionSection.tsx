import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Zap, Flame } from "lucide-react";

export function SuperActionSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-4">
            <Flame className="w-12 h-12 text-muscle-yellow animate-pulse-glow" />
            <h2 className="text-5xl font-black gradient-text">
              Super Action
            </h2>
            <Zap className="w-12 h-12 text-muscle-pink animate-pulse-glow" />
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <Card className="p-10 bg-gradient-to-br from-muscle-yellow/20 via-muscle-pink/10 to-muscle-red/10 border-2 border-muscle-yellow/50 card-hover-glow relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-muscle-yellow/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-muscle-pink/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          
          <div className="relative z-10 space-y-6">
            <p className="text-2xl leading-relaxed font-bold text-foreground">
              I can <span className="text-muscle-yellow text-glow-yellow">hoist a car</span> because I recruit more <span className="text-muscle-pink">fast-twitch fibers</span> and synchronize <span className="text-muscle-yellow">motor-unit firing</span> while tapping the <span className="text-muscle-red">ATP–phosphocreatine (ATP-PC)</span> system for short, explosive energy.
            </p>
            
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6487929/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm bg-muscle-yellow/20 text-muscle-yellow hover:bg-muscle-yellow/30 rounded-full border border-muscle-yellow/50 hover:border-muscle-yellow/70 transition-all font-semibold"
            >
              View Research
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Card>
      </ScrollReveal>
    </section>
  );
}
