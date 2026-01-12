import React, { useContext } from "react";
import PostItNote from "./PostItNote";
import { motion } from "framer-motion";
import { NoteNavContext } from "../providers/NoteNavProvider";

// Article data array
const articlesData = [
  {
    id: "article26P",
    color: "purple",
    title: "2026+ Predictions",
    text: "astrology & technology forecast",
    date: "20 January 2026",
    themes: ["astrology", "technology", "h"],
    redirectPath: "/Blog_26P"
  },
  {
    id: "articleDFD",
    color: "orange",
    title: "Dear Future Daughter",
    text: "submission to WhyNot",
    date: "01 December 2025",
    themes: ["capitalism", "mother", "external"],
    redirectPath: "https://www.whynot.org.au/voice/community-connection/dear-future-what-would-you-say-if-the-future-was-listeningdear-future/#:~:text=Dear%20Future%20Daughter"
  },{
    id: "articleAICR",
    color: "blue",
    title: "Could AI coding assistants be privatising code repair?",
    text: "I wonder whose labour they are training on?",
    date: "10 November 2025",
    themes: ["artificialintelligence", "technology", "classwar"],
    redirectPath: "/Blog_AICR"
  }, {
    id: "articleWITC",
    color: "pink",
    title: "Where's that Computer?",
    text: "She's right behind you - Hidden Figures (2016)",
    date: "01 November 2025",
    themes: ["feminism", "technology", "colophon"],
    redirectPath: "/Blog_WITC"
  },
  {
    id: "articleTGAC",
    color: "blue",
    title: "cyber goose on the digital commons",
    text: "till they go and steal it back",
    date: "20 October 2025",
    themes: ["capitalism", "technology", "englishclass"],
    redirectPath: "/Blog_TGAC"
  },
  {
    id: "articleBYDH",
    color: "green",
    title: "build your own digital home",
    text: "heal your relationship to the digital world",
    date: "25 September 2025",
    themes: ["internet", "technology", "homemaking"],
    redirectPath: "/Blog_BYDH"
  },
  {
    id: "articleWWWW",
    color: "red",
    title: "world-wide word-weaving",
    text: "the loom walked so computers could run",
    date: "13 August 2025",
    themes: ["internet", "technology", "weaving"],
    redirectPath: "/Blog_WWWW"
  },
  {
    id: "articleFWFM",
    color: "orange",
    title: "fifth wave feminism: motherwork",
    text: "motherwork is the root of all capital",
    date: "07 August 2025",
    themes: ["mother", "work", "feminism"],
    redirectPath: "/Blog_FWFM"
  },
  {
    id: "articleSCSJ",
    color: "yellow",
    title: "stem cells and spiritual journeys",
    text: "a brief overview of woman's life phases",
    date: "02 July 2025",
    themes: ["menstruation", "spirit", "science"],
    redirectPath: "/Blog_SCSJ"
  }
];

// Utility to extract year from date string
const getYear = (date) => date.split(" ").pop();

const Articles = ({ filterTheme = null, filterYear = null, filterColor = null }) => {
  const { movingNoteId, handleNoteClick } = useContext(NoteNavContext);
  // Filter logic
  const filtered = articlesData.filter((a) => {
    const matchesTheme = !filterTheme || a.themes.includes(filterTheme);
    const matchesYear = !filterYear || getYear(a.date) === filterYear;
    const matchesColor = !filterColor || a.color === filterColor;
    return matchesTheme && matchesYear && matchesColor;
  });

  // Sort by date descending (latest first)
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
      {sorted.map((article) => (
        <motion.div
          key={article.id}
          initial={{ x: 0, y: -50 }}
          animate={movingNoteId === article.id ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick(article.id, article.redirectPath)}
        >
          <PostItNote
            id={article.id}
            className={`note ${article.color}`}
            title={article.title}
          >
            <p>{article.text}</p>
            <p className="articleMetadata">
              {article.date} | {article.themes.join(", ")}
            </p>
          </PostItNote>
        </motion.div>
      ))}
    </div>
  );
};

export default Articles;
