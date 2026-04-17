import { Users, Sprout, Fish, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const events = [
  {
    date: "20–26 March 2025",
    title: "Training Programme on Millet Cultivation",
    description: "A one-week training programme on millet cultivation practices was organized for farmers and tribal communities. The programme directly addressed livelihood improvement through improved agro-techniques for minor millets in the Eastern Himalayan zone.",
    icon: Sprout,
    tag: "Training",
  },
  {
    date: "27 January 2025",
    title: "Farmer-Scientist Interaction cum Input Distribution Programme",
    description: "Organised by Dr. Ch. Srinivasa Rao, Director. A total of 110 farmers (including 36 women) from Dhemaji and Lakhimpur districts participated. Input kits distributed included knapsack sprayers, hybrid maize seeds, vegetable seed kits (ridge gourd, Bhendi, cow pea, cucumber, methi, coriander), spades, and Jabra.",
    icon: Users,
    tag: "Outreach",
  },
  {
    date: "21 November 2023",
    title: "Workshop on Sustainable Aquaculture Development",
    description: "One-Day Workshop on Sustainable Aquaculture Development for Food Security in North-East India on World Fisheries Day. Attended by 50 fish farmers, fishery development officers, KVK personnel, and college faculty. Three progressive fish farmers were recognised with certificates, quality fish seeds, and agricultural lime.",
    icon: Fish,
    tag: "Workshop",
  },
  {
    date: "10 July 2023",
    title: "National Fish Farmers Day — Input Distribution",
    description: "The institute distributed 25,000 fish seed and 500 lemon saplings to farmers of the region on National Fish Farmers Day, directly supporting livelihoods in the Brahmaputra valley.",
    icon: Fish,
    tag: "Distribution",
  },
];

export default function Outreach() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <AppLayout>
      <PageHeader
        title="Extension & Outreach"
        description="Putting research into practice — directly with farmers, women's groups, and rural communities"
        image="images/campus-night-2.jpeg"
      />

      {/* Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">EFC Mandate</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Approach to Outreach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Extension and outreach are at the heart of ICAR-IARI Assam's mandate. The institute's goal is to
                  generate innovative extension models, link them to developmental models, and disseminate them
                  through KVKs, state agricultural universities, and state extension departments.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All outreach is conducted through participatory approaches, with farmers as partners rather than
                  passive recipients. This includes women farmers, tribal communities, and youth — particularly
                  through Self-Help Groups (SHGs) in tribal areas of Dhemaji and Lakhimpur districts.
                </p>
                <div className="space-y-3">
                  {[
                    "Innovative extension models linked to developmental programmes",
                    "Participatory on-farm research and technology transfer",
                    "Linkages with KVKs and state agricultural departments",
                    "Micro-planning through inter-departmental approaches",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${base}/images/campus-night-2.jpeg`}
                  alt="ICAR-IARI Assam Campus"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Training Focus */}
          <FadeIn>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-16">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-7 h-7 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Training Programmes</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The institute conducts skill-oriented training programmes with a focus on women farmers, tribal
                communities, and youth in agriculture. Topics include crop management, pest and disease management,
                fish health, value-added product preparation, and millet cultivation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A particularly impactful training initiative covered hands-on preparation of value-added products
                from Assam lemon (RTS drinks, juice concentrate, pickles), fish products (fish pickle, fish cutlet,
                fish snacks), and millet-based food items — directly targeting the livelihood improvement of tribal
                women's self-help groups.
              </p>
            </div>
          </FadeIn>

          {/* Events */}
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Recent Outreach Events</h2>
          </FadeIn>
          <div className="space-y-6">
            {events.map((event, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  data-testid={`card-event-${i}`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary md:w-64 shrink-0 p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/20 px-3 py-1 rounded-full">
                          {event.tag}
                        </span>
                        <p className="text-white/80 text-sm mt-3 font-medium">{event.date}</p>
                      </div>
                      <event.icon className="w-10 h-10 text-white/40 mt-6" />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-3">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
