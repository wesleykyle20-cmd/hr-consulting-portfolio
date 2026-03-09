import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Premium HR Consulting Portfolio
 * Design: Modern Executive
 * Colors: Navy (#1A2B4A), White, Gold (#D4A574), Teal (#1B8A8A)
 * Typography: Montserrat Bold for headlines, Inter for body
 */

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Contact form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">
            JLQ<span className="text-secondary">.</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
            <a href="#framework" className="text-sm font-medium hover:text-accent transition-colors">Approach</a>
            <a href="#insights" className="text-sm font-medium hover:text-accent transition-colors">Insights</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </div>
          <Button className="cta-primary hidden md:inline-flex">Schedule Call</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="accent-line mb-6"></div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Strategic HR Consulting for Businesses That Want to Scale
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Helping startups, SMEs, and growing organizations build strong teams, modern HR systems, and high-performing workplace cultures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="cta-primary text-base py-6">Schedule a Consultation</Button>
                <Button className="cta-secondary text-base py-6">Explore Services</Button>
              </div>
              <div className="text-sm text-blue-200">
                <p className="mb-2">✓ Trusted by growing businesses</p>
                <p>✓ Professional HR consulting for modern companies</p>
              </div>
            </div>
            
            <div className="relative h-96 md:h-full">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663408531479/3bfLYSWPM3LM2UFiry2DMS/hero-consulting-team-FDZT3jF4WcA3c2C7gayNTr.webp"
                alt="Executive consulting team"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional HR Expertise for Modern Businesses</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Businesses succeed when they have the right people, clear processes, and strong leadership structures. John Laurence Quiatzon provides strategic HR consulting designed to help companies build effective teams, improve workplace culture, and develop HR systems that support long-term business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-3">500+</div>
              <p className="text-muted-foreground">Professionals Placed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-3">95%</div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">50+</div>
              <p className="text-muted-foreground">Companies Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Measurable Results That Drive Growth</h2>
            <p className="text-lg text-muted-foreground">Impact-focused HR consulting outcomes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Streamlined Recruitment Processes</h3>
                  <p className="text-muted-foreground">Attract better talent through structured hiring processes that reduce time-to-hire by up to 40%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Stronger HR Policies</h3>
                  <p className="text-muted-foreground">Reduce workplace risk with clear, compliant policies that protect your organization</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Structured Performance Systems</h3>
                  <p className="text-muted-foreground">Improve employee accountability and engagement through systematic performance management</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">HR Strategies for Growth</h3>
                  <p className="text-muted-foreground">Align your people strategy with business goals to support sustainable, scalable growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">HR Consulting Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions tailored to your organization's needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Talent Acquisition & Recruitment Strategy</h3>
              <p className="text-muted-foreground mb-4">Designing structured hiring processes to help businesses attract and hire top talent efficiently. From job descriptions to interview frameworks, we optimize every step.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">HR Policy Development</h3>
              <p className="text-muted-foreground mb-4">Creating clear policies, employee handbooks, and HR frameworks that ensure consistency and compliance. Protect your organization while supporting employee success.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Employee Relations & Workplace Strategy</h3>
              <p className="text-muted-foreground mb-4">Helping companies maintain positive employee relationships and productive workplace cultures. Build engagement and reduce turnover through strategic people management.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Performance Management Systems</h3>
              <p className="text-muted-foreground mb-4">Implementing structured systems that support employee development and accountability. Create clear expectations and foster continuous improvement across your organization.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">HR Compliance & Documentation</h3>
              <p className="text-muted-foreground mb-4">Ensuring businesses meet labor requirements while maintaining organized HR documentation. Stay compliant and audit-ready with proper systems and records.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">HR Consulting for Startups & SMEs</h3>
              <p className="text-muted-foreground mb-4">Providing flexible HR expertise for companies that need strategic HR support without maintaining a full-time HR department. Scale your HR as your business grows.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Framework Section */}
      <section id="framework" className="py-20 md:py-28 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Strategic Approach to HR Consulting</h2>
            <p className="text-lg text-blue-100">Our proven three-step methodology</p>
          </div>
          
          <div className="mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663408531479/3bfLYSWPM3LM2UFiry2DMS/consulting-framework-visual-HGvMZjVWJWK5aa2KGEcERx.webp"
              alt="Consulting Framework"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-secondary mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3">Assess</h3>
              <p className="text-blue-100">Evaluate your company's current HR structure, hiring processes, and workforce challenges. We conduct a comprehensive audit to identify gaps and opportunities.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-secondary mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3">Design</h3>
              <p className="text-blue-100">Develop tailored HR strategies that align with your organization's business goals. We create customized solutions that address your specific challenges.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-secondary mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3">Implement</h3>
              <p className="text-blue-100">Support your leadership team in implementing HR systems and improving people management practices. We ensure successful adoption and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by founders and business leaders</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full"></div>
                <div>
                  <p className="font-bold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Founder, TechStart</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"John's strategic approach to HR transformed our hiring process. We reduced time-to-hire by 50% and improved retention significantly."</p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full"></div>
                <div>
                  <p className="font-bold">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">CEO, Growth Solutions</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"The HR systems John implemented have been crucial to our scaling. His expertise in compliance and policy development gave us confidence to expand."</p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                <div>
                  <p className="font-bold">Emma Williams</p>
                  <p className="text-sm text-muted-foreground">HR Director, Enterprise Co.</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"John brought fresh perspectives to our people strategy. His insights on workplace culture have directly improved our employee satisfaction scores."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section id="insights" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Insights on Building Better Workplaces</h2>
            <p className="text-lg text-muted-foreground">HR expertise and thought leadership</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold mb-3">How Startups Can Build Effective HR Systems</h3>
              <p className="text-muted-foreground mb-4">Learn the essential HR foundations every startup needs to scale sustainably and attract top talent.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Read article <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold mb-3">Common Hiring Mistakes Growing Businesses Make</h3>
              <p className="text-muted-foreground mb-4">Avoid costly recruitment errors and build hiring processes that attract and retain your best people.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Read article <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold mb-3">Strategies for Improving Employee Retention</h3>
              <p className="text-muted-foreground mb-4">Discover proven strategies to build a culture where employees want to stay and grow with your organization.</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Read article <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Build a Stronger Team and a Better Workplace</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If your business is growing and you need professional HR guidance, strategic consulting can help you build the systems and team structures required for long-term success.
          </p>
          <Button className="cta-primary text-base py-6 px-10">Schedule a Consultation</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-accent mb-2">EMAIL</p>
                  <a href="mailto:john@example.com" className="text-lg text-primary hover:text-accent transition-colors">
                    john@example.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent mb-2">LINKEDIN</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg text-primary hover:text-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                    John Laurence Quiatzon
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent mb-2">AVAILABILITY</p>
                  <p className="text-lg text-muted-foreground">Available for consultations Monday - Friday, 9am - 5pm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-border">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent h-32 resize-none"
                    placeholder="Tell us about your HR consulting needs..."
                    required
                  />
                </div>
                <Button type="submit" className="cta-primary w-full text-base py-3">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/20">
            <div>
              <h3 className="text-2xl font-bold mb-2">John Laurence Quiatzon</h3>
              <p className="text-blue-100">Freelance HR Consultant</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#framework" className="hover:text-white transition-colors">Approach</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="mailto:john@example.com" className="text-blue-100 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-blue-100 text-sm">
            <p>Copyright © 2026 John Laurence Quiatzon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
