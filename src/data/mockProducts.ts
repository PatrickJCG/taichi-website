// ─── Product Data Model ────────────────────────────────────────────────────

export interface ProductMetrics {
  fcr: string;          // Feed Conversion Ratio improvement (e.g. "−12%")
  dailyGain: string;    // Average Daily Gain improvement (e.g. "+14%")
  doseRate: string;     // Inclusion rate (e.g. "500–1000 g/ton")
  survivalRate?: string; // Aqua & Poultry specific
}

export interface Product {
  id: string;
  title: string;
  badge: string;
  category: string;         // Species category: Swine, Poultry, Pets, Aqua, Ruminants
  functionCategory: string; // Function category: Functional Feed Additives, Nutritional Feed Additives, Specialty Products, Commodity Products
  speciesTags: string[];
  description: string;
  imageUrl: string;
  metrics: ProductMetrics;
}

export const SHARED_IMAGE_PLACEHOLDER = "https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&w=800&q=80";

export const MOCK_CATEGORIES = [
  "Swine",
  "Poultry",
  "Aqua",
  "Pets",
  "Ruminants"
];

export const MOCK_FUNCTION_CATEGORIES = [
  "Functional Feed Additives",
  "Nutritional Feed Additives",
  "Specialty Products",
  "Commodity Products"
];

