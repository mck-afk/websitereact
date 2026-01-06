import React from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const PageLayout = ({ children }) => (
  <>
    <header className="pink">
        <Nav />
    </header>
    <main>
        {children}
    </main>
    <footer className="pink">
        <Footer />
    </footer>
  </>
);

export default PageLayout;