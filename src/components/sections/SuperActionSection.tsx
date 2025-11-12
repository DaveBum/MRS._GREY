import { Card } from "@/components/ui/card";
import { ExternalLink, Zap } from "lucide-react";

export function SuperActionSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-muscle-dark flex items-center gap-3">
        <Zap className="w-10 h-10 text-muscle-yellow" />
        Super Action
      </h2>
      <Card className="p-8 bg-gradient-to-br from-muscle-yellow/10 to-muscle-pink/10 border-2 border-muscle-yellow">
        <p className="text-lg leading-relaxed mb-4">
          I can hoist a car because I recruit more fast-twitch fibers and synchronize motor-unit firing while tapping the ATP–phosphocreatine (ATP-PC) system for short, explosive energy.
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
      </Card>
    </section>
  );
}
