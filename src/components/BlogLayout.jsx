import React from "react";

import PageLayout from "./PageLayout";

const BlogLayout = ({ children }) => (
  <>
    <PageLayout>
      <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="blue">Could AI coding assistants be privatising code repair?</h1>
                <h2>I wonder whose labour they will be training on?</h2>
                <h4>25 January 2026 | artificialintelligence, technology, classwar</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
      </div>
      {children}
    </PageLayout>
  </>
);

export default BlogLayout;