import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-accent">ICAR-IARI, Assam</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Advancing Agricultural Research, Education and Outreach for North-East India. A premier national institute dedicated to bringing the Green Revolution to the region.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About the Institute</Link></li>
              <li><Link href="/academics" className="text-primary-foreground/80 hover:text-white transition-colors">Academic Programmes</Link></li>
              <li><Link href="/research" className="text-primary-foreground/80 hover:text-white transition-colors">Research Projects</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Dirpai Chapori, Gogamukh<br />
                  Dhemaji, Assam - 787035
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:director@iari.res.in" className="text-primary-foreground/80 hover:text-white transition-colors">director@iari.res.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:iariassam2017@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">iariassam2017@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ICAR-Indian Agricultural Research Institute, Assam. All rights reserved.</p>
          <p>Developed by AKMU, ICAR-IARI Assam</p>
        </div>
      </div>
    </footer>
  );
}
