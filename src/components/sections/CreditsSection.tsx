import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function CreditsSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-muscle-dark flex items-center gap-3">
        <GraduationCap className="w-10 h-10 text-primary" />
        Credits
      </h2>
      <Card className="p-8 bg-card border-2 text-center">
        <p className="text-2xl font-semibold mb-2">Dave Baum</p>
        <p className="text-lg text-muted-foreground">Mrs. Greys Science Class</p>
      </Card>
    </section>
  );
}