export const MOCK_PRODUCTS: Product[] = [
  // ─── Functional Feed Additives ─────────────────────────────────────────────
  {
    id: "prod-1",
    title: "Tai Chi Gut-Acidifier Complex (Formic & Citric Blend)",
    badge: "Bestseller",
    category: "Swine",
    functionCategory: "Functional Feed Additives",
    speciesTags: ["Swine", "Organic Acids", "Gut Health"],
    description: "Highly stable, micro-encapsulated organic acidifier formulated to lower gastric pH, support early weaning gut development, and suppress pathogen growth.",
    imageUrl: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−12%", dailyGain: "+14%", doseRate: "500–1000 g/t" }
  },
  {
    id: "prod-13",
    title: "Tai Chi Premium Feed Antioxidant Complex",
    badge: "Freshness Shield",
    category: "",
    functionCategory: "Functional Feed Additives",
    speciesTags: [],
    description: "Advanced feed antioxidant formulation designed to prevent lipid autoxidation, preserve fat-soluble vitamins, and extend feed shelf life.",
    imageUrl: "https://images.unsplash.com/photo-1607619275068-24722480f87b?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−5%", dailyGain: "+4%", doseRate: "125–250 g/t" }
  },
  {
    id: "prod-10",
    title: "Tai Chi Betaine HCl (Osmoregulator)",
    badge: "Stress Support",
    category: "Aqua",
    functionCategory: "Functional Feed Additives",
    speciesTags: ["Fish & Shrimp", "Betaine", "Osmoregulation"],
    description: "High-purity crystalline Betaine hydrochloride acting as a powerful methyl donor and osmoregulator to alleviate salinity and temperature stress in aquaculture.",
    imageUrl: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−13%", dailyGain: "+16%", doseRate: "500–1200 g/t", survivalRate: "96.5%" }
  },
  {
    id: "prod-14",
    title: "Tai Chi Nutritional Emulsifier Premix",
    badge: "Digestive Boost",
    category: "",
    functionCategory: "Functional Feed Additives",
    speciesTags: [],
    description: "Highly effective nutritional emulsifier that enhances the digestion and absorption of dietary fats, oils, and fat-soluble nutrients.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−8%", dailyGain: "+7%", doseRate: "200–500 g/t" }
  },
  {
    id: "prod-2",
    title: "Tai Chi Multi-Enzyme Premix (Phytase & Xylanase)",
    badge: "High Efficacy",
    category: "Poultry",
    functionCategory: "Functional Feed Additives",
    speciesTags: ["Poultry", "Enzymes", "Feed Efficiency"],
    description: "Thermo-tolerant multi-enzyme complex engineered to liberate bound phosphorus and digest non-starch polysaccharides in broiler and layer feed.",
    imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−9%", dailyGain: "+11%", doseRate: "250–500 g/t", survivalRate: "98.5%" }
  },
  {
    id: "prod-15",
    title: "Tai Chi Palatability Flavors & Sweeteners",
    badge: "Feed Intake",
    category: "",
    functionCategory: "Functional Feed Additives",
    speciesTags: [],
    description: "Premium feed flavors and sweeteners formulated to improve feed palatability, mask off-odors, and ensure consistent feed intake during stress or diet transitions.",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−6%", dailyGain: "+9%", doseRate: "100–300 g/t" }
  },
  {
    id: "prod-16",
    title: "Tai Chi Broad-Spectrum Mold Inhibitor",
    badge: "Preservation",
    category: "",
    functionCategory: "Functional Feed Additives",
    speciesTags: [],
    description: "Synergistic organic acid-based mold inhibitor that prevents mold growth, controls Salmonella, and preserves the nutritional quality of stored feeds.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−4%", dailyGain: "+3%", doseRate: "500–1500 g/t" }
  },
  {
    id: "prod-11",
    title: "Tai Chi Broad-Spectrum Mycotoxin Binder",
    badge: "Toxin Shield",
    category: "Poultry",
    functionCategory: "Functional Feed Additives",
    speciesTags: ["Poultry", "Mycotoxin", "Gut Shield"],
    description: "Synergistic blend of modified aluminosilicates and yeast cell walls that adsorbs polar and non-polar mycotoxins, protecting liver and immune health.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−9%", dailyGain: "+12%", doseRate: "1000–2000 g/t" }
  },
  {
    id: "prod-4",
    title: "Tai Chi PetVital Probiotic & Prebiotic Blend",
    badge: "Companion Care",
    category: "Pets",
    functionCategory: "Functional Feed Additives",
    speciesTags: ["Dogs & Cats", "Probiotics", "Microbiome"],
    description: "Microbial blend of Lactobacillus and Bifidobacterium strains to support digestive health, stool quality, and immune vigor in companion animals.",
    imageUrl: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−8%", dailyGain: "+6%", doseRate: "150–250 g/t" }
  },

  // ─── Nutritional Feed Additives ────────────────────────────────────────────
  {
    id: "prod-5",
    title: "Tai Chi Chelated Mineral Blend (Cattle)",
    badge: "High Purity",
    category: "Ruminants",
    functionCategory: "Nutritional Feed Additives",
    speciesTags: ["Cattle", "Minerals", "Bioavailability"],
    description: "Premium organic chelated trace mineral premix (Zinc, Copper, Manganese, Selenium) tailored for dairy and beef cattle hoof health and fertility.",
    imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−10%", dailyGain: "+13%", doseRate: "400–800 g/t" }
  },
  {
    id: "prod-17",
    title: "Tai Chi Premium Vitamin Premix Blend",
    badge: "Vitality Plus",
    category: "",
    functionCategory: "Nutritional Feed Additives",
    speciesTags: [],
    description: "Comprehensive, highly bioavailable blend of essential vitamins designed to prevent deficiencies and optimize metabolic functions under intensive production.",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−8%", dailyGain: "+10%", doseRate: "500–1000 g/t" }
  },
  {
    id: "prod-3",
    title: "Tai Chi Coated Vitamin C 97%",
    badge: "Aqueos Stable",
    category: "Aqua",
    functionCategory: "Nutritional Feed Additives",
    speciesTags: ["Fish & Shrimp", "Vitamins", "Immune Defense"],
    description: "Specialized heat-stable, coated ascorbic acid that prevents leaching in water and supports survival rates during aquatic stress periods.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−15%", dailyGain: "+18%", doseRate: "150–300 g/t", survivalRate: "97.8%" }
  },

  // ─── Specialty Products ────────────────────────────────────────────────────
  {
    id: "prod-6",
    title: "Tai Chi Antimicrobial Peptides",
    badge: "Specialty",
    category: "Poultry",
    functionCategory: "Specialty Products",
    speciesTags: ["Poultry", "Peptides", "Pathogen Shield"],
    description: "Innovative bio-active antimicrobial peptides that selectively bind and disrupt pathogenic bacterial membranes, supporting antibiotic-free programs.",
    imageUrl: "https://images.unsplash.com/photo-1477554193778-9562c28588c0?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−8%", dailyGain: "+10%", doseRate: "200–400 g/t", survivalRate: "99.1%" }
  },
  {
    id: "prod-7",
    title: "Tai Chi Bioactive Peptides (Swine Mucosal)",
    badge: "Bioactive",
    category: "Swine",
    functionCategory: "Specialty Products",
    speciesTags: ["Swine", "Peptides", "Mucosal Integrity"],
    description: "Purified small-molecule bioactive peptides that stimulate cell proliferation, repair intestinal mucosal damage, and improve weaning piglet survivability.",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−11%", dailyGain: "+15%", doseRate: "300–600 g/t" }
  },
  {
    id: "prod-18",
    title: "Tai Chi Functional Protein Concentrate",
    badge: "High Protein",
    category: "",
    functionCategory: "Specialty Products",
    speciesTags: [],
    description: "Highly digestible functional protein source rich in amino acids and bioactive components, supporting rapid growth and immune development in young animals.",
    imageUrl: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−10%", dailyGain: "+12%", doseRate: "25–50 kg/t" }
  },
  {
    id: "prod-12",
    title: "Tai Chi Fatty Acids Bypass Premix",
    badge: "Specialty",
    category: "Ruminants",
    functionCategory: "Specialty Products",
    speciesTags: ["Cattle", "Fatty Acids", "Lactation"],
    description: "Rumen-protected bypass fat enriched with essential fatty acids designed to increase milk fat percentage and energy density in high-yielding dairy cow rations.",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−9%", dailyGain: "+11%", doseRate: "800–1500 g/t" }
  },

  // ─── Commodity Products ────────────────────────────────────────────────────
  {
    id: "prod-8",
    title: "Tai Chi Choline Chloride 60% (Silica)",
    badge: "Bulk Essential",
    category: "Swine",
    functionCategory: "Commodity Products",
    speciesTags: ["Swine", "Choline", "Liver Protection"],
    description: "Essential feed-grade Choline Chloride premix on a silica carrier, vital for fat metabolism, cellular membrane structure, and growth support.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−6%", dailyGain: "+8%", doseRate: "1000–2000 g/t" }
  },
  {
    id: "prod-9",
    title: "Tai Chi MDCP & MCP (Monodicalcium / Monocalcium)",
    badge: "Commodity",
    category: "Ruminants",
    functionCategory: "Commodity Products",
    speciesTags: ["Cattle", "Phosphates", "Bone Health"],
    description: "Highly digestible, pure feed-grade mineral phosphates essential for bone calcification, energy metabolism, and milk production in ruminants.",
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
    metrics: { fcr: "−7%", dailyGain: "+9%", doseRate: "1500–3000 g/t" }
  }
];

