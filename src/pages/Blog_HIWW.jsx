import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import PostItNote from "../components/PostItNote";

const HIWW = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="pink">History is Written by the Writers</h1>
                <h2>so write</h2>
                <h4>13 July 2026 | literature, technology, literacy</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <div className="noticeboardBackground" style={{ padding: "2rem", marginBottom: "2rem" }}>
            <PostItNote 
            id="noteWWWWFZ"
            className="note pink"
            title="It turns out history isn't written by the winners; history is written by the people who write histories."
            lastUpdated="">
                
                <cite className="actions"><a href="https://yourbookstore.io/p/inventing-the-renaissance-myths-of-a-golden-age-3141011">Inventing the Renaissance: The Myth of a <br />Golden Age by Ada Palmer (2025)</a></cite>
            </PostItNote>
            
            <PostItNote 
            id="noteWWWWFZ"
            className="note pink"
            title="Indeed, no woman writer can write 'too much'... No woman has ever written enough."
            lastUpdated="">
                
                <cite className="actions"><a href="https://yourbookstore.io/p/remembered-rapture-the-writer-at-work">Remembered Rapture: The Writer At Work <br /> by bell hooks (1999)</a></cite>
            </PostItNote>
            
            </div>
                
                
                <h2>Define Literacy</h2>
                <p><a href="https://en.wikipedia.org/wiki/Literacy">Wikipedia defines Literacy as "the ability to read and write"</a>. and while true, this definition is afflicted by <a href="https://en.wikipedia.org/wiki/Synecdoche">synecdoche</a> (using a part of something to refer to its whole), given that we use the terms "financial literacy", "digital literacy" and one of my personal favourites, <a href="/#/femalebodyliteracy">"Body Literacy"</a> to refer to a certain proficiency with a specific skillset. Thus I would like to offer my refined definition of Literacy, to be used until we find or create another word for it.</p>
                <p>Literacy is the ability to 1) understand 2) interpret your understanding and 3) respond to that interpretation with dexterity to achieve the desired outcome. Literacy is the spectrum of proficiency with this process. To be literate is to have reached a threshold of proficiency with this skillset; most often recognised through your successful navigation of the world through your literacy. <br />This definition encapsulates the broad range of specialised skills of navigating 21st century life, including financial literacy and digital literacy. Given this redefinition, what was previously defined as "the ability to read and write", I propose to be tethered to 'Language Literacy'. I think where we get confused, or rather why this hasn't been a big enough issue for us to deal with it before this, is that Language Literacy is such a foundational skill to many other types of Literacy, that synecdoching is acceptable because it remains technically correct.</p>

                <blockquote className="note pink">
                    <h2>Literacy =</h2>
                    <p style={{ fontSize: "larger" }}>The ability to understand, interpret, and respond to achieve an outcome</p>
                    
                    <hr />
                    <h2>Language Literacy =</h2>
                    <p style={{ fontSize: "larger" }}>The ability to read (understand & interpret) and write (respond)</p>
                </blockquote>
                
                <h2>On using AI to help write</h2>
                <p>I highly recommend exploring <a href="https://abiawomosu.substack.com/p/start-here">Abi Awomosu's work on "How Not To Use AI"</a>. She explores the nuances of the relationships we have to build with AI - what's enough, why is it enough, when is enough.</p>

                <PostItNote 
                id="noteWWWWFZ"
                className="note pink"
                title="Come write a book. You need to tell your story. Even if you're not good at writing. You need to tell your story."
                lastUpdated="">
                    
                    <cite className="actions"><a href="https://www.instagram.com/reel/DaoFb_aj7c3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">White Supremacy and Critical Analysis <br />Instagram Reel by LizTheDeveloper (2026)</a></cite>
                </PostItNote>

                <h2>if you don't write, it will be written for you</h2>
                <p>Adapted from the saying "if you don't decide, it will be decided for you" which i've heard in discussions relating to major life decisions–including prenups, funeral rites, next of kin, and estate arrangements.</p>

                <PostItNote 
                id="noteWWWWFZ"
                className="note pink"
                title="Language was also one of the first technologies; it was the first code."
                lastUpdated="">
                    
                    <cite className="actions"><a href="https://youtu.be/ZDrIMv-irD8?si=VThsEPi4KiHSwuTx&t=90">They Got Automation Backwards: Why the Bro Code Will Never Beat Nature’s Code by Abi Awomosu (2026)</a></cite>
                </PostItNote>
                <h2>The technology of words (and language literacy) let us describe and shape the worlds between us</h2>
                <h3>Contemplations for exploring your relationship to Language Literacy:</h3>
                <p>How do you know how to read?
                    <br />Who specifically can you remember encouraging you to read/write/spell/speak/interact with words?
                    <br />What was the last word you had to look up the definition of?
                    <br />How did you remember that word/definition pair? What did/does it mean to you?
                </p>

                <blockquote className="note pink">
                    <p style={{ fontSize: "larger" }}>
                        "I picked up a pen, I wrote my own deliverance."
                    </p>
                    <cite className="actions"><a href="https://youtu.be/ZDrIMv-irD8?si=VThsEPi4KiHSwuTx&t=90">Hurricane from Hamilton by Lin Manuel Miranda (2018)</a></cite>
                </blockquote>
                <blockquote className="note pink">
                    <p style={{ fontSize: "larger" }}>
                        "Rewrite these words... <br /><br /> And I confess... <br /><br />I confess I am a writer... <br /><br />With skewed ambitions... <br /><br />But holy visions..."
                    </p>
                    <cite className="actions"><a href="https://youtu.be/OSExvh7eGAY?si=8d9DmicO9lyJuM8n">Call My Name by Kinnship</a></cite>
                </blockquote>
                
                <h2>Journal as Worldbuilding</h2>
                <p>in <a href="https://youtu.be/5wFmQ9Td3Nk?si=0FjGzPugg_gtEPdH">Anna Howard's youtube video</a> she talks about the liberating power of journalling - the freedom from. having to distil her writing into a lesson or 'soundbite'. As someone who has been journaling for her whole adult life, I cannot recommend it enough.</p>
                <p>journal just to remind yourself that you exist beyond your life, beyond your thoughts, your relationships, your immediate bodily functions.
                    journal to remind your soul that its there; that there is a relationship between you and yourself. Journal to remember. Journal as a ritual of remembering and fortifying; as a <a href="#/Blog_ALCT">container for all the things you love that you don't know where else to put</a>.
                </p>
                <blockquote className="note pink">
                    <p style={{ fontSize: "larger" }}>
                        "If they can tell bullshit stories about about war, <br />I can tell bullshit stories about being cradled in the womb of the universe."
                    </p>
                    <cite className="actions"><a href="https://youtu.be/5wFmQ9Td3Nk?si=0FjGzPugg_gtEPdH">How Life Changes When You Stop Believing in the Hero Story by Anna Howard (2026)</a></cite>
                </blockquote>
                
                <h2>Personal Archiving</h2>
                <p>I write things down so they don't disappear when someone else takes the website down. I write things down so that the timeline of history is preserved through my eyes; not through their narratives. </p>
                <p>I consider myself a <a href="https://store.mollywhite.net/products/rogue-librarian-sticker-copy">rogue archivist</a>; especially when it comes to my own life. 'Rogue' in the sense that at any time I can change the rules of my recordkeeping - such that the system of my archiving is also a living organism, working alongside me in this pursuit. It can expand (when I feel really inspired) and contract (when life gets busy) and it's all part of the work.</p>

                <blockquote className="note pink">
                    <p style={{ fontSize: "larger" }}>
                        "The only thing that's left is the manuscript... <br /><br /> One last souvenir of my trip to your shores... <br /><br />Now and then I re-read the manuscript... <br /><br />But the story isn't mine anymore..."
                    </p>
                    <cite className="actions"><a href="https://www.youtube.com/watch?v=iY6Qhlua8Zw">The Manuscript by Taylor Swift</a></cite>
                </blockquote>

                <p>Keeping a personal archive is also about <b>reclaiming what is valuable and important to you</b>. The documentation of facts alone is not free of the writers' bias - for whatever is written down will be biased by virtue of having been noted down. Your perspective, your vision, your taste as you move through this world is valuable.</p>

                <blockquote className="note pink">
                    <p style={{ fontSize: "larger" }}>
                        "Writing about [domestic struggles and joys] will make them more important."
                    </p>
                    <cite className="actions"><a href="https://youtu.be/5wFmQ9Td3Nk?si=0FjGzPugg_gtEPdH">Amy from Little Women <br /> by Greta Gerwig (2019)</a></cite>
                </blockquote>

                <h2>Enough consuming. Pick up your pen and regurgitate til you can breathe again.</h2>
                <p>You can do hard things. You have been doing it so far already.</p>

            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default HIWW;
