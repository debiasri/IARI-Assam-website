import { useState } from "react";
import { ChevronRight, Wheat, Droplets, Fish } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const schools = [
  {
    id: "crop",
    icon: Wheat,
    name: "School of Crop Improvement",
    short: "Crop Improvement",
    description:
      "The School of Crop Improvement works on enhancing the productivity, quality, and resilience of crops grown across North-East India, with a focus on developing varieties and technologies suited to the region's specific soil types, climate, and farming systems — particularly alluvial and acidic soils, rainfed lowlands, and flood-prone ecosystems.",
    color: "bg-green-50 border-green-200",
    activeColor: "bg-primary text-white",
    projects: [
      {
        title: "Project 1: Genetic Improvement of Field Crops for Productivity and Climate Resilience",
        items: [
          "Enhancing productivity of indigenous rice genotypes with specialty traits",
          "Development of climate-resilient rice genotypes suitable for rainfed and flood-prone lowlands",
          "Breeding climate-resilient, short-duration rapeseed/mustard varieties for rice fallows",
          "Breeding pulses and buckwheat for utilisation of rice fallows",
          "Development of rice/rabi maize hybrids for improved yield and disease resistance",
          "Pre-breeding in rice for tolerance to biotic and abiotic stresses",
        ],
      },
      {
        title: "Project 2: Improvement of Cultivated and Underutilized Horticultural Crops of North-East Region",
        items: [
          "Collection, evaluation, conservation, and improvement of cultivated, indigenous, and underutilised horticultural crops of the NE region",
          "Develop and refine sustainable production and protection technologies for horticultural crops of the NE region",
          "Develop appropriate post-harvest management protocols for horticultural crops to reduce losses, improve marketing, and enable product diversification",
          "Generate wealth from waste and by-products of horticultural crops through value addition and processing",
          "Design, develop, and refine process and equipment to reduce drudgery in production and processing of horticultural crops",
        ],
      },
      {
        title: "Project 3: Pest and Disease Management Strategies for Major Crops",
        items: [
          "Bionomics and epidemiology of insect-pests, nematodes, and pathogens and their natural enemies in lowland rice ecosystem",
          "Development of integrated pest management module for major crops in multidisciplinary mode",
          "Diagnostics and management of important diseases prevalent in the North-Eastern states",
          "Identification and formulation of agrochemicals of natural origin for efficient crop protection",
        ],
      },
    ],
  },
  {
    id: "nrm",
    icon: Droplets,
    name: "School of Natural Resource Management",
    short: "Natural Resource Management",
    description:
      "The School of Natural Resource Management focuses on the sustainable management of land, water, soil, and biological resources — challenges that are especially critical in North-East India, where complex terrain, seasonal flooding, diverse land-use systems, and rapidly changing climate make resource management both urgent and difficult.",
    color: "bg-blue-50 border-blue-200",
    activeColor: "bg-primary text-white",
    projects: [
      {
        title: "Project 4: Development of Sustainable Crop Production Strategy for Enhancing Natural Resource Use Efficiency in Rainfed Ecosystem",
        items: [
          "Development of integrated farming system approaches for improving productivity and livelihood of farmers of lowland ecology",
          "Integrated crop management for enhancing productivity and resource-use efficiency of shallow lowlands",
          "Distribution, characterisation and biology of insurgent weeds in different production systems",
          "Identification of suitable cropping system for doab region characterised by sand-silt deposits",
          "Evaluation of Zero Budget Natural Farming under rainfed conditions in the NE Region",
        ],
      },
      {
        title: "Project 5: Improving Soil Health for Enhancing Input Use Efficiency and Productivity",
        items: [
          "To monitor and improve soil chemical and biological environment for enhancing nutrient-supplying capacity and productivity in acid soils",
          "To assess metal and metalloid hazard in polluted soils and develop remediation options",
          "To study changes in soil health of rice fields under flooded water conditions",
          "To characterise soil attributes, monitor soil health, and develop digital soil mapping",
        ],
      },
      {
        title: "Project 6: Assessment, Conservation and Utilisation of Water Resources for Enhancing Agriculture Production in Dry Season",
        items: [
          "Comprehensive hydrological studies of surface water resource availability on a regional scale",
          "Mapping of hydrological zones for rainwater harvesting and development of thematic maps for runoff and erosion estimation",
          "Development of regional methods for flood estimation and strategy for flood control",
        ],
      },
    ],
  },
  {
    id: "animal",
    icon: Fish,
    name: "School of Animal Sciences and Fisheries",
    short: "Animal Sciences & Fisheries",
    description:
      "This School works on the animal and aquatic dimensions of the farming systems of North-East India. Fish farming, piggery, poultry, and livestock form critical livelihoods for communities across the region, and this School's research directly addresses productivity, health, genetic improvement, and sustainable livelihood opportunities in these sectors.",
    color: "bg-amber-50 border-amber-200",
    activeColor: "bg-primary text-white",
    projects: [
      {
        title: "Project 7: Characterisation of Indigenous Animal/Fish Resources and Livelihood Improvement through Animal/Fish Integrated Farming System",
        items: [
          "Characterisation of fisheries for improvement of indigenous fishes in the region",
          "Development of production technology for commercially important indigenous fish species and animal resources",
          "Analysis of existing integrated farming systems for enhancing production of livestock, piggery, fish, and horticultural crops for livelihood improvement",
          "Capacity building of farming communities through adoption of best management practices in piggery and fish farming",
          "Genetic improvement of local animal and poultry breeds for sustainable livelihood",
        ],
      },
    ],
  },
];

export default function Schools() {
  const [activeSchool, setActiveSchool] = useState(schools[0].id);
  const school = schools.find((s) => s.id === activeSchool)!;

  return (
    <AppLayout>
      <PageHeader
        title="Schools & Divisions"
        description="Three specialised schools conducting research and education across all dimensions of agriculture"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14">
              The academic and research activities of ICAR-IARI Assam are organised through three Schools, each designed
              around a distinct domain of agricultural science. This structure enables the institute to conduct both
              focused and interdisciplinary research while offering students a comprehensive education.
            </p>
          </FadeIn>

          {/* School Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
            {schools.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSchool(s.id)}
                data-testid={`button-school-${s.id}`}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 font-medium transition-all text-left ${
                  activeSchool === s.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border text-foreground hover:border-primary/40 hover:bg-muted"
                }`}
              >
                <s.icon className="w-5 h-5 shrink-0" />
                <span className="text-sm md:text-base">{s.short}</span>
              </button>
            ))}
          </div>

          {/* School Content */}
          <FadeIn key={activeSchool}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-primary/5 border-b border-border p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <school.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">{school.name}</h2>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{school.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="font-serif text-xl font-bold text-foreground mb-8">
                  Mandated Research Projects (as per EFC 2021–26)
                </h3>
                <div className="space-y-8">
                  {school.projects.map((project, pi) => (
                    <div key={pi} className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/50 px-6 py-4 border-b border-border">
                        <h4 className="font-semibold text-foreground text-sm md:text-base">{project.title}</h4>
                      </div>
                      <ul className="p-6 space-y-3">
                        {project.items.map((item, ii) => (
                          <li key={ii} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                            <ChevronRight className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </AppLayout>
  );
}