// ─── About Section Stats ───────────────────────────────────────────────────

export const MOCK_STATS = [
  { value: "2016", label: "Operations Started" },
  { value: "9+",   label: "Active & Expanding Markets" },
  { value: "100%", label: "GMP+ & FAMI-QS Traceable" },
  { value: "3",    label: "Core Pillars (Explore, Research, Sustain)" }
];

// ─── Quality & Certification Standards ────────────────────────────────────

export const MOCK_QUALITY_ITEMS = [
  {
    id: "q1",
    title: "ISO 22000 Food Safety",
    certCode: "ISO 22000:2018",
    description: "Applicable products satisfy strict ISO 22000 food safety standards, guaranteeing absolute quality control and HACCP compliance from origin to storage."
  },
  {
    id: "q2",
    title: "FAMI-QS Certified",
    certCode: "FAMI-QS v6",
    description: "Qualified feed additives satisfy the European FAMI-QS code of practice, ensuring premium quality, complete batch traceability, and full international safety compliance."
  },
  {
    id: "q3",
    title: "GMP+ Feed Safety",
    certCode: "GMP+ B2 Assured",
    description: "Certified products carry GMP+ feed safety assurance, ensuring that every batch meets rigorous manufacturing controls and feed chain safety standards."
  },
  {
    id: "q4",
    title: "ISO 9001 (CQC)",
    certCode: "ISO 9001:2015",
    description: "Applicable product lines maintain consistent performance under ISO 9001 quality management systems, ensuring stable batch specifications and reliable farm efficacy."
  },
  {
    id: "q5",
    title: "FDA Registered",
    certCode: "FDA Facility Reg",
    description: "Corresponding products comply with FDA safety regulations, guaranteeing high safety standards and full verification for international export and distribution."
  },
  {
    id: "q6",
    title: "Halal Certified",
    certCode: "Halal Standard",
    description: "Specific feed ingredients hold official Halal certifications, confirming that every carrier, processing agent, and raw material complies with strict purity standards."
  }
];

