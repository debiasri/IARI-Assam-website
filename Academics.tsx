import { GraduationCap, BookOpen, Trophy, Users, MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const states = [
  "Assam", "Arunachal Pradesh", "Manipur", "Tripura", "West Bengal",
  "Odisha", "Rajasthan", "Tamil Nadu", "Kerala", "Bihar",
  "Haryana", "Delhi", "Jharkhand", "Punjab", "Madhya Pradesh",
  "Uttar Pradesh", "Uttarakhand", "Himachal Pradesh", "Chhattisgarh", "Andhra Pradesh",
];

const achievements = [
  {
    student: "Md. Safvan",
    programme: "Second-year B.Sc. (Agriculture)",
    achievement: "Selected as one of the winners of the NAAS-YUVA Infographic Competition at national level",
  },
  {
    student: "Ms. Sneha Bharadwaj",
    programme: "M.Sc. Student",
    achievement: "Received the Best M.Sc. Student Award at the 63rd Convocation of IARI",
  },
];

const campusActivities = [
  "Harmony Fiesta — Annual cultural festival",
  "RANGREZ'25 — Arts and cultural competition",
  "Republic Day celebrations",
  "Diwali, Ganesh Chaturthi, and New Year celebrations",
  "ICAR Zonal Sports Tournaments",
  "Essay and debate competitions",
  "Freshers' Party (Rendezvous)",
];

export default function Academics() {
  return (
    <AppLayout>
      <PageHeader
        title="Academic Programmes"
        description="Nurturing the next generation of agricultural scientists from across India"
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Overview</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Higher Agricultural Education for North-East India and Beyond
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ICAR-IARI Assam started its academic programmes in 2015–16, and today has 141 B.Sc. (Agriculture)
                students enrolled from more than 20 states across India — a diversity that reflects the national
                importance of the institute. As per the EFC plan 2021–26 and NEP 2020, IARI Assam is proposed as an
                off-campus of IARI New Delhi for undergraduate and postgraduate education.
              </p>
            </div>
          </FadeIn>

          {/* Programme Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* BSc */}
            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm h-full">
                <div className="bg-primary p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">B.Sc. (Hons.) Agriculture</h3>
                      <p className="text-white/70 text-sm">Undergraduate Programme</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Duration", "4 years (8 semesters)"],
                        ["EFC-approved intake", "60 students per year"],
                        ["Current enrolment", "141 students from 20+ states"],
                        ["Admission", "ICAR AIEEA / state counselling"],
                        ["Medium of instruction", "English"],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="py-3 pr-4 font-medium text-foreground">{label}</td>
                          <td className="py-3 text-muted-foreground">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>

            {/* MSc */}
            <FadeIn direction="left">
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm h-full">
                <div className="bg-secondary p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">M.Sc. (Agriculture)</h3>
                      <p className="text-white/70 text-sm">Postgraduate Programme</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Postgraduate students at ICAR-IARI Assam work under the direct guidance of active research
                    scientists, ensuring that their training is embedded in real research addressing the challenges
                    of the North-Eastern region.
                  </p>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Duration", "2 years (4 semesters)"],
                        ["Disciplines on campus", "Agronomy, Soil Science"],
                        ["Admission", "ICAR AIEEA (PG)"],
                        ["Historical record", "68 students admitted (2015–21); 39 passed out as of EFC 2021"],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="py-3 pr-4 font-medium text-foreground">{label}</td>
                          <td className="py-3 text-muted-foreground">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* States Map */}
          <FadeIn>
            <div className="bg-muted/30 border border-border rounded-2xl p-8 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-xl font-bold text-foreground">States Represented Among Students</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {states.map((state) => (
                  <span
                    key={state}
                    className="bg-primary/10 border border-primary/20 text-primary text-sm px-3 py-1.5 rounded-full font-medium"
                    data-testid={`badge-state-${state}`}
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Achievements */}
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-6 h-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Student Achievements</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((ach, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-6 shadow-sm"
                    data-testid={`card-achievement-${i}`}
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                      <Trophy className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{ach.student}</h4>
                    <p className="text-accent text-sm mb-3">{ach.programme}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ach.achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Campus Life */}
          <FadeIn>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Campus Life</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Students at ICAR-IARI Assam live in the Brahmaputra Boys Hostel and the Subansiri Girls Hostel,
                both inaugurated in March 2024. The campus has a computer laboratory, smart classrooms, a library,
                and sports facilities. The Students' Council organises a range of activities through the year.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {campusActivities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </AppLayout>
  );
}
