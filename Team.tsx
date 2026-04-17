import { User, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const scientificStaff = [
  {
    name: "Dr. Ch. Srinivasa Rao",
    designation: "Director",
    specialisation: "Agricultural Sciences",
    email: "director@iari.res.in",
    isDirector: true,
  },
  {
    name: "Dr. Lohit Kumar Baishya",
    designation: "Scientist-in-Charge and Head, School of Natural Resource Management",
    specialisation: "Soil Science (Agronomy)",
    email: "To be updated",
    isDirector: false,
  },
  {
    name: "Dr. Amjad K. Balange",
    designation: "Principal Scientist and Head, School of Animal, Poultry and Fishery Sciences",
    specialisation: "Fish and Fishery Sciences",
    email: "To be updated",
    isDirector: false,
  },
];

const adminStaff = [
  { name: "Mr. Saroj Kumar Singh", designation: "Chief Administrative Officer" },
  { name: "Mr. Prasant Kumar", designation: "Comptroller (In-charge)" },
  { name: "Mr. Subham Kumar", designation: "Finance and Accounts Officer" },
  { name: "Mr. Dev Plusiya", designation: "Administrative Officer" },
  { name: "Mr. Jitender Singh Gaite", designation: "Assistant Administrative Officer" },
];

export default function Team() {
  return (
    <AppLayout>
      <PageHeader
        title="Our Team"
        description="A young, growing team of scientists from across India dedicated to agricultural research and education"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-muted-foreground leading-relaxed">
                ICAR-IARI Assam has a young and growing team of scientists from across India, bringing together
                expertise in crop science, horticulture, soil science, fisheries, aquaculture, animal science,
                agricultural statistics, remote sensing, and agricultural engineering. The joining of 19 fresh
                scientists and 4 principal scientists in 2023 was a defining step in building the institute's research capacity.
              </p>
            </div>
          </FadeIn>

          {/* Scientific Staff */}
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Scientific Staff</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {scientificStaff.map((member, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className={`bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${member.isDirector ? "border-primary/40 ring-2 ring-primary/10" : "border-border"}`}
                  data-testid={`card-scientist-${i}`}
                >
                  <div className={`p-6 ${member.isDirector ? "bg-primary" : "bg-muted/30"}`}>
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                      <User className={`w-10 h-10 ${member.isDirector ? "text-white" : "text-muted-foreground"}`} />
                    </div>
                    {member.isDirector && (
                      <div className="text-center mb-2">
                        <span className="text-xs font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full tracking-wider uppercase">
                          Director
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-snug">{member.designation}</p>
                    <p className="text-xs text-accent font-medium bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">
                      {member.specialisation}
                    </p>
                    {member.email && member.email !== "To be updated" && (
                      <div className="flex items-center justify-center gap-2 text-sm text-primary">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                      </div>
                    )}
                    {member.email === "To be updated" && (
                      <p className="text-xs text-muted-foreground italic">Email to be updated</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-muted/20 border border-border rounded-xl p-6 mb-16 text-sm text-muted-foreground text-center">
              Complete staff list with designations, specialisations, and contact information will be updated through the Staff Profile system. Refer to At a Glance 2025 (p. 13) for the full Staff Position list.
            </div>
          </FadeIn>

          {/* Admin Staff */}
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Administrative & Finance Staff</h2>
          </FadeIn>
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm mb-6">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Name</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {adminStaff.map((member, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors" data-testid={`row-admin-${i}`}>
                    <td className="px-6 py-4 font-medium text-foreground text-sm">{member.name}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FadeIn>
            <p className="text-sm text-muted-foreground italic text-center">
              Contact details for administrative staff will be updated. Please contact the institute at iariassam2017@gmail.com for enquiries.
            </p>
          </FadeIn>
        </div>
      </section>
    </AppLayout>
  );
}
