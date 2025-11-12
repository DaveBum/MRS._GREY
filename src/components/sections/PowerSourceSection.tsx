import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";

export function PowerSourceSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <Card className="p-10 bg-gradient-to-br from-card to-card/50 border-2 border-muscle-pink/30 card-hover-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-muscle-pink/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-foreground mb-6">Power Source</h2>
            <p className="text-xl leading-relaxed text-foreground/90">
              My power is from <strong className="text-muscle-pink">skeletal muscle</strong> in the <strong className="text-muscle-yellow">muscular system</strong>.
            </p>
          </div>
        </Card>
      </ScrollReveal>
    </section>
  );
}
