import React from "react";

const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="assets/logo.png" 
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
