import React from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const PageLayout = ({ children }) => (
  <>
    <header>

    </header>
    <main>
        {children}
    </main>
    <footer className="pink">
        <Nav />
    </footer>
  </>
);

export default PageLayout;