

import React from "react";
import { useNavigate } from "react-router-dom";
import PostItNote from "../components/PostItNote";
import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import StickerPeel from '../components/StickerPeel';

const Home = () => {
  const navigate = useNavigate();

  const [moveDown, setMoveDown] = React.useState(false);

  React.useEffect(() => {
    if (moveDown) {
      setTimeout(() => navigate("/weblog"), 600);
    }
  }, [moveDown, navigate]);

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
            <span style={{ fontWeight: "bold" }}> now: </span>
            rewriting this in React
          </p>
        </PostItNote>

        <motion.div
          initial={{ y: -50 }}
          animate={moveDown ? { y: 25 } : { y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ cursor: "pointer", margin: "auto"}}
          whileHover={{ rotate: -5 }}
          onClick={() => setMoveDown(true)}
        >
          <PostItNote
            id="noteWEBLOG"
            className="note red right"
            onClick={() => navigate("/weblog")}
            style={{ cursor: "pointer" }}
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
          initial={{ y: -20 }}
          animate={moveDown ? { y: 25 } : { y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: "pointer", margin: "auto" }}
          whileHover={{ rotate: 5 }}
          onClick={() => setMoveDown(true)}
        >
        <PostItNote
          id="noteINTERNET"
          className="note blue left"
          onClick={() => navigate("/internet")}
          style={{ cursor: "pointer" }}
          title="InterNet"
        >
          <p>
            treasured connections and digital reciprocations 🔗 <br /><br />links to 📖 books, newsletters, communities, 📰 articles, media, movements, people, and other cool things I think you should explore 🖇️
          </p>
        </PostItNote>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={moveDown ? { y: 25 } : { y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ cursor: "pointer", margin: "auto" }}
          whileHover={{ rotate: 5 }}
          onClick={() => setMoveDown(true)}
        >
        <PostItNote
          id="noteFBL"
          className="note yellow right"
          onClick={() => navigate("/femalebodyliteracy")}
          style={{ cursor: "pointer" }}
          title="Female Body Literacy"
        >
          <p>
            for ALL audiences<br /><br />A fun, accessible, deep-dive workshop that explores and strengthens the skills of interpreting and responding to the Female Body, as it moves through a lifetime 🩸
          </p>
        </PostItNote>
        </motion.div>

        <motion.div
          initial={{ y: -60 }}
          animate={moveDown ? { y: 25 } : { y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ cursor: "pointer", margin: "auto" }}
          whileHover={{ rotate: 5 }}
          onClick={() => setMoveDown(true)}
        >
        <PostItNote
          id="noteASTROPROGRAM"
          className="note orange left"
          onClick={() => navigate("/astroprogram")}
          style={{ cursor: "pointer" }}
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

        <motion.div
          initial={{ y: -40 }}
          animate={moveDown ? { y: 25 } : { y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ cursor: "pointer", margin: "auto" }}
          whileHover={{ rotate: 5 }}
          onClick={() => setMoveDown(true)}
        >
        <PostItNote
          id="noteABODE"
          className="note green right"
          onClick={() => navigate("https://annas-abode.net/")}
          style={{ cursor: "pointer" }}
          title="Anna's Abode"
        >
          <p>
            a framework for organising and exploring areas of life and creation 🎨
            <br /><br />affectionately known <br /> as the honeycomb home <br /> of my creations ⬡
          </p>
        </PostItNote>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={moveDown ? { y: 25 } : { y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ cursor: "pointer", margin: "auto" }}
          whileHover={{ rotate: 5 }}
          onClick={() => setMoveDown(true)}
        >
        <PostItNote
          id="noteCONTACT"
          className="note purple left"
          onClick={() => navigate("/contact")}
          style={{ cursor: "pointer" }}
          title="Contact"
        >
          <p>
            let's chat! 📞<br /><br /> let's grab coffee! ☕️ <br /><br /> let's go to the market! 🧺 <br /><br /> let's grab a sweet treat!  🍰
          </p>
        </PostItNote>
        </motion.div>
      </div>

    </PageLayout>
  );
};

export default Home;
