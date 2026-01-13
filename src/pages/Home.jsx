
import React, { useContext } from "react";
import { NoteNavContext } from "../providers/NoteNavProvider";
import PostItNote from "../components/PostItNote";
import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";

const Home = () => {
  const { movingNoteId, handleNoteClick } = useContext(NoteNavContext);

  return (
    <PageLayout>
      <div id="noticeboard">
        <img
          src="/images/profile.png"
          alt="Profile Picture"
          style={{ width: 350, height: 350, paddingBottom: 10, margin: "auto" }}
        />
    
        <PostItNote
          id="noteABOUT"
          className="note pink"
          title="annabelle grace mckenzie"
        >
          <p>
            📍 Melbourne/Naarm
            <br /> 📚 reader of {" "}
            <a href="/InterNet">literature & critiques</a>
            <br /> ✍️ writer for <a href="/weblog">humans</a> & {" "}
            <a href="https://github.com/mck-afk">computers</a>
            <br />
            <a href="https://bsky.app/profile/annabellemckenzie.bsky.social">
              <img className="icon" src="/images/blsky.png" alt="bluesky" /> active
            </a>
            <br />
            <a href="https://www.instagram.com/annabellegracemckenzie/">
              <img className="icon" src="/images/insta.png" alt="instagram" /> archive
            </a>
          </p>
          <p>
            <img className="icon" src="https://img.icons8.com/?size=100&id=W77GEN8wSCBv&format=png&color=000000" alt="now" />
            <span style={{ fontWeight: "bold"}}> now: </span>
            researching AI governance in Australia & <a className="orange" href="https://annabelle-grace-mckenzie.com/TechNewsSynth">documenting said learnings</a>
          </p>
        </PostItNote>

        <motion.div
          initial={{ x: 0, y: -50 }}
          animate={movingNoteId === "noteWEBLOG" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteWEBLOG", "/weblog")}
        >
          <PostItNote
            id="noteWEBLOG"
            className="note red right"
            title="Blog"
          >
            <p>
              my <a href="https://en.wikipedia.org/wiki/Blog">web log</a> is an athenaeum
              of contemplations, investigations, & imaginations ✍️
              <br /><br />topics include: art, technology, literacy, writing, home, girl, woman, mother, other
            </p>
          </PostItNote>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: -50 }}
          animate={movingNoteId === "noteINTERNET" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteINTERNET", "/InterNet")}
        >
        <PostItNote
          id="noteINTERNET"
          className="note blue left"
          title="InterNet"
        >
          <p>
            treasured connections and digital reciprocations 🔗 <br /><br />links to 📖 books, newsletters, communities, articles, media, movements, people, and other cool things I think you should explore 🖇️
          </p>
        </PostItNote>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={movingNoteId === "noteFBL" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteFBL", "/femalebodyliteracy")}
        >
        <PostItNote
          id="noteFBL"
          className="note yellow right"
          title="Female Body Literacy"
        >
          <p>
            for ALL audiences<br /><br />A fun, accessible, deep-dive workshop that explores and strengthens the skills of interpreting and responding to the Female Body, as it moves through a lifetime 🩸
          </p>
        </PostItNote>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={movingNoteId === "noteTechNewsSynth" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteTechNewsSynth", "/TechNewsSynth")}
        >
        <PostItNote
          id="noteTechNewsSynth"
          className="note orange left"
          title="TechNews Synthesis"
        >
            <p>writing the history I see 👩‍💻</p>
            <p>a collection of links to news, opinions pieces, and synthesis of technology including artificial intelligence, cool projects and passions, and books of other analyses 🌐</p>
        </PostItNote>
        </motion.div> 
        <motion.div
          initial={{ y: -40 }}
          animate={movingNoteId === "noteABODE" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteABODE", "https://annas-abode.net/", true)}
        >
        <PostItNote
          id="noteABODE"
          className="note green right"
          title="Anna's Abode"
        >
          <p>
            a framework for organising and exploring areas of life and creation 🎨
            <br /><br />affectionately known <br /> as honeycomb home ⬡
          </p>
        </PostItNote>
        </motion.div>

        <motion.div
          initial={{ y: -60 }}
          animate={movingNoteId === "noteASTROPROGRAM" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteASTROPROGRAM", "/astroprogram")}
        >
        <PostItNote
          id="noteASTROPROGRAM"
          className="note purple left"
          title="Astrology for Programmers"
        >
          <p>
            👽 + 🤖 = 💞
            <br />
            <br />to interpret (and manipulate) patterns, through the application of rules/calculations, start with the basics of the language
            <br /><br />hear me out
          </p>
        </PostItNote>
        </motion.div>
        
      </div>

    </PageLayout>
  );
};

export default Home;
