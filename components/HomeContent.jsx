import React, { useState, useEffect, useRef } from "react";
import BookingSuccessModal from "./BookingSuccessModal";

const HomeContent = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const redirectInputRef = useRef(null);

  useEffect(() => {
    // Set redirect URL for form
    if (redirectInputRef.current) {
      redirectInputRef.current.value = `${window.location.origin}/#success`;
    }

    // Check if returning from successful form submission
    if (window.location.hash === "#success") {
      setShowSuccessModal(true);
      // Clean URL
      const cleanUrl = window.location.pathname + window.location.search;
      history.replaceState(null, "", cleanUrl);
    }
  }, []);

  return (
  <main className="pt-20">
    {/* Hero Section */}
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
            <span className="text-primary text-xs font-bold tracking-wider uppercase">Future-Proof Engineering</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Building Business Infrastructure, <span className="text-primary">Not Just Software.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Scalable technology solutions for forward-thinking enterprises. We bridge the technology gap through strategic engineering and AI-driven growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-primary text-white h-14 px-8 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center">
              View Our Capabilities
            </a>
            <a href="#methodology" className="bg-white/5 border border-white/10 text-white h-14 px-8 rounded-lg font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              Our Method
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square bg-cover bg-center rounded-2xl border-subtle shadow-2xl relative z-10" style={{ backgroundImage: "url('/assets/3.jpg')" }}></div>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      </div>
    </section>
    {/* Executive Summary Section */}
    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">The Executive Summary</h2>
          <div className="h-1 w-20 bg-primary"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border-subtle glass flex flex-col gap-6">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-red-500">warning</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-slate-400 leading-relaxed">Legacy tools and fragmented systems create a technology gap that stalls business growth. Most organizations suffer from 'tool fatigue'—having the software but lacking the integrated infrastructure to make it work at scale.</p>
            </div>
          </div>
          <div className="p-8 rounded-xl border-subtle glass flex flex-col gap-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">The Solution</h3>
              <p className="text-slate-400 leading-relaxed">We build integrated, future-proof infrastructure that aligns technology with business outcomes. Our approach treats technology as a foundational asset, ensuring your systems scale alongside your ambitions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Core Services */}
    <section className="py-24" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Core Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Strategic engineering tailored for enterprise-level demands and complex technical challenges.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="group p-10 rounded-2xl border-subtle glass hover:border-primary/50 transition-all flex flex-col gap-6">
          <span className="material-symbols-outlined text-5xl text-primary/60 group-hover:text-primary transition-colors">desktop_mac</span>
          <h3 className="text-2xl font-bold">Web Development</h3>
          <p className="text-slate-400">We help startups and growing businesses build modern websites that are fast, secure and designed to support marketing and growth from day one.</p>
          <ul className="flex flex-col gap-3 mt-4 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Custom Websites and Web Applications</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Setup Domain, Hosting and Secure Business Email</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Performance, security and reliability best practices</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Websites designed to attract, engage and convert users</li>
          </ul>
        </div>
        {/* Service 2 */}
        <div className="group p-10 rounded-2xl border-subtle glass hover:border-primary/50 transition-all flex flex-col gap-6">
          <span className="material-symbols-outlined text-5xl text-primary/60 group-hover:text-primary transition-colors">schema</span>
          <h3 className="text-2xl font-bold">Process Automation</h3>
          <p className="text-slate-400">We help teams reduce manual work and scale operations by automating business processes with intelligent, data-driven solutions.</p>
          <ul className="flex flex-col gap-3 mt-4 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Workflow automation and orchestration</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> AI-Powered process optimization and monitoring</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Integration with existing systems and tools</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Monitoring and continuous improvement</li>
          </ul>
        </div>
        {/* Service 3 */}
        <div className="group p-10 rounded-2xl border-subtle glass hover:border-primary/50 transition-all flex flex-col gap-6">
          <span className="material-symbols-outlined text-5xl text-primary/60 group-hover:text-primary transition-colors">cloud_queue</span>
          <h3 className="text-2xl font-bold">Cloud Systems</h3>
          <p className="text-slate-400">We design and build cloud systems that are scalable, secure and cost-efficient supporting long-term growth and operational stability</p>
          <ul className="flex flex-col gap-3 mt-4 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Cloud Development on AWS and Azure</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Systems Modernization and Migration</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Custom Software Architecture and Platform Design</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> API Development and System Integration</li>
          </ul>
        </div>
      </div>
    </section>
    {/* How We Work (Methodology) */}
    <section className="py-24 bg-white/[0.02]" id="methodology">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Frontino Method</h2>
          <p className="text-slate-400">A structured delivery model designed for clarity, control and predictable outcomes.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center p-6 border-r border-white/5 last:border-0">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary font-bold text-xl">01</div>
            <h4 className="font-bold text-lg mb-2">Discovery</h4>
            <p className="text-sm text-slate-400">Understand your business goals, and existing technology to identify what really matters and what can be improved.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border-r border-white/5 last:border-0">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary font-bold text-xl">02</div>
            <h4 className="font-bold text-lg mb-2">Architect</h4>
            <p className="text-sm text-slate-400">Design a practical technical plan that supports growth, scalability and long-term maintainability</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border-r border-white/5 last:border-0">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary font-bold text-xl">03</div>
            <h4 className="font-bold text-lg mb-2">Build</h4>
            <p className="text-sm text-slate-400">Implement solutions iteratively, delivering value early with clear milestones and visibility.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary font-bold text-xl">04</div>
            <h4 className="font-bold text-lg mb-2">Optimize</h4>
            <p className="text-sm text-slate-400">Keep your systems healthy and ready to grow through monitoring and ongoing optimization.</p>
          </div>
        </div>
      </div>
    </section>
    {/* Engagement Models */}
    <section className="py-24" id="engagement">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">How to Engage</h2>
          <p className="text-slate-400">Flexible models to fit your organization's specific needs.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-1 rounded-2xl bg-gradient-to-br from-primary to-blue-900">
            <div className="h-full bg-background-dark p-8 rounded-[14px]">
              <h3 className="text-2xl font-bold mb-4">Strategic Partnership</h3>
              <p className="text-slate-400 mb-8">Long-term retainer for continuous advisory, fractional leadership, and architectural oversight.</p>
            </div>
          </div>
          <div className="p-1 rounded-2xl bg-white/10">
            <div className="h-full bg-background-dark p-8 rounded-[14px]">
              <h3 className="text-2xl font-bold mb-4">Project-Based</h3>
              <p className="text-slate-400 mb-8">Defined scope for specific infrastructure builds, migrations, or technical audits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Why Us / Value Prop */}
    <section className="py-24 bg-primary" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Efficiency-First Mindset. Business-Aligned Engineering.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h4 className="text-white font-bold text-xl mb-2">Every Line Counts</h4>
                <p className="text-white/70 text-sm">
                  We see code as an investment and a liability. Pragmatic engineering means building only what matters, optimizing for clarity, maintainability, and real business impact.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h4 className="text-white font-bold text-xl mb-2">Delivered with Candor</h4>
                <p className="text-white/70 text-sm">
                  We communicate technical realities clearly and openly. There are no magic numbers just thoughtful planning, honest tradeoffs, and results you can measure.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">verified_user</span>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">Security by Design</h5>
                <p className="text-white/60 text-sm">We don't bolt security on at the end; we bake it into every line of infrastructure code.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">speed</span>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">Velocity & Precision</h5>
                <p className="text-white/60 text-sm">Agile methodologies that don't sacrifice documentation or architectural integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-24" id="schedule">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Bridge the Technology Gap?</h2>
        <p className="text-xl text-slate-400 mb-10">Schedule a 30-minute discovery call to discuss your infrastructure goals and challenges.</p>
        <div className="p-8 glass border-subtle rounded-2xl">
          <form action="https://formsubmit.co/frontino.investments.llc@gmail.com" method="POST" className="grid sm:grid-cols-3 gap-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" ref={redirectInputRef} defaultValue={`${window.location.origin}/#success`} />
            <input type="hidden" name="_template" value="table" />
            <input className="bg-white/5 border-white/10 rounded-lg text-white focus:ring-primary focus:border-primary px-4 h-12" placeholder="Your Name" type="text" name="name" required />
            <input className="bg-white/5 border-white/10 rounded-lg text-white focus:ring-primary focus:border-primary px-4 h-12" placeholder="Business Email" type="email" name="email" required />
            <textarea className="bg-white/5 border-white/10 rounded-lg text-white focus:ring-primary focus:border-primary px-4 h-24 sm:col-span-3 resize-none" placeholder="Briefly describe what you're looking for: Web Development, Process Automation, Cloud Systems?" name="message" required></textarea>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-lg h-12 transition-all sm:col-span-3">Book Call</button>
          </form>
        </div>
      </div>
    </section>
    <BookingSuccessModal
      isOpen={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
    />
  </main>
  );
};

export default HomeContent;
