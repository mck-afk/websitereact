import React from "react";
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