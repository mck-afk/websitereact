import PageLayout from "../components/PageLayout";

import Articles from "../components/Articles";
import React from "react";

const allThemes = [
  "technology", "internet", "capitalism", "mother", "health", "astrology", "external", "englishclass", "predictions", "homemaking", "weaving", "work", "feminism", "menstruation", "spirit" 
];
const allYears = ["2025", "2026"];

const allColors = ["orange", "yellow", "green", "blue", "purple", "pink"];

const Weblog = () => {
  const [theme, setTheme] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [color, setColor] = React.useState(null);

  return (
    <PageLayout>
      <div className="red">
        <h1><a href="https://en.wikipedia.org/wiki/Blog">web log</a></h1>
        <div id="badges" >
          <a href="https://notbyai.fyi/"><img src="/images/notai1.svg" alt="not ai" style={{ paddingRight: "20px" }} /></a>
          <a href="https://subscribeopenly.net/subscribe/?url=https://annabelle-grace-mckenzie.com/weblog"><img src="/images/rssicon.png" alt="rss icon" style={{ maxWidth: "30px" }} /></a>
          <a href="https://en.wikipedia.org/wiki/RSS"><img src="/images/infoicon.png" alt="rss info icon" style={{ maxWidth: "20px", marginBottom: "10px" }} /></a>
        </div>

        <div style={{ margin: "2rem 0" }}>
          <div style={{ marginBottom: "1rem" }}>
            <strong>Theme:</strong>{" "}
            <button onClick={() => setTheme(null)} style={{ marginRight: 8, fontWeight: !theme ? 'bold' : 'normal' }}>All</button>
            {allThemes.map((t) => (
              <button key={t} onClick={() => setTheme(t)} style={{ marginRight: 8, fontWeight: theme === t ? 'bold' : 'normal' }}>{t}</button>
            ))}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <strong>Year:</strong>{" "}
            <button onClick={() => setYear(null)} style={{ marginRight: 8, fontWeight: !year ? 'bold' : 'normal' }}>All</button>
            {allYears.map((y) => (
              <button key={y} onClick={() => setYear(y)} style={{ marginRight: 8, fontWeight: year === y ? 'bold' : 'normal' }}>{y}</button>
            ))}
          </div>
          <div>
            <strong>Colour:</strong>{" "}
            <button onClick={() => setColor(null)} style={{ marginRight: 8, fontWeight: !color ? 'bold' : 'normal' }}>All</button>
            {allColors.map((c) => (
              <button key={c} onClick={() => setColor(c)} style={{ marginRight: 8, fontWeight: color === c ? 'bold' : 'normal' }}>{c}</button>
            ))}
          </div>
          
        </div>
      </div>
      <Articles filterTheme={theme} filterYear={year} filterColor={color} />
    </PageLayout>
  );
};

export default Weblog;
