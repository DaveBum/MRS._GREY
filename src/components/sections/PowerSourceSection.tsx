import { Card } from "@/components/ui/card";

export function PowerSourceSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <Card className="p-8 bg-card border-2">
        <h2 className="text-3xl font-bold mb-4 text-muscle-dark">Power Source</h2>
        <p className="text-lg leading-relaxed">
          My power is from <strong>skeletal muscle</strong> in the <strong>muscular system</strong>.
        </p>
      </Card>
    </section>
  );
}
