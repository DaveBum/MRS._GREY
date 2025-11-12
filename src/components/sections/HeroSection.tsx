import heroImage from "@/assets/muscle-titan-hero.png";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-muscle-pink/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-muscle-yellow/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="text-center space-y-12">
        <div className="relative inline-block">
          <img
            src={heroImage}
            alt="Muscle Titan hero artwork with braided muscle bundles showing normal pink fibers transforming into glowing yellow super fibers"
            className="mx-auto w-full max-w-3xl rounded-3xl shadow-2xl card-glow animate-float"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black gradient-text tracking-tight">
            MUSCLE TITAN
          </h1>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-muscle-pink/20 to-muscle-yellow/20 border border-muscle-pink/30 rounded-full backdrop-blur-sm">
            <p className="text-base md:text-lg text-foreground/80 font-medium">
              Honors Anatomy & Physiology Superhero Project
            </p>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Art note: normal fibers = pink, super fibers = yellow with small arrows along fibers to show "pull."
          </p>
        </div>
      </div>
    </section>
  );
}
