import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ExtendedSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-muscle-dark">
          ⚡ MUSCLE TITAN — Beyond Human Limits
        </h2>
        <p className="text-xl font-semibold mb-4">
          From Muscle Fiber to Bio-Engineered Power System
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Human strength depends on an extraordinary choreography between cells, chemistry, and electricity. 
          Muscle Titan isn't fantasy—it's an extrapolation of genuine frontier science. What if every step 
          in muscular performance were optimized to its theoretical limit?
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            1. Cellular Architecture Upgrade 🧬
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> Skeletal muscle cells have multiple nuclei to handle large cell volumes, 
              but protein production (myofibril growth) is still rate-limited by transcription/translation machinery.
            </p>
            <p>
              <strong>Titan-level:</strong> Enhanced gene expression of structural proteins (actin, myosin) via upregulation 
              of the ACTN3 "speed gene" variant (associated with fast-twitch fibers in elite sprinters). Myofibrils multiply 
              faster, packing more contractile units per cross-sectional area—raw force multiplies.
            </p>
            <a
              href="https://doi.org/10.1093/hmg/ddw090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: North & Yang, Human Molecular Genetics (2016)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            2. Bio-Energetic Optimization 🔋
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> The ATP-PC (phosphocreatine) system fuels ~10 seconds of max effort; 
              then glycolysis and oxidative pathways kick in, each slower but longer-lasting.
            </p>
            <p>
              <strong>Titan-level:</strong> Overexpress PGC-1α (peroxisome proliferator-activated receptor gamma coactivator 1-alpha), 
              the master regulator of mitochondrial biogenesis. More mitochondria = faster ATP regeneration from both aerobic and 
              anaerobic pathways, sustaining high power output longer without lactic acid buildup.
            </p>
            <a
              href="https://doi.org/10.1016/S0092-8674(00)81688-9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: Puigserver et al., Cell (1998)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            3. Neural Synchronization ⚙️
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> Motor units fire asynchronously for smooth, fatigue-resistant contractions. 
              Untrained individuals recruit only ~30–40% of muscle fibers at once; athletes reach ~50–60% through training.
            </p>
            <p>
              <strong>Titan-level:</strong> Use transcranial direct current stimulation (tDCS) principles or hypothetical 
              neural interface to synchronize motor-unit firing across 80–90% of fibers simultaneously. This "hypersynchrony" 
              mimics the involuntary strength seen in life-threatening situations ("hysterical strength")—now controllable.
            </p>
            <a
              href="https://doi.org/10.1038/nrn3114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: Reis & Fritsch, Nature Reviews Neuroscience (2011)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            4. Oxygen Logistics 💨
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> Myoglobin stores oxygen in muscle; capillary density determines O₂ delivery rate.
            </p>
            <p>
              <strong>Titan-level:</strong> Increase myoglobin concentration (as seen in diving mammals like seals) and upregulate 
              VEGF (vascular endothelial growth factor) for explosive angiogenesis—more capillaries per fiber. Coupled with 
              nitric oxide (NO) vasodilation, blood flow skyrockets, delaying anaerobic threshold.
            </p>
            <a
              href="https://doi.org/10.1113/EP086289"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: Lundby et al., Experimental Physiology (2017)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            5. Biomechanical Reinforcement 🦴
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> Tendons and ligaments are collagenous, elastic, and adapt slowly to load. 
              Extreme force risks rupture.
            </p>
            <p>
              <strong>Titan-level:</strong> Enhance collagen cross-linking and elastin content in connective tissue. Mimic 
              kangaroo tendons (which store/release elastic energy at 93% efficiency). Bones densify via Wolff's law 
              (mechanical loading → osteoblast activity), preventing fractures under superhuman loads.
            </p>
            <a
              href="https://doi.org/10.1038/324146a0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: Ker et al., Nature (1986)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            6. Thermoregulation & Metabolic Safety 🌡️
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> Only ~25% of metabolic energy becomes mechanical work; the rest is heat. 
              Overheating causes fatigue, cramps, and heat stroke.
            </p>
            <p>
              <strong>Titan-level:</strong> Amplify heat-shock proteins (HSPs) to protect cells from thermal damage. Increase 
              sweat gland density and eccrine output. Install a "metabolic governor" (hypothalamic feedback loop) that ramps 
              down power if core temp exceeds 39.5°C—preventing rhabdomyolysis while maximizing safe output.
            </p>
            <a
              href="https://doi.org/10.1113/JP270131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: Segal, Journal of Physiology (2015)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            7. Regeneration & Repair 🧫
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              <strong>Normal physiology:</strong> Satellite cells (muscle stem cells) repair micro-tears from training, 
              but recovery takes days.
            </p>
            <p>
              <strong>Titan-level:</strong> Suppress myostatin (the "brake" on muscle growth) and boost follistatin 
              (myostatin's antagonist). Animal studies show myostatin knockout → double muscle mass. Accelerate satellite 
              cell activation post-exertion—same-day recovery from maximal efforts.
            </p>
            <a
              href="https://doi.org/10.1038/387083a0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: McPherron et al., Nature (1997)
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            8. Ethical Reflection 🧠
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              Could humans ethically pursue these enhancements? Gene therapy (ACTN3, myostatin), stem cell medicine 
              (satellite cells), and neuromodulation (tDCS) are all active research areas. Concerns:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Equity:</strong> Would such tech be accessible to all, or only elites?</li>
              <li><strong>Safety:</strong> Off-target effects, long-term unknowns.</li>
              <li><strong>Fair play:</strong> In sports, gene doping is banned—where's the line between therapy and enhancement?</li>
            </ul>
            <p>
              Muscle Titan embodies a future where these questions must be answered.
            </p>
            <a
              href="https://bioethics.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red border-b border-dotted transition-colors"
            >
              Source: U.S. NIH Bioethics Resources
              <ExternalLink className="w-3 h-3" />
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            9. Cross-Disciplinary Applications 🌍
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Field</TableHead>
                  <TableHead className="font-bold">Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Medicine</TableCell>
                  <TableCell>
                    Muscle-wasting diseases (muscular dystrophy, sarcopenia): gene therapy + satellite cell activation
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Space Science</TableCell>
                  <TableCell>
                    Counter microgravity atrophy with neural stimulation + mitochondrial boosters
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sports Rehab</TableCell>
                  <TableCell>
                    Accelerate recovery from ACL tears, rotator cuff injuries via collagen engineering
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Robotics & AI</TableCell>
                  <TableCell>
                    Biomimetic actuators inspired by myosin mechanics and tendon elasticity
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10" className="border rounded-lg px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            10. Final Reflection
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed space-y-4 pt-4">
            <p>
              Muscle Titan is more than a comic-book hero—it's a thought experiment grounded in molecular biology, 
              exercise physiology, and bioengineering. Every "superpower" described here traces back to real proteins, 
              genes, and cellular pathways. The question isn't whether such enhancements are possible—it's whether 
              we'll use them wisely.
            </p>
            <p className="font-semibold text-muscle-dark">
              Strength isn't just about lifting weight—it's about lifting humanity forward.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
