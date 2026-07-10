import React from "react";
import PageLayout from "../components/PageLayout";
import { HashLink } from 'react-router-hash-link';

const CrochetComputer = () => (
    <PageLayout>
        <div className="yellow">
            <h1>Crochet Computer</h1>
            <p></p>
        </div>
        
        <h2>Objective</h2>
        <p>I am making an idol of a computer through the textile techniques of knitting, crocheting, and sewing. This is the documentation of said journey.</p>
        
        <h2>Purposes</h2>
        <ul>
            <li>to teach myself about the components inside a computer</li>
            <li>to practice my textile skills and challenge them through blending multiple forms together</li>
            <li>to make a statement on the origins of computers in textiles and as women's work</li>
            <li>to create a visual and tactile representation of a computer that I can one day use to teach my children</li>
            <li>to entertain you along the journey and role model the creation process</li>
        </ul>

        <h2>Context/History</h2>
        <p>Read my blog post about the textilic history of computers in <a href="/#/Blog_WWWW">my blog post 'the loom walked so computers could run'</a>. Esentially, the first computers were based off of the Jacquard loom and its punch card system of repeating patterns. Furthermore, the word 'computer' used to refer to a woman making computations; and what is textiles if not tangible mathematics? You can also read more about in <a href="/#/Blog_WITC">my other blog post 'Where's that Computer?'</a>.</p>

    
        <h2 className="yellow">Creative Log</h2>

        <hr />
        <h3>25 June 2026 - Motherboard base complete</h3>
        <p>
            What I found challenging was holding the right tension when casting on (maintaing the tension across the first row). After that, the knitting built up easily and was very enjoyable to do alongside watchnig/listening to other media. I really appreciated <a href="https://www.youtube.com/playlist?list=PLSZARCc5KSoRQGQY3LfbBgkxXsZEq2r2_">Sheep & Stich's Youtube Tutorials</a> for guiding me through the basic techniques, including casting off. I measured this roughly off of the laptop I am typing this on and attempted to keep the ratios relatively consistent. This is 40 stiches wide and ~60 rows tall. I haven't 'blocked' it yet - that's the next adventure!
            <br /><br />
            <img src="/images/ccmotherboardbase.jpg" alt="Crochet Computer Motherboard" style={{ width: "400px"}} />
        </p>

        <hr />
        <h3>05 June 2026 - Materials acquired</h3>
        <p>
            Gathering the materials has been great fun. What surprised me about this process was the love I felt, building on the connections with my family and with my local community. I have been gifted materials and in-progress projects; I have bartered on Facebook marketplace; and I have sniffed out clearance sales which took me to a new neck of the woods. This photo was taken after one such succesful sourcing mission, and you can see the joy on my face. It was like this hidden world had opened up to me - that now I had the basics of the language to be able to meaningfully navigate and appreciate this world. It was a joy.
            <br /><br />
            <img src="/images/ccwool.jpg" alt="Crochet Computer Wool" style={{ width: "200px"}} />
        </p>

        <hr />
        <h3>23 May 2026 - Idea on paper</h3>
        <p>
            Inspired by <a href="https://youtu.be/aumh4oknVuM?si=pdFCbcln1NEWqxq0">Cyberdecks</a> and <a href="https://www.instagram.com/reels/DFsuAPrT7bL/">MoodyJuiceCrochet</a>, the idea sparks alight. I know that it will be a long project and I am excited to document it for all of us. I start with <a href="https://youtu.be/YxcTBB6_bws?si=oWIQgFTvgf8p3tYn">understanding the core components</a>. Then I sketch their respective ports on the motherboard. I colour coded based on <a href="https://annas-abode.net/">The Estate framework I developed prior.</a>
            <br /><br />
            <img src="/images/ccsketch.jpg" alt="Crochet Computer Sketch" style={{ width: "400px"}}/>
        </p>

        <hr />
        <p></p>
        
    </PageLayout>
);

export default CrochetComputer;
