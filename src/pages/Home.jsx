
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
      <div className="noticeboardBackground">
        <img
          src="/images/profile_pinned.png"
          alt="Profile Picture"
          style={{ width: 350, height: 350, paddingBottom: 10, margin: "auto" }}
        />
        
    
        <PostItNote
          id="noteABOUT"
          className="note pink"
          title="annabelle grace mckenzie"
          lastUpdated="27/06/2026"
        >
          <p>relating with the <span id="seeme" style={{ textDecoration: 'underline', color: '#0000EE'}}>technology</span> in front of me 👩‍💻<br /></p>
          <Tooltip anchorSelect="#seeme" place="bottom" style={{ width: '250px', textAlign: 'center'}}>a medium for interpreting and interacting with the world... computers, internet, literacy, home, bodies, astrology, woman</Tooltip>
          <p>
            📍 Melbourne/Naarm, Australia
            <br /> 📖 reader of {" "} <a href="#/InterNet">literature</a> & <a href="#/InterNet">critiques</a>
            <br /> ✍️ writer for <a href="#/weblog">humans</a> & {" "} <a href="https://github.com/mck-afk">computers</a>
            <br /> 🪡 crafter in the {" "} <a href="#/CrochetComputer">physical</a> & <a href="https://annas-abode.net/">digital</a> 
          </p>
          <p><i>all opinions are my own</i></p>
          <p style={{ display: "none" }} >
            <img className="icon" src="https://img.icons8.com/?size=100&id=W77GEN8wSCBv&format=png&color=000000" alt="now" />
            <span style={{ fontWeight: "bold"}}> now: </span>
            voracious for vitality
          </p>
        </PostItNote>


        <motion.div
          initial={{ y: -20 }}
          animate={movingNoteId === "noteTechNewsSynth" ? { x: typeof window !== 'undefined' ? window.innerWidth : 900, y: 600 } : { x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto", zIndex: 1000, position: "relative" }}
          whileHover={{ rotate: -5 }}
          onClick={() => handleNoteClick("noteTechNewsSynth", "/CrochetComputer")}
        >
        <PostItNote
          id="noteTechNewsSynth"
          className="note yellow right"
          title="Crochet Computer"
          lastUpdated="27/06/2026" 
        >
            
            <p>the making of an idol of a computer through the textile techniques of knitting, crocheting, and sewing</p>
            <img style={{ width: "60px" }} src="https://media.baamboozle.com/uploads/images/388680/1625161883_71705_gif-url.gif"/>
            <p>follow along on my journey</p>

            <p style={{ textAlign: "right" }} ><img src="https://blob.gifcities.org/gifcities/LKDMD44G2M5KCZDNP3CB3C6XT46F7N2V.gif" /></p>
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
            className="note red left"
            title="WebLog aka Blog"
            lastUpdated="08/06/2026"
          >
            <p>an athenaeum at the itnersection of introspection, investigation, & imagination ✍️
              <br />
              <img src="https://blob.gifcities.org/gifcities/4W6TLA2HJNPFMAEBAOY32MTYHCDONYNU.gif" />
              <br />
              topics include: internet, technology, literacy, capitalism, writing, homemaking, girl, woman, mother, other
              <img src="/images/blinking_caret.gif" style={{width: "8px", height: "18px"}}/>
            </p>

            
            <p style={{  textAlign: "right" }} ><img src="https://blob.gifcities.org/gifcities/LKDMD44G2M5KCZDNP3CB3C6XT46F7N2V.gif" /></p>
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
          className="note blue right"
          title="InterNet"
          lastUpdated="15/05/2026"
        >
          <p>
            collections of links 🔗 <br /><br /><img src="https://blob.gifcities.org/gifcities/PJF3QGAT3JERTMI45BITUCH4BE76NC5Z.gif"/><br /><br /> to books, newsletters, communities, worlds, articles, recipes, media, movements, people, crafts, and other cool things to explore 
            
          </p>
          <p style={{ display: "none", textAlign: "right" }} ><img src="https://blob.gifcities.org/gifcities/RYZXTD3B7A23HN45HI47DKN2EV5D465M.gif" /></p>
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
          className="note orange left"
          title="Body Literacy"
          lastUpdated="15/05/2026"
        >
          <p>
            
            resources for everyone to:
            <br /><br />
            <img src="https://blob.gifcities.org/gifcities/6IOS74JAJCZEDHQAT65WI3QOHDLCSPVI.gif" />
            <br /><br />- explore the female/male bodied experience
            <br />- engineer purpose into those experiences, and
            <br />- interpret the signals of the female body for reproductive empowerment
            
          </p>
          <p style={{ display: "none", textAlign: "right" }} ><br /><img src="https://blob.gifcities.org/gifcities/TI6F4JDECJ2M6SOECHH57FR7HPKI3WM3.gif" /></p>
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
            a framework for organising and exploring areas of life and creation<br /> <br />
            <table className="hiddenTable">
              <tr>
                <td className="hiddenTable"></td>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                <td className="hiddenTable"></td>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                <td className="hiddenTable"></td>
              </tr>
              <tr>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                <td className="hiddenTable"></td>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                <td className="hiddenTable"></td>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
              </tr>
              <tr>
                <td className="hiddenTable"></td>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                <td className="hiddenTable"></td>
                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                <td className="hiddenTable"></td>
              </tr>
            </table>
            <br />
            a honeycomb home ⬡ 
          </p>
          
        </PostItNote>
        </motion.div>

        
      </div>

    </PageLayout>
  );
};

export default Home;
