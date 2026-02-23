import React from "react";

const Header = () => (
  <header className="fixed top-0 w-full z-50 border-b border-white/10 glass">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
          <svg className="text-white w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor" />
          </svg>
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
          <h1 className="text-xl font-bold tracking-tight">Frontino Technology</h1>
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
