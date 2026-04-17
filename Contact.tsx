import { useState } from "react";
import { MapPin, Mail, Plane, Train, Navigation, Send, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/layout/PageHeader";

const keyContacts = [
  { role: "Director", name: "Dr. Ch. Srinivasa Rao", email: "director@iari.res.in" },
  { role: "Scientist-in-Charge", name: "Dr. Lohit Kumar Baishya", email: "To be confirmed" },
  { role: "AKMU (Website / ICT)", name: "Dr. Dibyendu Deb", email: "To be confirmed" },
  { role: "Chief Administrative Officer", name: "Mr. Saroj Kumar Singh", email: "To be confirmed" },
  { role: "Finance & Accounts", name: "Mr. Subham Kumar", email: "To be confirmed" },
  { role: "General Enquiries", name: "", email: "iariassam2017@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <AppLayout>
      <PageHeader
        title="Contact Us"
        description="Get in touch with ICAR-IARI Assam — we are here to help"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Info */}
            <FadeIn direction="right">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Institute Contact Details</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground leading-relaxed">
                        ICAR-Indian Agricultural Research Institute (IARI), Assam<br />
                        Dirpai Chapori, Gogamukh<br />
                        Dhemaji, Assam – 787035, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a href="mailto:director@iari.res.in" className="text-primary hover:underline block" data-testid="link-email-director">
                        director@iari.res.in
                      </a>
                      <a href="mailto:iariassam2017@gmail.com" className="text-primary hover:underline block" data-testid="link-email-general">
                        iariassam2017@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-6">How to Reach Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Plane, title: "Nearest Airport", detail: "Lilabari Airport, North Lakhimpur" },
                    { icon: Train, title: "Nearest Railway", detail: "Gogamukh Railway Station" },
                    { icon: Navigation, title: "From NH-15", detail: "7 km from National Highway 15 (Guwahati–Pasighat Highway)" },
                    { icon: MapPin, title: "From Dhemaji", detail: "30 km from district HQ | ~430 km from Dispur" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-muted/30 rounded-xl p-4" data-testid={`card-reach-${i}`}>
                      <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-muted-foreground text-xs mt-1 leading-snug">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Message Sent</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting ICAR-IARI Assam. We will get back to you at the earliest.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          data-testid="input-name"
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          data-testid="input-phone"
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        data-testid="input-email"
                        className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        data-testid="input-subject"
                        className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Subject of your enquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        data-testid="input-message"
                        className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      data-testid="button-submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-70"
                    >
                      {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Map */}
          <FadeIn>
            <div className="mb-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Our Location</h2>
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28924.27!2d94.6166!3d27.2056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37421c9cc58d9f77%3A0x6c5a33c14f3c9a01!2sGogamukh%2C%20Assam%20787035!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ICAR-IARI Assam Location"
                  data-testid="iframe-map"
                />
              </div>
            </div>
          </FadeIn>

          {/* Key Contacts Table */}
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Key Contacts</h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Role</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Name</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {keyContacts.map((contact, i) => (
                    <tr key={i} className="hover:bg-muted/20 transition-colors" data-testid={`row-contact-${i}`}>
                      <td className="px-6 py-4 font-medium text-foreground text-sm">{contact.role}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{contact.name || "—"}</td>
                      <td className="px-6 py-4 text-sm">
                        {contact.email && !contact.email.startsWith("To") ? (
                          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a>
                        ) : (
                          <span className="text-muted-foreground italic">{contact.email}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>
    </AppLayout>
  );
}
