import React from "react";

const Header = () => (
  <header className="fixed top-0 w-full z-50 border-b border-white/10 glass">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="assets/logo6.png" 
            alt="Frontino Tech Logo" 
            className="w-10 h-10"
          />
        </div>
        <a
          href="#"
          className="hover:opacity-80 transition-opacity"
          onClick={e => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("show-home"));
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 10);
          }}
        >
          <h1 className="text-xl font-bold tracking-tight">Frontino Tech</h1>
        </a>
      </div>
      <nav className="md:flex items-center gap-10">
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#services"
          onClick={e => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("show-home"));
            setTimeout(() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }, 10);
          }}
        >
          Services
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#methodology"
          onClick={e => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("show-home"));
            setTimeout(() => {
              document.getElementById("methodology")?.scrollIntoView({ behavior: "smooth" });
            }, 10);
          }}
        >
          How We Work
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#engagement"
          onClick={e => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("show-home"));
            setTimeout(() => {
              document.getElementById("engagement")?.scrollIntoView({ behavior: "smooth" });
            }, 10);
          }}
        >
          Engagement
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#why-us"
          onClick={e => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("show-home"));
            setTimeout(() => {
              document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" });
            }, 10);
          }}
        >
          Why Us
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#about-us"
          onClick={e => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("show-about"));
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 10);
          }}
        >
          About Us
        </a>
      </nav>
      <a
        href="#schedule"
        className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
        onClick={e => {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent("show-home"));
          setTimeout(() => {
            document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
          }, 10);
        }}
      >
        Book a Discovery Call
      </a>
    </div>
  </header>
);

export default Header;