// ─── Scannable Science Comparison Data ────────────────────────────────────

export interface ComparisonRow {
  species: string;
  icon: string;          // emoji icon for the species
  fcrImprovement: { value: string; tier: 'best' | 'std' | 'info' };
  avgDailyGain:   { value: string; tier: 'best' | 'std' | 'info' };
  gutHealthScore: { value: string; tier: 'best' | 'std' | 'info' };
  doseRate:       { value: string; tier: 'best' | 'std' | 'info' };
  certifications: string;
}

export const MOCK_COMPARISON_DATA: ComparisonRow[] = [
  {
    species: "Swine",
    icon: "🐖",
    fcrImprovement: { value: "−12%",     tier: "best" },
    avgDailyGain:   { value: "+14%",     tier: "best" },
    gutHealthScore: { value: "9.2 / 10", tier: "best" },
    doseRate:       { value: "500–1000 g/t", tier: "std" },
    certifications: "ISO 22000 · FAMI-QS · GMP+ · Halal"
  },
  {
    species: "Poultry",
    icon: "🐔",
    fcrImprovement: { value: "−9%",      tier: "std" },
    avgDailyGain:   { value: "+11%",     tier: "std" },
    gutHealthScore: { value: "8.8 / 10", tier: "std" },
    doseRate:       { value: "250–500 g/t", tier: "best" },
    certifications: "ISO 22000 · FAMI-QS · FDA · Halal"
  },
  {
    species: "Aqua",
    icon: "🐟",
    fcrImprovement: { value: "−15%",     tier: "best" },
    avgDailyGain:   { value: "+18%",     tier: "best" },
    gutHealthScore: { value: "9.0 / 10", tier: "best" },
    doseRate:       { value: "150–300 g/t", tier: "best" },
    certifications: "ISO 22000 · GMP+ · FDA"
  },
  {
    species: "Pets",
    icon: "🐾",
    fcrImprovement: { value: "−8%",      tier: "info" },
    avgDailyGain:   { value: "+6%",      tier: "info" },
    gutHealthScore: { value: "8.5 / 10", tier: "std" },
    doseRate:       { value: "150–250 g/t", tier: "best" },
    certifications: "ISO 22000 · ISO 9001"
  },
  {
    species: "Ruminants",
    icon: "🐄",
    fcrImprovement: { value: "−10%",     tier: "std" },
    avgDailyGain:   { value: "+13%",     tier: "std" },
    gutHealthScore: { value: "8.7 / 10", tier: "std" },
    doseRate:       { value: "400–800 g/t", tier: "std" },
    certifications: "ISO 22000 · GMP+ · Halal"
  }
];

