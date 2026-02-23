import React from "react";

const About = () => (
  <div>
    {/* Narrative Section */}
    <section className="py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-6">engineering</span>
        <h2 className="text-4xl font-bold mb-8 italic">"Engineers at heart, consultants by choice."</h2>
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            Danny and Gloria didn't start Frontino to follow the status quo of corporate consulting. With a shared background in complex systems architecture and software engineering, they saw a gap in how technology was being leveraged for business growth.
          </p>
          <p>
            They realized that most business "bottlenecks" weren't just management problems—they were structural inefficiencies that could be solved with the precision of high-level code. Today, they apply that same rigorous analytical framework to every client partner, turning technical debt into scalable opportunity.
          </p>
        </div>
      </div>
    </section>
    {/* Bio Cards Section */}
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Meet the Founders</h2>
        <p className="text-slate-600 dark:text-slate-400">Leadership driven by technical excellence and strategic vision.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Danny's Card */}
        <div className="group relative bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="lg:col-span-2 overflow-hidden">
              <img alt="Danny" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQffTQutEXB7GzD2AaKdq7-ZetwmGy444M4q7shcH3bk1qu_IU8CS4ofVBeNPr7RSZZxkIz4u1ESpTrRQs2a9X5LApFdQDWrpoNTNgTOWDLeVdowhR-KXKFJonqYQvgCtBOExfvwwzvg-e1fKlKdHth6jaT-LtXnXqDtCWGJhXOFSjF_qWFnt6A6jyuDtGG7Z23CWiSSBVIFhBhBgD9h-LlVvFaxkk_h35wVCmEaIkBxtgi-VK9Nhd6_8rM5OwU7tTV16mmJDzc2Y" />
            </div>
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-1">Danny Frontino</h3>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Managing Partner &amp; CTO</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                A former Technical Architect for Fortune 500 firms, Danny specializes in building scalable infrastructure. He believes that every business problem is a system waiting to be optimized.
              </p>
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">terminal</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">hub</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Gloria's Card */}
        <div className="group relative bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="lg:col-span-2 overflow-hidden">
              <img alt="Gloria" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6dJUDtiK6uy2I7dwGqx9aB2_hudFfRnz7dW6mXM9bA1YJtt3npZbM3wep3oE_QpfiRwFMPArJPQvkrwD2QY83-lM0LuvyRORBK3ZKl-gJ4fdJXNZVMloLm_1EebXC7jY8DZmc7MrVCsyLVROv6VHyTu8fjI7_cCMSu51NrjLrw5GB0PZIisJBH1CHITmDloECqWLe428z0ZKjoPYNeFBByXEuy3_zmch5e1GEcN2PrD28n0IBlXNV1DNVIPrulek8-F_UBxcfOsM" />
            </div>
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-1">Gloria Vance</h3>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Strategy Director &amp; COO</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                With a background in Systems Engineering and an MBA, Gloria bridges the gap between technical possibility and business reality. She focuses on operations and growth strategies.
              </p>
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                </span>
              </div>
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
                  <p className="text-white/70 text-sm">Every recommendation is backed by empirical data and systems analysis.</p>
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
