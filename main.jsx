import React from "react";
import './src/index.css';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import About from "./components/About";

const headerRoot = document.getElementById("react-header");
if (headerRoot) {
  ReactDOM.createRoot(headerRoot).render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  );
}


const homeRoot = document.getElementById("react-home");
let homeRootInstance = null;
if (homeRoot) {
  homeRootInstance = ReactDOM.createRoot(homeRoot);
  homeRootInstance.render(
    <React.StrictMode>
      <HomeContent />
    </React.StrictMode>
  );
  window.addEventListener("show-about", () => {
    homeRootInstance.render(
      <React.StrictMode>
        <About />
      </React.StrictMode>
    );
  });
  window.addEventListener("show-home", () => {
    homeRootInstance.render(
      <React.StrictMode>
        <HomeContent />
      </React.StrictMode>
    );
  });
}

const footerRoot = document.getElementById("react-footer");
if (footerRoot) {
  ReactDOM.createRoot(footerRoot).render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
}
