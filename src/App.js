import React from "react";
import "./App.css";
import HeaderContent from "./components/headerContent/HeaderContent";
import RegisterLanding from "./components/registerLanding/RegisterLanding";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <div className="container">
        <header>
          <div className="logo">Logo</div>
          <nav>
            <a href="/#">About Us</a>
            <a href="/#">Register</a>
          </nav>
        </header>
        <main>
          <section className="intro">
            <h1>ArtiGrant</h1>
            <p>Connecting Artists with Grant Application Advisors</p>
          </section>
          <HeaderContent />
          <RegisterLanding />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
