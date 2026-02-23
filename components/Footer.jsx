import React from "react";

const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        {/* <div className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded">
          <svg className="text-primary w-5 h-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
          </svg>
        </div> */}
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="assets/logo6.png" 
            alt="Frontino Tech Logo" 
            className="w-10 h-10"
          />
        </div>
        <p className="text-sm font-bold tracking-tight">Frontino Tech</p>
      </div>
      <div className="flex gap-8 text-sm text-slate-500"></div>
      <p className="text-xs text-slate-600">© 2026 Frontino Tech. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
