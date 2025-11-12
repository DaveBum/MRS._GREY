import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Zap } from "lucide-react";

export function PowerSourceSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <Card className="p-10 bg-gradient-to-br from-card to-card/50 border-2 border-muscle-pink/30 card-hover-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-muscle-pink/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-muscle-pink/20 rounded-xl">
                <Zap className="w-8 h-8 text-muscle-pink" />
              </div>
              <h2 className="text-4xl font-black text-foreground">Power Source</h2>
            </div>
            <p className="text-xl leading-relaxed text-foreground/90">
              My power is from <strong className="text-muscle-pink">skeletal muscle</strong> in the <strong className="text-muscle-yellow">muscular system</strong>.
            </p>
          </div>
        </Card>
      </ScrollReveal>
    </section>
  );
}
