import PageLayout from "../components/PageLayout";
import PostItNote from "../components/PostItNote";
import Articles from "../components/Articles";
import React from "react";
import { HashLink } from 'react-router-hash-link';

const allThemes = [
  "technology", "internet", "feminism", "capitalism", "mother", "literature", "health", "astrology", "external",  "predictions", "homemaking", "weaving", "work",  "menstruation", "coding", "narrative", "spirit", "shortstory"
];
const allYears = ["2025", "2026"];

const allColors = ["orange", "yellow", "green", "blue", "purple", "pink"];

const Weblog = () => {
  const [theme, setTheme] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [color, setColor] = React.useState(null);

  return (
    <PageLayout>
      <div className="twoCol">
        
        <div>
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
            <p><HashLink to="#thoughts">Thought Wall</HashLink></p>
          </div>
          </div>
              <Articles filterTheme={theme} filterYear={year} filterColor={color} />
            </div>
        
        <div id="thoughts" className="noticeboardBackground" style={{ padding: "2rem", marginBottom: "2rem" }}>
        <h1>Thought Wall</h1>
        <PostItNote 
          id="noteONMONEY"
          className="note red"
          title="On Money"
          lastUpdated="22/02/2026"
          >
            <p>Money is more than an exchange for goods and services<br />
            because those goods and services are<br />
            on a fundmental level, an exchange of care.<br /><br />

            Money gives you choice in the exchange of care.<br />
            That is why we all endlessly crave more of it.</p>
        </PostItNote>
        <PostItNote 
          id="noteWRITINGDISCLOSING"
          className="note red"
          title="On AI"
          lastUpdated="15/01/2026">
            <p>Writing is such a self disclosing thing. <br />
          You can’t write and be unbiased.<br />
          Your grammar will betray you.<br /><br />

          So naturally we project human values (consciousness) onto a tool that can write.<br /><br />

          If it can write, <br /> there must be a self to disclose.</p>
        </PostItNote>
        
      </div>
        

      </div>

      
      
    </PageLayout>
  );
};

export default Weblog;
