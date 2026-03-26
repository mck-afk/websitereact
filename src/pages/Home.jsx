
import React, { useContext } from "react";
import { NoteNavContext } from "../providers/NoteNavProvider";
import PostItNote from "../components/PostItNote";
import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip'

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
          lastUpdated="17/03/2026"
        >
          <p>seeing the <span id="seeme" style={{ textDecoration: 'underline', color: '#0000EE'}}>technology</span> in front of me</p>
          <Tooltip anchorSelect="#seeme" place="bottom" style={{ width: '250px', textAlign: 'center'}}>a medium for interpreting and interacting with the world... computers, internet, literacy, home, bodies, astrology, woman</Tooltip>
          <p>
            📍 Melbourne/Naarm, Australia
            <br /> 📚 reader of {" "} <a href="#/InterNet">literature</a> & <a href="#/TechNewsSynth">critiques</a>
            <br /> ✍️ writer for <a href="#/weblog">humans</a> & {" "} <a href="https://github.com/mck-afk">computers</a>
            <br /><i>all opinions are my own</i>
          </p>
          <p>
            <img className="icon" src="https://img.icons8.com/?size=100&id=W77GEN8wSCBv&format=png&color=000000" alt="now" />
            <span style={{ fontWeight: "bold"}}> now: </span>
            thinking critically and hopefully
          </p>
        </PostItNote>


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
          lastUpdated="17/03/2026"
        >
          <p>
            treasured connections and digital reciprocations 🔗 <br /><br />links to 📖 books, newsletters, communities, articles, media, movements, people, and other cool things I think you should explore
          </p>
          <p style={{ textAlign: "right" }} ><br /><img src="https://blob.gifcities.org/gifcities/RYZXTD3B7A23HN45HI47DKN2EV5D465M.gif" /></p>
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
          title="Feminine Literacy"
          lastUpdated="17/03/2026"
        >
          <p>
            resources for:
            <br /><br />- exploring the female experience
            <br />- interpreting the signals of the body
            <br />- appreciating 🌻
            <br /><br />
          </p>
        </PostItNote>
        </motion.div>

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
            lastUpdated="19/02/2026"
          >
            <p>
              <a href="https://en.wikipedia.org/wiki/Blog">web log</a> is an athenaeum
              of contemplations, investigations, & imaginations ✍️
              <br /><br />topics include: internet, technology, capitalism, literacy, writing, homemaking, girl, woman, mother, other
            </p>
            <p style={{ display: "none", textAlign: "right" }} ><br /><br /><img src="https://blob.gifcities.org/gifcities/LKDMD44G2M5KCZDNP3CB3C6XT46F7N2V.gif" /></p>
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
          lastUpdated="14/02/2026" 
        >
            <p>writing the history I see 👩‍💻</p>
            <p>a collection of links to news, opinions pieces, and synthesis of technology including artificial intelligence, cool projects and passions, and other analysis 🌐</p>
            <p style={{ display: "none", textAlign: "right" }} ><br /><br /><img src="https://blob.gifcities.org/gifcities/TI6F4JDECJ2M6SOECHH57FR7HPKI3WM3.gif" /></p>
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
          className="note purple right"
          title="Astrology for Programmers"
          lastUpdated="03/01/2026"
        >
          <p>
            ✧☊ <img src="https://blob.gifcities.org/gifcities/QOJGTLUK7YFKP26LSJJOTPNGSWKXT67C.gif" />  &gt; |
            <br />
            <br />to interpret (and manipulate) patterns, through the application of rules/calculations, we start with learning the basics of the language
            <br /><br />hear me out
          </p>
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
          className="note green left"
          title="Anna's Abode"
          lastUpdated="14/09/2025"
        >
          <p>
            a honeycomb home ⬡ <br /> <br /> organising and exploring areas of life and creation 🎨
            
          </p>
          
        </PostItNote>
        </motion.div>

        
      </div>

    </PageLayout>
  );
};

export default Home;
