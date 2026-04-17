import { Monitor, BarChart3, Lightbulb, Shield } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const units = [
  {
    acronym: "AKMU",
    fullName: "Agricultural Knowledge Management Unit",
    icon: Monitor,
    description:
      "The Agricultural Knowledge Management Unit manages the institute's ICT infrastructure, official website, digital knowledge resources, and data management systems. AKMU also coordinates e-governance initiatives and digital capacity building, and played the lead role in developing this website.",
    incharge: "Dr. Dibyendu Deb",
    designation: "Senior Scientist (Agricultural Statistics)",
    email: "To be confirmed",
    phone: "To be confirmed",
  },
  {
    acronym: "PME",
    fullName: "Planning, Monitoring & Evaluation",
    icon: BarChart3,
    description:
      "The PME Cell coordinates planning, monitoring, and evaluation of research projects and institutional activities. It manages ICAR review processes, including the institute's first Quinquennial Review Team (QRT) visit in October 2023.",
    incharge: "To be confirmed",
    designation: "",
    email: "To be confirmed",
    phone: "To be confirmed",
  },
  {
    acronym: "ITMU",
    fullName: "Intellectual Technology Management Unit",
    icon: Lightbulb,
    description:
      "ITMU facilitates intellectual property management, technology transfer, and commercialisation of the institute's research outputs. It provides scientists and students with support for patents, licensing, and technology dissemination.",
    incharge: "To be confirmed",
    designation: "",
    email: "To be confirmed",
    phone: "To be confirmed",
  },
];

const mandatoryCells = [
  { name: "GSCASH (Gender Sensitisation Committee)", description: "Gender sensitisation and prevention of sexual harassment at workplace." },
  { name: "SC/ST Cell", description: "Addressing grievances and ensuring welfare of Scheduled Caste and Scheduled Tribe employees and students." },
  { name: "Anti-Ragging Committee", description: "Prevention and redressal of ragging incidents on campus." },
  { name: "Students' Council", description: "Student body organising academic, cultural, and sports activities." },
  { name: "Vigilance Cell", description: "Internal vigilance and anti-corruption measures." },
  { name: "RTI — Public Information Officer", description: "Handling Right to Information applications under the RTI Act, 2005." },
  { name: "RTI — Appellate Authority", description: "First appellate authority for RTI applications." },
];

export default function Units() {
  return (
    <AppLayout>
      <PageHeader
        title="Important Units & Cells"
        description="Specialised units and mandatory cells supporting the institute's administrative and statutory functions"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-10">Functional Units</h2>
          </FadeIn>

          <div className="space-y-8 mb-20">
            {units.map((unit, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
                  data-testid={`card-unit-${unit.acronym}`}
                >
                  <div className="bg-primary/5 border-b border-border p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <unit.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-serif text-2xl font-bold text-primary">{unit.acronym}</span>
                          <span className="text-muted-foreground text-sm">—</span>
                          <span className="text-foreground font-medium">{unit.fullName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-muted-foreground leading-relaxed mb-6">{unit.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">In-charge</p>
                        <p className="text-foreground font-medium text-sm">{unit.incharge}</p>
                        {unit.designation && <p className="text-muted-foreground text-xs mt-1">{unit.designation}</p>}
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                        <p className="text-foreground text-sm">{unit.email}</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-foreground text-sm">{unit.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mandatory Cells */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-7 h-7 text-primary" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Mandatory Cells</h2>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The following cells are mandatory under ICAR and Government of India guidelines. Each has a designated
              in-charge and grievance procedure. Contact details will be updated as information is confirmed.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mandatoryCells.map((cell, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                  data-testid={`card-cell-${i}`}
                >
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-4 h-4 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{cell.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{cell.description}</p>
                  <p className="text-xs text-muted-foreground italic">Contact: To be confirmed</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
