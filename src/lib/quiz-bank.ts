// lib/quiz-bank.ts
// 20 questions strictly based on the "Muscle Titan" project content.
// Types kept simple so your QuizEngine can randomize/paginate easily.

export type QuestionType = "mc" | "tf" | "short";

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  choices?: string[];          // for "mc"
  answer: string | string[];   // correct answer (string for mc/tf/short)
  reference?: string;          // anchor/section hint shown as “Learn more”
  explanation?: string;        // short rationale to show after answering
}

export const quizBank: Question[] = [
  {
    id: "Q1",
    type: "mc",
    prompt:
      "How do skeletal muscles produce movement at joints, according to Muscle Titan?",
    choices: ["They push", "They pull", "They stretch bones", "They inflate like balloons"],
    answer: "They pull",
    reference: "#facts-movement-basics",
    explanation:
      "Skeletal muscles pull on bones and usually work in agonist–antagonist pairs."
  },
  {
    id: "Q2",
    type: "tf",
    prompt:
      "Skeletal muscles usually act in coordinated agonist–antagonist pairs for smooth control.",
    answer: "true",
    reference: "#facts-movement-basics",
    explanation: "That pairing allows one muscle to move while the opposite stabilizes."
  },
  {
    id: "Q3",
    type: "mc",
    prompt:
      "Which ion starts contraction by enabling myosin to bind to actin in the sliding-filament cycle?",
    choices: ["Na⁺", "K⁺", "Ca²⁺", "Cl⁻"],
    answer: "Ca²⁺",
    reference: "#facts-contraction",
    explanation: "Ca²⁺ exposes actin binding sites; ATP then powers the cross-bridge cycle."
  },
  {
    id: "Q4",
    type: "mc",
    prompt:
      "What directly powers the cross-bridge (sliding) cycle during contraction?",
    choices: ["Glucose", "ATP", "Lactate", "Glycogen"],
    answer: "ATP",
    reference: "#facts-contraction",
    explanation: "ATP fuels myosin head cycling in the actin–myosin interaction."
  },
  {
    id: "Q5",
    type: "tf",
    prompt:
      "Strength improves through hypertrophy (more/larger myofibrils) and better motor-unit recruitment.",
    answer: "true",
    reference: "#facts-adaptation",
    explanation: "Both structural (myofibrils) and neural (recruitment) changes raise strength."
  },
  {
    id: "Q6",
    type: "mc",
    prompt:
      "Skeletal muscle fibers are typically ________.",
    choices: ["single-nucleated", "multinucleated", "anucleate", "variable with no trend"],
    answer: "multinucleated",
    reference: "#facts-adaptation",
    explanation: "Skeletal fibers usually contain many nuclei along the cell."
  },
  {
    id: "Q7",
    type: "mc",
    prompt:
      "Which energy system does Muscle Titan tap for short, explosive effort in the Super Action?",
    choices: [
      "ATP–phosphocreatine (ATP-PC) system",
      "Long-term aerobic respiration",
      "Beta-oxidation only",
      "Gluconeogenesis"
    ],
    answer: "ATP–phosphocreatine (ATP-PC) system",
    reference: "#super-action",
    explanation: "The ATP-PC system delivers immediate power for brief, maximal output."
  },
  {
    id: "Q8",
    type: "mc",
    prompt:
      "Which fiber type is preferentially recruited for Muscle Titan’s explosive lift?",
    choices: ["Slow-twitch fibers", "Fast-twitch fibers", "Cardiac fibers", "Smooth muscle fibers"],
    answer: "Fast-twitch fibers",
    reference: "#super-action",
    explanation: "Fast-twitch fibers generate high power for short durations."
  },
  {
    id: "Q9",
    type: "mc",
    prompt:
      "Which factor listed in the Weakness section can disrupt signaling and trigger cramps/fatigue?",
    choices: [
      "Dehydration and electrolyte imbalance",
      "Listening to music",
      "Extra carbohydrates before exercise",
      "Static stretching"
    ],
    answer: "Dehydration and electrolyte imbalance",
    reference: "#weakness",
    explanation: "Electrolyte imbalance (Na⁺/K⁺/Ca²⁺/Mg²⁺) and dehydration impair function."
  },
  {
    id: "Q10",
    type: "mc",
    prompt:
      "Which electrolyte was NOT named as a weakness factor in the project?",
    choices: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺", "Fe²⁺"],
    answer: "Fe²⁺",
    reference: "#weakness",
    explanation: "The listed ions were Na⁺, K⁺, Ca²⁺, and Mg⁺⁺."
  },
  {
    id: "Q11",
    type: "tf",
    prompt:
      "Low oxygen availability reduces power, according to the Weakness section.",
    answer: "true",
    reference: "#weakness",
    explanation: "Insufficient O₂ limits energy production and shortens endurance/power."
  },
  {
    id: "Q12",
    type: "mc",
    prompt:
      "What was the stated real-world application of this power?",
    choices: [
      "Accelerate rehab for muscle loss or injury",
      "Increase height growth",
      "Cure all bone fractures instantly",
      "Replace the nervous system"
    ],
    answer: "Accelerate rehab for muscle loss or injury",
    reference: "#real-science-use",
    explanation: "The project ties stronger, safer recruitment to rehabilitation."
  },
  {
    id: "Q13",
    type: "mc",
    prompt:
      "Which condition from extreme exertion can harm the kidneys and was cited as a power limit?",
    choices: ["Tendinitis", "Rhabdomyolysis", "Osteoporosis", "Anemia"],
    answer: "Rhabdomyolysis",
    reference: "#power-limit",
    explanation: "Rhabdomyolysis is muscle breakdown that can stress the kidneys."
  },
  {
    id: "Q14",
    type: "mc",
    prompt:
      "In the Extended (150%) section, which gene (when up-regulated) is linked to explosive power in elite sprinters?",
    choices: ["ACTN3", "MYH7", "COL1A1", "DES"],
    answer: "ACTN3",
    reference: "#extended-1-cellular-architecture",
    explanation: "ACTN3 (α-actinin-3) association was cited as a real-world analog."
  },
  {
    id: "Q15",
    type: "mc",
    prompt:
      "Which regulator was cited as driving mitochondrial biogenesis and increased oxidative capacity?",
    choices: ["PGC-1α", "mTORC2", "AMPKβ3 only", "HIF-1α exclusively"],
    answer: "PGC-1α",
    reference: "#extended-2-bioenergetics",
    explanation: "The text names PGC-1α activation as the biogenesis trigger."
  },
  {
    id: "Q16",
    type: "mc",
    prompt:
      "Which real technique was mentioned as improving motor-unit synchronization/reaction time?",
    choices: ["tDCS", "Ultrasound imaging", "MRI", "PET scan"],
    answer: "tDCS",
    reference: "#extended-3-neural-sync",
    explanation: "Transcranial direct-current stimulation was given as the correlate."
  },
  {
    id: "Q17",
    type: "mc",
    prompt:
      "Improved oxygen logistics in the Extended section were attributed to which pair?",
    choices: [
      "Higher myoglobin and greater capillary density",
      "More glycogen and more bone marrow",
      "Less hemoglobin and fewer capillaries",
      "Higher sodium and lower potassium"
    ],
    answer: "Higher myoglobin and greater capillary density",
    reference: "#extended-4-oxygen",
    explanation: "Those adaptations increase diffusion and delay anaerobic fatigue."
  },
  {
    id: "Q18",
    type: "mc",
    prompt:
      "The biomechanical reinforcement model referenced which animal’s tendon architecture?",
    choices: ["Kangaroo", "Cheetah", "Horse", "Dolphin"],
    answer: "Kangaroo",
    reference: "#extended-5-tendon",
    explanation: "Kangaroo tendons were cited for elastic energy storage/release."
  },
  {
    id: "Q19",
    type: "mc",
    prompt:
      "Which molecule mediates vasodilation for thermoregulation in the Extended section?",
    choices: ["Nitric oxide (NO)", "Carbon dioxide (CO₂)", "Ammonia (NH₃)", "Ozone (O₃)"],
    answer: "Nitric oxide (NO)",
    reference: "#extended-6-thermoregulation",
    explanation: "NO-mediated vasodilation helps disperse heat and maintain perfusion."
  },
  {
    id: "Q20",
    type: "tf",
    prompt:
      "Boosting myostatin inhibitors like follistatin was presented as a way to prevent atrophy and enhance regrowth.",
    answer: "true",
    reference: "#extended-7-regeneration",
    explanation: "The Regeneration & Repair item states exactly that."
  }
];

export default quizBank;