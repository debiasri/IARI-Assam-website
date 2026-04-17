import { FlaskConical, ExternalLink, Network } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const instituteFundedProjects = [
  {
    title: "Remote Sensing-based Prediction of Crop Performance in Agri-Horti Crops of North-Eastern Region",
    period: "2022–24",
    pi: "Dr. Dibyendu Deb and team",
  },
  {
    title: "Collection, Evaluation, Documentation and Utilisation of Cultivated and Wild Underutilised Horticultural Crops of NE India",
    period: "2022–25",
    pi: "Dr. Alemwati Pongener and team",
  },
  {
    title: "Assessment of Livelihood Diversification of Farmers under Rainfed Ecosystem in North-East India",
    period: "2022–25",
    pi: "Dr. Arpan Bhowmik and team",
  },
  {
    title: "Assessment of Fish Diversity, Fisheries Resources and Aquaculture Avenues for Improving Self-Sustenance of Fisher-Folk in Upper Brahmaputra Valley",
    period: "2023–25",
    pi: "Dr. Deepjyoti Baruah and team",
  },
  {
    title: "Identification and Documentation of Commonly Occurring Fish Diseases in Dhemaji and Lakhimpur Districts of Assam",
    period: "2022–24",
    pi: "Dr. Deepjyoti Baruah and team",
  },
  {
    title: "Identification and Assessment of Pesticide Usages, Patterns and Farmers' Perceptions in Agri-Horti Crops of NE India",
    period: "2023–26",
    pi: "Dr. Ch. Jamkhokai Mate and team",
  },
  {
    title: "Development of Agro-techniques for Quality Production of Minor Millets in the Eastern Himalayan Zone",
    period: "2023–26",
    pi: "Dr. Sunil Mandi and team",
  },
];

const externalFundedProjects = [
  {
    title: "Translating the Native Fish Germplasm for Socio-Economic Benefits through Aquaculture and Fisheries in Himalayan Region",
    funder: "DBT",
    period: "2022–25",
    pi: "CCPI: Dr. Deepjyoti Baruah",
  },
  {
    title: "Biomass and Carbon Mapping across Altitudinal Gradient of Darjeeling and Sikkim Himalaya Land Use: Implication for Carbon Sink Management and Mitigation",
    funder: "SERB, DST",
    period: "2022–24",
    pi: "CCPI: Dr. Arpan Bhowmik",
  },
  {
    title: "Agri-Drone Project",
    funder: "RKVY",
    period: "Commenced 2022",
    pi: "PI: Dr. Arpan Bhowmik and team (through ATARI, Guwahati)",
  },
];

const highlights = [
  {
    title: "Fishery-Based Integrated Farming System",
    content:
      "Research on fisheries-based integrated farming systems identified elite models for improving farm income by combining fish cultivation with livestock and horticulture. The work is optimising net returns by comparing cereals-based versus horticulture-based integrated fish farming approaches.",
  },
  {
    title: "Underutilised Horticultural Crops of North-East India",
    content:
      "North-East India supports more than 50% of India's plant diversity. Out of an estimated 800 wild edible species, about 300 are used by communities of the region. ICAR-IARI Assam has documented species across Assam, Nagaland, and Arunachal Pradesh — including Assam lemon, pineapple, Burmese grape, elephant apple, Teportenga, passion fruit (Passiflora edulis), and Prunus nepalensis — with ongoing nutrient profiling to assess their potential for food security and rural income.",
  },
  {
    title: "Finger Millet and Rice-Fallow Utilisation",
    content:
      "Experiments in the Eastern Himalayan zone found that application of 40 kg/ha N + 20 kg/ha P₂O₅ + 20 kg/ha K₂O + 10 kg/ha S gives the best growth and yield of finger millet on sandy soils of Dhemaji district. For rice-fallow utilisation, PM-27 mustard and L4717 lentil were identified as the best-performing varieties for alluvial soils of Assam.",
  },
  {
    title: "Livelihood Diversification",
    content:
      "Research identified key drivers determining farmers' livelihood sources — household size, education, dependency ratio, and entrepreneurial tendency — and used these to develop targeted diversification strategies for farming communities in rainfed ecosystems of North-East India.",
  },
];

const partners = [
  { name: "KVK, Dhemaji", role: "Primary field extension and outreach partner in Dhemaji district" },
  { name: "KVK, North Lakhimpur", role: "Technology dissemination and farmer outreach partner" },
  { name: "Assam Agricultural University, Jorhat", role: "Academic and research collaboration" },
  { name: "Dept. of Agriculture & Horticulture, Govt. of Assam", role: "State government policy and outreach linkage" },
  { name: "ATARI, Guwahati / RKVY", role: "Implementation partner for Agri-Drone project" },
  { name: "Department of Biotechnology (DBT), GOI", role: "External research funder – fish germplasm project" },
  { name: "SERB, DST, GOI", role: "External research funder – biomass and carbon mapping project" },
  { name: "NABARD", role: "Rural development and agricultural finance linkage" },
  { name: "Mising Autonomous Council (MAC), Gogamukh", role: "Local community and administrative partner" },
];

export default function Research() {
  return (
    <AppLayout>
      <PageHeader
        title="Research"
        description="32+ active research projects addressing the specific agricultural challenges of North-East India"
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8 mb-16 max-w-4xl">
              <div className="flex items-start gap-4">
                <FlaskConical className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Research at ICAR-IARI Assam</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    All research at ICAR-IARI Assam is designed specifically for the North-Eastern region. The
                    institute currently runs 32 research projects — combining institute-funded in-house research with
                    externally funded projects from DBT, SERB-DST, and RKVY. The First Institute Research Council
                    (IRC) meeting was held on 9 March 2023 under the chairmanship of Dr. Robin Gogoi, marking a major
                    milestone in the institute's research journey.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Projects */}
          <div className="mb-16">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Institute-Funded Projects</h2>
            </FadeIn>
            <div className="space-y-4">
              {instituteFundedProjects.map((p, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div
                    className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
                    data-testid={`card-project-institute-${i}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-medium text-foreground leading-snug mb-2">{p.title}</p>
                        <p className="text-sm text-muted-foreground">PI: {p.pi}</p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full self-start">
                        {p.period}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* External Projects */}
          <div className="mb-16">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Externally Funded Projects</h2>
            </FadeIn>
            <div className="space-y-4">
              {externalFundedProjects.map((p, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
                    data-testid={`card-project-external-${i}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-medium text-foreground leading-snug mb-2">{p.title}</p>
                        <p className="text-sm text-muted-foreground">{p.pi}</p>
                      </div>
                      <div className="flex gap-2 shrink-0 self-start">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{p.funder}</span>
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{p.period}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Research Highlights */}
          <div className="mb-16">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Research Highlights</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow h-full"
                    data-testid={`card-highlight-${i}`}
                  >
                    <ExternalLink className="w-5 h-5 text-primary mb-4" />
                    <h3 className="font-serif text-lg font-bold text-foreground mb-3">{h.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{h.content}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Partners */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Network className="w-6 h-6 text-primary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Networking Partners</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partners.map((partner, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div
                      className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                      data-testid={`card-partner-${i}`}
                    >
                      <h3 className="font-semibold text-foreground mb-2 text-sm">{partner.name}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{partner.role}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </AppLayout>
  );
}
