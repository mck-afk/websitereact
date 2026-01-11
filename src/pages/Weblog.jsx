import PageLayout from "../components/PageLayout";

import Articles from "../components/Articles";
import React from "react";

// These should match the themes and years in your articlesData
const allThemes = [
  "capitalism", "mother", "external", "technology", "women", "internet", "homemaking", "language", "weaving", "work", "feminism", "menstruation", "spirit", "science", "xxxxxxx"
];
const allYears = ["2025", "2026"];

const Weblog = () => {
  const [theme, setTheme] = React.useState(null);
  const [year, setYear] = React.useState(null);

  return (
    <PageLayout>
      <h1><a href="https://en.wikipedia.org/wiki/Blog">web log</a></h1>
      <div id="badges" >
        <a href="https://notbyai.fyi/"><img src="/images/notai1.svg" alt="not ai" style={{ paddingRight: "20px" }} /></a>
        <a href="https://subscribeopenly.net/subscribe/?url=https://annabelle-grace-mckenzie.com/weblog"><img src="/images/rssicon.png" alt="rss icon" style={{ maxWidth: "30px" }} /></a>
        <a href="https://en.wikipedia.org/wiki/RSS"><img src="/images/infoicon.png" alt="rss info icon" style={{ maxWidth: "20px", marginBottom: "10px" }} /></a>
      </div>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Filter by theme:</strong>{" "}
          <button onClick={() => setTheme(null)} style={{ marginRight: 8, fontWeight: !theme ? 'bold' : 'normal' }}>All</button>
          {allThemes.map((t) => (
            <button key={t} onClick={() => setTheme(t)} style={{ marginRight: 8, fontWeight: theme === t ? 'bold' : 'normal' }}>{t}</button>
          ))}
        </div>
        <div>
          <strong>Filter by year:</strong>{" "}
          <button onClick={() => setYear(null)} style={{ marginRight: 8, fontWeight: !year ? 'bold' : 'normal' }}>All</button>
          {allYears.map((y) => (
            <button key={y} onClick={() => setYear(y)} style={{ marginRight: 8, fontWeight: year === y ? 'bold' : 'normal' }}>{y}</button>
          ))}
        </div>
      </div>

      <Articles filterTheme={theme} filterYear={year} />
    </PageLayout>
  );
};

export default Weblog;
