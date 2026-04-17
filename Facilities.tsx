import { Building2, FlaskConical, Wheat, Home, Users, Dumbbell } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const labs = [
  {
    name: "Natural Resources Management Laboratory",
    description: "Soil, water, and environmental analysis supporting research across the North-Eastern region.",
  },
  {
    name: "Crop Improvement Laboratory",
    description: "Plant breeding, genetics, and crop science research facilities.",
  },
  {
    name: "Animal, Poultry and Fisheries Laboratory",
    description: "Aquaculture, animal science, and fish health research.",
  },
  {
    name: "Fish Specimen Repository",
    description: "Collection and curation of fish specimens from the upper Brahmaputra region.",
  },
  {
    name: "Computer Laboratory",
    description: "Digital tools, remote sensing, GIS, and data analysis for scientists and students.",
  },
  {
    name: "Smart Classroom",
    description: "Technology-enabled undergraduate teaching with interactive displays and modern AV systems.",
  },
];

export default function Facilities() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <AppLayout>
      <PageHeader
        title="Facilities & Infrastructure"
        description="A purpose-built campus developed from a cleared jungle plot to a fully functional modern institute"
        image="images/campus-night-1.jpeg"
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Campus Overview</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                From a cleared jungle plot in 2018 to a functional, modern campus by 2024 — the infrastructure
                development at ICAR-IARI Assam has been rapid and purposeful. Today, the campus houses a purpose-built
                academic and administrative building, fully equipped research laboratories, a library, smart classrooms,
                separate student hostels, a guest house, residential quarters for staff, a research farm, and a sports ground.
              </p>
            </div>
          </FadeIn>

          {/* Main Building */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-7 h-7 text-primary" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    Academic-cum-Administrative Building
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The main building of the institute — inaugurated on 4 March 2024 by Shri Arjun Munda, Union Minister
                  of Agriculture and Farmers Welfare — houses the administrative offices, faculty rooms, smart
                  classrooms, and core research laboratories. It is the architectural centrepiece of the campus.
                </p>
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 inline-block">
                  <p className="text-sm font-semibold text-foreground">Inaugurated: 4 March 2024</p>
                  <p className="text-sm text-muted-foreground">By Shri Arjun Munda, Union Minister of Agriculture</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${base}/images/campus-day.jpeg`}
                  alt="Academic-cum-Administrative Building"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Labs */}
          <div className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <FlaskConical className="w-7 h-7 text-primary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Research Laboratories</h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labs.map((lab, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all h-full"
                    data-testid={`card-lab-${i}`}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{lab.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{lab.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Research Farm */}
          <FadeIn>
            <div className="bg-muted/30 border border-border rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Wheat className="w-7 h-7 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Research Farm</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Approximately 5 hectares of campus land has been developed into an active research farm for field
                experiments, student research, and demonstration of crop varieties and farming systems. The farm
                currently runs experiments on finger millet, maize, and integrated farming systems including
                fishery-based integrated models. A pig breeding station on approximately 2 hectares has also been
                refined and is now operational.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Finger Millet Trials", "Maize Experiments", "Fishery-Based IFS", "Pig Breeding Station"].map((tag) => (
                  <span key={tag} className="bg-primary/10 border border-primary/20 text-primary text-sm px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Hostels & Guest House */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Home,
                title: "Student Hostels",
                details: [
                  { label: "Brahmaputra Boys Hostel", value: "Inaugurated 4 March 2024" },
                  { label: "Subansiri Girls Hostel", value: "Inaugurated 4 March 2024" },
                ],
              },
              {
                icon: Building2,
                title: "Guest House & Residential",
                details: [
                  { label: "Manas Guest House", value: "Inaugurated 4 March 2024 by Shri Arjun Munda" },
                  { label: "Dhansiri Residential Complex", value: "Inaugurated 28 January 2025 by Dr. Himanshu Pathak, DG ICAR" },
                ],
              },
            ].map((section, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <section.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">{section.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.details.map((d, j) => (
                      <div key={j} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <p className="font-medium text-foreground text-sm">{d.label}</p>
                        <p className="text-muted-foreground text-sm mt-1">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Sports */}
          <FadeIn>
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Dumbbell className="w-6 h-6 text-secondary" />
                <h3 className="font-serif text-lg font-bold text-foreground">Sports & Recreation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The institute has a sports ground and has actively participated in ICAR Zonal Sports Tournaments,
                including its first sports contingent at the ICAR Zonal Sports Tournament 2023 at ICAR-NRRI,
                Cuttack (December 2023).
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </AppLayout>
  );
}
