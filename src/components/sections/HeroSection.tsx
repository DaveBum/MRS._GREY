import heroImage from "@/assets/muscle-titan-hero.png";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center space-y-8">
        <img
          src={heroImage}
          alt="Muscle Titan hero artwork with braided muscle bundles showing normal pink fibers transforming into glowing yellow super fibers"
          className="mx-auto w-full max-w-2xl rounded-2xl shadow-lg"
        />
        <h1 className="text-6xl md:text-7xl font-bold text-muscle-dark">
          MUSCLE TITAN
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Art note: normal fibers = pink, super fibers = yellow with small arrows along fibers to show "pull."
        </p>
      </div>
    </section>
  );
}
