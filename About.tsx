import { MapPin, Plane, Train, Navigation } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const milestones = [
  { date: "10 July 2014", event: "Announcement in Union Budget 2014–15 for establishment of IARI-like institutes in Assam and Jharkhand" },
  { date: "07 Feb 2017", event: "Possession of 587 acres of land at Dirpai Chapori, Gogamukh, Dhemaji, Assam" },
  { date: "16 May 2017", event: "Approval by Cabinet Committee on Economic Affairs (CCEA)" },
  { date: "26 May 2017", event: "Foundation stone laid by the Hon'ble Prime Minister Shri Narendra Modi" },
  { date: "01 June 2017", event: "Sanction of Rs. 155.29 crores by ICAR for establishment (2017–20)" },
  { date: "01 Nov 2018", event: "Construction commenced by National Project Construction Corporation Ltd. (NPCC)" },
  { date: "25 Sep 2020", event: "Campus inaugurated by Union Minister of Agriculture Shri Narendra Singh Tomar" },
  { date: "04 Mar 2024", event: "Inauguration of Academic-cum-Administrative Building, Manas Guest House, Subansiri Girls Hostel, and Brahmaputra Boys Hostel by Shri Arjun Munda, Union Minister" },
  { date: "28 Jan 2025", event: "Inauguration of Dhansiri Residential Complex by Dr. Himanshu Pathak, Secretary DARE & DG ICAR" },
];

const objectives = {
  education: [
    "Promote excellence, foster high-standard research for holistic agrarian development and orient the educational programme towards future needs and opportunities in South-East Asia",
    "Strengthen formal and non-formal training to promote entrepreneurial skills for commercialisation of agriculture in the region through diploma courses in the line of polytechniques",
  ],
  research: [
    "Conservation and utilisation of biotic resources of North-East India for higher farm productivity and industrial uses",
    "Acid soil management vis-à-vis development of crop varieties and technologies suitable for acidic soil of North-East India",
    "Productive utilisation of water resources through multi-disciplinary research on excess water management through drainage, water harvesting, and micro-irrigation, for enhancing Water Use Efficiency (WUE) and higher factor productivity",
    "Develop appropriate cropping systems to attain multiple cropping for increasing productivity with long-term sustainability in the North-Eastern states",
    "Develop integrated farming system models through appropriate recycling of bio-resources to promote organic agriculture, keeping in view the specific requirements of the region",
    "Develop horticulture and animal husbandry-based diversified farming system modules to promote rural entrepreneurship",
    "Effective post-harvest management and value addition using appropriate food engineering protocols to enhance farm income and promote agribusiness",
    "Market and policy research to augment income of different stakeholders in agriculture",
  ],
  outreach: [
    "Generate innovative extension models, dovetail them to developmental models, and disseminate them through KVKs, state agricultural universities and state agricultural extension and other development departments of North-East India",
    "Promote client-oriented on-farm and farm innovation research and technology assessment, refinement and transfer through participatory approaches on convergence mode",
    "Foster development in communication research and linkages with rural development programmes, and strengthen micro-planning through inter-departmental and participatory approaches",
  ],
};

export default function About() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <AppLayout>
      <PageHeader
        title="About the Institute"
        description="Established to bring the Second Green Revolution to North-East India"
        image="images/campus-day.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Introduction</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bridging the Agricultural Gap in North-East India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The North-Eastern region of India is endowed with a wide range of agricultural resources and holds
                  immense potential for generating rural income and ensuring food and nutritional security for its
                  predominantly tribal population. However, issues like climate change, eroding biodiversity, and
                  over-exploitation of natural resources pose serious challenges to sustainable agriculture and allied
                  sectors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  More significantly, the transformative impact of the Green Revolution was not realised in the
                  North-Eastern states. It was to address this historical gap that the ICAR-IARI was established at
                  Gogamukh in Dhemaji district of Assam — to cater to the specific needs of undertaking research,
                  developing efficient technologies, and fostering extension for ushering in the Second Green Revolution
                  through holistic development of agriculture in North-East India.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${base}/images/campus-flowers.jpg`}
                  alt="ICAR-IARI Assam Campus"
                  className="w-full h-80 object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="border-l-4 border-primary pl-8">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">Background (EFC Source)</p>
              <p className="text-lg text-foreground/80 leading-relaxed italic">
                The Indian Agricultural Research Institute (IARI), New Delhi has played a pivotal role in advancing
                Indian agriculture, ushering the country into the era of the Green Revolution. However, the impact was
                not realised in the North-Eastern states including Assam. It was therefore proposed to establish an
                IARI-like institution in Assam to cater to the need for undertaking research, developing efficient
                technologies, and fostering extension for ushering in the Second Green Revolution through holistic
                development of agriculture in North-East India.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                — EFC Memorandum 2021–26, ICAR-IARI Gogamukh (Assam), p. 237
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Journey</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Important Milestones
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className="md:w-1/2 flex items-start gap-6 md:gap-0 md:pr-12">
                        <div className={`shrink-0 w-12 h-12 rounded-full border-4 border-primary bg-accent flex items-center justify-center z-10 relative md:absolute ${i % 2 === 0 ? "md:right-0 md:translate-x-6" : "md:left-0 md:-translate-x-6"}`} style={{ top: "0" }}>
                          <span className="text-xs font-bold text-primary">{i + 1}</span>
                        </div>
                        <div className={`flex-1 bg-card border border-border rounded-xl p-5 shadow-sm ${i % 2 !== 0 ? "md:hidden" : ""}`}>
                          <p className="text-accent font-bold text-sm mb-2">{m.date}</p>
                          <p className="text-foreground/80 text-sm leading-relaxed">{m.event}</p>
                        </div>
                      </div>
                      {i % 2 !== 0 && (
                        <div className="md:w-1/2 md:pl-12 hidden md:block">
                          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                            <p className="text-accent font-bold text-sm mb-2">{m.date}</p>
                            <p className="text-foreground/80 text-sm leading-relaxed">{m.event}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">EFC Memorandum 2021–26</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Objectives of the Institute</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                IARI-Assam is unique in its structure, functioning, mandate and objectives. It is one of its kind in the country,
                established in the North-Eastern region with aims and objectives specific to the North-Eastern states.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {([
              { label: "Post Graduate Education", items: objectives.education, color: "border-primary" },
              { label: "Research", items: objectives.research, color: "border-secondary" },
              { label: "Outreach", items: objectives.outreach, color: "border-accent" },
            ] as const).map((section, i) => (
              <FadeIn key={section.label} delay={i * 0.15}>
                <div className={`bg-card border-t-4 ${section.color} border border-border rounded-xl p-6 h-full shadow-sm`}>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-5">{section.label}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">How to Reach Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Location</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Address", detail: "Dirpai Chapori, Gogamukh, Dhemaji, Assam – 787035" },
              { icon: Plane, title: "Nearest Airport", detail: "Lilabari Airport, North Lakhimpur" },
              { icon: Train, title: "Nearest Railway", detail: "Gogamukh Railway Station" },
              { icon: Navigation, title: "From Dhemaji", detail: "30 km from district headquarters | 7 km from NH-15 (Guwahati–Pasighat Highway)" },
            ].map((loc, i) => (
              <FadeIn key={loc.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow" data-testid={`card-location-${i}`}>
                  <loc.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{loc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{loc.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
