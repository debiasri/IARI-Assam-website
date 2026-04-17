import { Link } from "wouter";
import { ArrowRight, BookOpen, FlaskConical, Users, Leaf, Building2, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";

const stats = [
  { icon: Leaf, value: "587 Acres", label: "Total campus area at Dirpai Chapori, Gogamukh, Dhemaji" },
  { icon: Users, value: "141 Students", label: "B.Sc. Agriculture students from 20+ states across India" },
  { icon: FlaskConical, value: "32+ Projects", label: "Active research projects including DBT, SERB-DST, and RKVY funded" },
  { icon: BookOpen, value: "3 Schools", label: "School of Crop Improvement | NRM | Animal Sciences & Fisheries" },
  { icon: Building2, value: "Est. 2017", label: "Foundation stone laid by Hon'ble PM on 26 May 2017" },
];

const objectives = [
  {
    category: "Post Graduate Education",
    color: "bg-primary/10 border-primary/30",
    iconColor: "text-primary",
    items: [
      "Promote excellence, foster high-standard research for holistic agrarian development and orient the educational programme towards future needs and opportunities in South-East Asia",
      "Strengthen formal and non-formal training to promote entrepreneurial skills for commercialisation of agriculture in the region through diploma courses in the line of polytechniques",
    ],
  },
  {
    category: "Research",
    color: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
    items: [
      "Conservation and utilisation of biotic resources of North-East India for higher farm productivity and industrial uses",
      "Acid soil management and development of crop varieties and technologies suitable for acidic soil of North-East India",
      "Productive utilisation of water resources through multi-disciplinary research on excess water management",
      "Develop appropriate cropping systems to attain multiple cropping for increasing productivity with long-term sustainability",
      "Develop integrated farming system models through appropriate recycling of bio-resources to promote organic agriculture",
      "Effective post-harvest management and value addition using appropriate food engineering protocols",
    ],
  },
  {
    category: "Outreach",
    color: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
    items: [
      "Generate innovative extension models and disseminate them through KVKs, state agricultural universities and state agricultural extension departments of North-East India",
      "Promote client-oriented on-farm research and technology assessment, refinement and transfer through participatory approaches",
      "Foster development in communication research and linkages with rural development programmes",
    ],
  },
];

const announcements = [
  {
    date: "26 March 2025",
    title: "One-Week Training Programme on Millet Cultivation",
    description: "A training programme on millet cultivation practices was successfully organized from 20–26 March 2025 for farmers and tribal communities of the region.",
  },
  {
    date: "28 January 2025",
    title: "Inauguration of Dhansiri Residential Complex",
    description: "Dhansiri Residential Complex for staff was inaugurated by Dr. Himanshu Pathak, Secretary DARE and DG ICAR.",
  },
  {
    date: "27 January 2025",
    title: "Farmer-Scientist Interaction cum Input Distribution Programme",
    description: "110 farmers including 36 women from Dhemaji and Lakhimpur districts participated in input kit distribution programme.",
  },
];

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <AppLayout>
      {/* Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${base}/images/campus-day.jpeg`}
            alt="ICAR-IARI Assam Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Indian Council of Agricultural Research
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              ICAR-Indian Agricultural Research Institute, Assam
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Advancing Agricultural Research, Education and Outreach for North-East India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                data-testid="link-about-institute"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                About the Institute <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/academics"
                data-testid="link-academic-programmes"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                Academic Programmes <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.value} delay={i * 0.1}>
                <div
                  className="text-center p-4 rounded-xl bg-white/10 border border-white/20"
                  data-testid={`card-stat-${i}`}
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white font-serif mb-1">{stat.value}</div>
                  <p className="text-xs text-white/70 leading-snug">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
                  About the Institute
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  A New Chapter in North-East India's Agricultural Journey
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ICAR-IARI Assam was established at Gogamukh, Dhemaji, to address the specific agricultural needs of
                  North-East India — a region rich in biodiversity and agricultural potential, but one where the Green
                  Revolution largely did not reach. The institute was announced in the Union Budget 2014–15 and its
                  foundation stone was laid by the Hon'ble Prime Minister of India on 26th May, 2017.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Today, the institute conducts research across crop science, natural resource management, and animal
                  and fishery sciences, runs undergraduate and postgraduate programmes in agriculture, and actively
                  engages with farming communities through training, demonstrations, and outreach — working towards a
                  second Green Revolution in North-East India.
                </p>
                <Link
                  href="/about"
                  data-testid="link-read-more-about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${base}/images/campus-day.jpeg`}
                  alt="ICAR-IARI Assam Campus"
                  className="w-full h-80 object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Flower Field Divider */}
      <section className="relative h-72 overflow-hidden">
        <img
          src={`${base}/images/campus-flowers.jpg`}
          alt="ICAR-IARI Assam Flower Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <FadeIn>
              <blockquote className="max-w-2xl text-white">
                <p className="text-2xl md:text-3xl font-serif font-semibold italic leading-relaxed mb-4">
                  "Bringing the Second Green Revolution to the biodiversity-rich soils of North-East India."
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">EFC Memorandum 2021–26</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Objectives of the Institute
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                IARI Assam is unique in its structure, functioning, mandate and objectives — one of its kind in the
                country, established in the North-Eastern region with aims and objectives specific to the North-Eastern states.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, i) => (
              <FadeIn key={obj.category} delay={i * 0.15}>
                <div className={`rounded-2xl border-2 p-8 h-full ${obj.color}`}>
                  <h3 className={`font-serif text-xl font-bold mb-6 ${obj.iconColor}`}>{obj.category}</h3>
                  <ul className="space-y-3">
                    {obj.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                        <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${obj.iconColor}`} />
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

      {/* Director's Desk */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-6">From the Director's Desk</p>
              <blockquote className="text-white">
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-8">
                  "In these formative years, ICAR-IARI Assam has made significant strides towards establishing itself
                  as a beacon of agricultural research and education in the North-Eastern region. The joining of
                  scientific staff from across the nation, the growth of student programmes, and a research agenda
                  squarely focused on the challenges of this region — all of this gives us reason for genuine
                  confidence in the institute's future."
                </p>
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-1 bg-accent rounded-full mb-4" />
                <p className="text-white font-semibold text-lg">Dr. Ch. Srinivasa Rao</p>
                <p className="text-white/70">Director, ICAR-IARI Assam</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Stay Updated</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Latest Announcements
                </h2>
              </div>
              <Link
                href="/outreach"
                data-testid="link-all-announcements"
                className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                View All <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((item, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                  data-testid={`card-announcement-${i}`}
                >
                  <p className="text-accent text-sm font-semibold mb-3">{item.date}</p>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3 leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