// ─── News Articles ─────────────────────────────────────────────────────────

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  imageUrl: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  content: string[];
  keyHighlights: string[];
  tags: string[];
  featured?: boolean;
}

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: "news-1",
    title: "Tai Chi Newtech Inc. Expands Direct Distribution Network to Indonesia & Malaysia",
    date: "July 12, 2026",
    category: "Expansion",
    summary: "Following successful multi-farm trials, Tai Chi Newtech Inc. launches direct distribution hubs in Jakarta and Kuala Lumpur, accelerating local technical support response across Southeast Asian markets.",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min read",
    featured: true,
    author: {
      name: "Engr. Marco Santos",
      role: "Regional Director, SEA Operations"
    },
    keyHighlights: [
      "Direct logistics distribution hubs operational in Jakarta & Kuala Lumpur.",
      "Dedicated technical service teams providing 24/7 feed formulation support.",
      "Accelerated delivery timeframes cut from 14 days down to 48 hours for regional partners."
    ],
    tags: ["Southeast Asia", "Logistics", "Direct Sales", "Expansion"],
    content: [
      "In response to surging demand for bio-certified feed additives across Southeast Asia, Tai Chi Newtech Inc. is proud to announce the formal expansion of our direct sales and technical distribution networks into Indonesia and Malaysia.",
      "This strategic milestone follows 18 months of rigorous commercial trials with leading integrator feed mills in West Java and Selangor. Results showed an average 8.4% improvement in Feed Conversion Ratio (FCR) when incorporating our targeted micro-encapsulated organic acidifiers and digestive enzyme blends into commercial swine and poultry rations.",
      "Our new regional logistics centers in Jakarta and Port Klang will maintain full inventory buffers of our flagship products, reducing order fulfillment cycles from two weeks to under 48 hours. In addition, localized technical service laboratories will offer rapid NIR feed raw material screening and mycotoxin risk profiling for our partner feed operations.",
      "\"Expanding our footprint directly into Indonesia and Malaysia allows us to forge deeper relationships with livestock producers and feed mills,\" said Engr. Marco Santos, Regional Director for SEA Operations. \"We are not just shipping products; we are embedding technical specialists on the ground to optimize gut health and farm profitability in real time.\""
    ]
  },
  {
    id: "news-2",
    title: "Technical Review: Coated Ascorbic Acid 97% Efficacy in Marine Stress Control",
    date: "June 28, 2026",
    category: "Research",
    summary: "A joint study with leading aquaculture research institutes demonstrates how specialized lipid-encapsulated Vitamin C resists water leaching, yielding a 97.8% survival rate in high-salinity shrimp culture.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    featured: false,
    author: {
      name: "Dr. Elena Rostova",
      role: "Head of Aquatic Nutrition R&D"
    },
    keyHighlights: [
      "Lipid-microencapsulation prevents 95%+ of water leaching loss over 4 hours in marine water.",
      "Penaeus vannamei shrimp exhibited a 97.8% survival rate during acute thermal and salinity challenge tests.",
      "Hepatopancreas tissue histology confirmed significantly reduced cellular oxidative stress markers."
    ],
    tags: ["Aquaculture", "Vitamin C", "Microencapsulation", "Shrimp Health"],
    content: [
      "Vitamin C (ascorbic acid) is a vital antioxidant and immune stimulant in aquaculture diets. However, traditional crystalline ascorbic acid rapidly dissolves into pond water during pellet leaching, resulting in up to 70% loss of active potency before feed ingestion.",
      "Tai Chi Newtech's specialized lipid-encapsulated Coated Ascorbic Acid 97% addresses this critical industry loss. A peer-reviewed 60-day trial evaluated the bio-availability and physical stability of our coated formulation against standard commercial dipotassium phosphate ascorbate in Litopenaeus vannamei.",
      "Results demonstrated that our proprietary microencapsulation shell preserved over 95.4% of active Vitamin C content after 4 hours of continuous immersion in 30 ppt saltwater. During a subsequent 14-day acute salinity shock test (drop from 30 ppt to 5 ppt), shrimp fed the coated ascorbic acid diet maintained a 97.8% survival rate compared to 74.2% in the negative control group.",
      "Furthermore, hepatopancreas histological examinations confirmed lower superoxide dismutase depletion and superior epithelial integrity. Feed formulators can now lower inclusion margins while guaranteeing superior physiological resilience under climate stress."
    ]
  },
  {
    id: "news-3",
    title: "Tai Chi Newtech Achieves Halal Re-Certification for Specialty Peptide Portfolio",
    date: "May 15, 2026",
    category: "Compliance",
    summary: "Our manufacturing facilities have renewed comprehensive Halal compliance certification for all specialty bioactive peptides and organic acid lines, ensuring global supply security.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min read",
    featured: false,
    author: {
      name: "Aisha Al-Hassan",
      role: "Quality & Regulatory Compliance Officer"
    },
    keyHighlights: [
      "100% audit pass rate across all manufacturing facilities and supply chains.",
      "Full traceability certified for bioactive swine and bovine mucosal peptide lines.",
      "Expands seamless export access for feed mills across GCC and OIC member states."
    ],
    tags: ["Halal", "ISO Certification", "Regulatory", "Global Compliance"],
    content: [
      "Tai Chi Newtech Inc. is pleased to announce the successful renewal of our comprehensive Halal Certification across our entire product line, including our bioactive peptides, plant-derived emulsifiers, and organic acidifiers.",
      "The rigorous multi-stage audit, conducted by accredited international Halal certification bodies, validated full compliance with strict raw material origin, synthetic isolation, equipment sanitation, and cross-contamination standards.",
      "As global demand for halal-compliant animal nutrition continues to rise across the Middle East, North Africa, and Southeast Asia, this re-certification reinforces our commitment to providing fully traceable, ethically sound, and high-performance feed ingredients.",
      "\"Our global partners rely on us for uncompromised purity and regulatory certainty,\" stated Aisha Al-Hassan, Quality Compliance Officer. \"This certification opens seamless export avenues for feed producers supplying international halal-certified meat and aquaculture markets.\""
    ]
  },
  {
    id: "news-4",
    title: "Breakthrough Study: Tributyrin & Monoglycerides Mitigate Enteric Pathogen Load in Swine",
    date: "April 03, 2026",
    category: "Research",
    summary: "New clinical data published in the Journal of Animal Bio-Science confirms that targeted glycerol ester premixes significantly reduce E. coli and Lawsonia intracellularis shedding in post-weaning piglets.",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
    author: {
      name: "Dr. Carlos Mendoza",
      role: "Senior Swine Technical Specialist"
    },
    keyHighlights: [
      "68% reduction in post-weaning diarrhea incidence among nursery piglets.",
      "Tributyrin bypasses gastric breakdown to deliver targeted butyric acid in the distal intestine.",
      "Average daily gain (ADG) improved by +14.2% without antibiotics."
    ],
    tags: ["Swine", "Gut Health", "Tributyrin", "Antibiotic Reduction"],
    content: [
      "Weaning is one of the most critical transitions in piglet development, frequently accompanied by gut mucosal atrophy, digestive enzyme suppression, and opportunistic pathogen colonization such as Enterotoxigenic E. coli (ETEC).",
      "Tai Chi Newtech's recent commercial research trial focused on evaluating our specialized Tributyrin 50% Premix and Monoglyceride blend as an AGP-free digestive health strategy across 2,400 nursery pigs.",
      "Unlike free butyric acid which is absorbed in the stomach, our esterified tributyrin bypasses the foregut intact, releasing active butyric acid via pancreatic lipase directly in the jejunum and ileum. This targeted release stimulates intestinal villi elongation and tight-junction protein synthesis.",
      "The 35-day post-weaning trial recorded a 68% decrease in clinical diarrhea scores, a 14.2% increase in average daily gain, and a 4-fold reduction in fecal pathogen shedding. Producers can achieve robust post-weaning performance while eliminating prophylactic antibiotic use."
    ]
  },
  {
    id: "news-5",
    title: "Sustainability Report 2026: Reducing Carbon Footprint in Premix Manufacturing by 32%",
    date: "March 18, 2026",
    category: "Sustainability",
    summary: "Tai Chi Newtech announces a 32% reduction in greenhouse gas emissions per metric ton produced, driven by solar energy adoption and micro-pelleting process optimization.",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min read",
    author: {
      name: "Katarina Vance",
      role: "Sustainability & ESG Lead"
    },
    keyHighlights: [
      "32% GHG reduction achieved across all primary blending and packaging facilities.",
      "1.2 Megawatt solar rooftop installation commissioned at main Luzon facility.",
      "100% recyclable multi-layer barrier paper packaging adopted for bulk premixes."
    ],
    tags: ["Sustainability", "Green Energy", "ESG", "Eco Manufacturing"],
    content: [
      "As part of our founding mission to deliver pro-environmental feed additive solutions, Tai Chi Newtech Inc. has released its 2026 Sustainability and Environmental Stewardship Report.",
      "Over the past fiscal year, our engineering team completed a comprehensive retrofitting program across our primary blending and micro-encapsulation plants. The commissioning of a 1.2 MW rooftop solar grid now generates over 45% of our annual operational energy requirements.",
      "Additionally, low-temperature micro-encapsulation technology has lowered thermal processing energy consumption by 28%, while reducing water consumption through closed-loop cooling circuits.",
      "By transitioning to 100% recyclable, moisture-barrier bulk packaging, Tai Chi Newtech is assisting downstream feed mills and livestock integrators in achieving their Scope 3 emissions reduction targets."
    ]
  },
  {
    id: "news-6",
    title: "Tai Chi Newtech Showcase at Asian-Pacific Aquaculture Expo 2026 in Bangkok",
    date: "February 24, 2026",
    category: "Events",
    summary: "Join our senior aqua nutrition experts at APA 2026 in Bangkok as we unveil our latest biological hepatoprotectants and aquatic enzyme formulations for high-density tilapia and shrimp farming.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min read",
    author: {
      name: "Communications Team",
      role: "Tai Chi Newtech Global Events"
    },
    keyHighlights: [
      "Live presentation on 'Bioactive Peptides in Crustacean Immunity' on Day 2.",
      "Interactive booth displaying real-time water leaching resistance demonstrations.",
      "Private consultations available with our chief aquatic formulation scientists."
    ],
    tags: ["APA 2026", "Bangkok", "Exhibition", "Aqua Feed"],
    content: [
      "Tai Chi Newtech Inc. is excited to announce our participation as a Key Technical Presenter at the Asian-Pacific Aquaculture Expo (APA 2026), taking place from March 15–18 at the BITEC Exhibition Center in Bangkok, Thailand.",
      "At Booth B-42, our team of marine biologists and feed formulators will demonstrate our line of specialty aquaculture additives, including high-stability bio-peptides, liver-protecting bile acid premixes, and thermostable phytase enzymes tailored for extruded fish feed.",
      "Dr. Elena Rostova will deliver a keynote presentation on Wednesday, March 16th at 14:00 titled: *'Microencapsulated Bioactives: Overcoming Osmotic and Pathogenic Challenges in Intensive Shrimp Aquaculture.'*",
      "We invite farm managers, feed mill directors, and industry partners to schedule one-on-one technical consultations with our team during the expo."
    ]
  }
];

