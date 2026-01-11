import React, { useContext } from "react";
import PostItNote from "./PostItNote";
import { motion } from "framer-motion";
import { NoteNavContext } from "../providers/NoteNavProvider";

// Article data array
const articlesData = [
  {
    id: "articleDFD",
    color: "blue",
    title: "Dear Future Daughter",
    text: "submission to WhyNot",
    date: "01 December 2025",
    themes: ["capitalism", "mother", "external"],
  },
  {
    id: "articleCAGM",
    color: "pink",
    title: "ComputHer by Annabelle Grace McKenzie",
    text: "subscribe to my Substack",
    date: "07 October 2025",
    themes: ["technology", "women", "external"],
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
    color: "purple",
    title: "world-wide word-weaving",
    text: "the loom walked so computers could run",
    date: "13 August 2025",
    themes: ["internet", "language", "weaving"],
  },
  {
    id: "articleFWFM",
    color: "orange",
    title: "fifth wave feminism: motherwork",
    text: "motherwork is the root of all capital",
    date: "07 August 2025",
    themes: ["mother", "work", "feminism"],
  },
  {
    id: "articleSCSJ",
    color: "yellow",
    title: "stem cells for a spiritual journey",
    text: "its not really just blood...",
    date: "02 July 2025",
    themes: ["menstruation", "spirit", "science"],
  },
  {
    id: "article",
    color: "red",
    title: "coming soon",
    text: "more poetry percolating...",
    date: "xx xxx xxxx",
    themes: ["xxxxxxx"],
  },
];

// Utility to extract year from date string
const getYear = (date) => date.split(" ").pop();

const Articles = ({ filterTheme = null, filterYear = null }) => {
  const { movingNoteId, handleNoteClick } = useContext(NoteNavContext);
  // Filter logic
  const filtered = articlesData.filter((a) => {
    const matchesTheme = !filterTheme || a.themes.includes(filterTheme);
    const matchesYear = !filterYear || getYear(a.date) === filterYear;
    return matchesTheme && matchesYear;
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
