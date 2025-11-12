import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import daveBaumPhoto from "@/assets/dave-baum-photo.jpg";

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
            
            <div>
              <p className="text-4xl font-black gradient-text mb-3">Dave Baum</p>
              <div className="flex justify-center mb-4">
                <img 
                  src={daveBaumPhoto} 
                  alt="Dave Baum" 
                  className="w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                />
              </div>
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
