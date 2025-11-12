import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

export function CreditsSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black gradient-text mb-4">Credits</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <Card className="p-12 bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 card-hover-glow relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center justify-center gap-4 mb-4">
              <Award className="w-12 h-12 text-primary" />
              <GraduationCap className="w-16 h-16 text-secondary" />
              <Award className="w-12 h-12 text-primary" />
            </div>
            
            <div>
              <p className="text-4xl font-black gradient-text mb-3">Dave Baum</p>
              <p className="text-2xl text-foreground/80 font-semibold">Mrs. Greys Science Class</p>
            </div>
            
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                Honors Anatomy & Physiology Project
              </p>
            </div>
          </div>
        </Card>
      </ScrollReveal>
    </section>
  );
}
