import React from "react";

const About = () => (
  <div>
    {/* Narrative Section */}
    <section className="py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-6">engineering</span>
        <h2 className="text-4xl font-bold mb-8 italic">"Engineer at heart, consultant by choice."</h2>
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            Danny didn't start Frontino to follow the status quo of corporate consulting. With a shared background in complex systems architecture and software engineering, he saw a gap in how technology was being leveraged for business growth.
          </p>
          <p>
            He realized that most business "bottlenecks" weren't just management problems—they were structural inefficiencies that could be solved with the precision of engineering. Today, he applies that same rigorous analytical framework to every client partner, turning problems into scalable opportunity.
          </p>
        </div>
      </div>
    </section>
    {/* Bio Cards Section */}
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
        <p className="text-slate-600 dark:text-slate-400">Leadership driven by technical excellence and strategic vision.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 place-items-center">
        {/* Danny's Card */}
        <div className="group relative bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300 md:col-span-2 max-w-xl">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="lg:col-span-2 overflow-hidden">
              <img alt="Danny" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="assets/DannyCastillo.png" />
            </div>
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-1">Danny Castillo</h3>       
              <p className="text-slate-1000 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                Danny Castillo is a systems thinker and technology architect dedicated to helping businesses scale through intelligent infrastructure. With extensive experience designing cloud-native and automated solutions, he transforms complex operational challenges into streamlined, high-performance systems.
                He views technology not as a cost center, but as a growth engine — applying AI and automation to unlock efficiency, innovation, and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Mission Statement Section */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-xl p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">The Mission</h2>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                "Empowering business growth through precision engineering and technological innovation. We don't just consult; we build the future of your company."
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 text-white">
                <div className="w-12 h-12 rounded bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Data-Driven Precision</h4>
                  <p className="text-white/70 text-sm">Every recommendation is backed by real experience, data and systems analysis.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-white">
                <div className="w-12 h-12 rounded bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">settings_input_component</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Custom Architecture</h4>
                  <p className="text-white/70 text-sm">No off-the-shelf answers. We build solutions tailored to your unique challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
