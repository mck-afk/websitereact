import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const BYDH = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="green">build your own digital home</h1>
                <h2>heal your relationship to the digital world</h2>
                <h4>25 September 2025 | internet, technology, homemaking</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>

        <h2>social media is your front yard</h2>
        <p>
            A place for entertaining, collaborating, and connecting with friends, family, community, and neighbourhoods. A place to share ideas and be inspired.
            <br />And, its nature of existing in a public space whilst being moderated by a private corporation, subjects it to certain rules, expectations, and compromises.
            
            <br />Some of them benign, like wanting to change the background colour or post a video that is more than 3 minutes long (idk they are always changing the accepted length of videos).
            Some compromises benefit them more than you; like the fact that <a href="https://www.facebook.com/privacy/genai/">Meta assumes consent to using your content to train their AI</a> (without financial compensation of course).

            Can it really be home when Big Brother is always watching?
        </p>

        <h2>digitising the homemaker instinct</h2>
        <p>
            Humans build homes. It is all we know how to do.
            <br />
            Nourished by our Mothers' generosity, we built our first home - our bodies. 
            
            Then we arrived into the world, and met our instinct for shelter and comfort.
            
            We grew and learned the skills for building, seeking, tending to, improving, and maintaining our shelters and our homes. 

            Why should our digital homes be any different?
            <br />
            Everything we need to build our digital homes is available for free, right now, in
            <a href="https://uploads.html.green/files/zine-2024-08.pdf">so</a> 
            <a href="https://veryinteractive.net/pdfs/metaphors-html-css-js.pdf">so</a> 
            <a href="https://www.w3schools.com/html/">so</a> many places, championed by 
            <a href="https://petrapixel.neocities.org/">so</a> 
            <a href="https://discourse.32bit.cafe/">so</a> 
            <a href="https://maxbo.me/html-in-hyde/index.html">so</a> many people.

            Maybe the next time you reach for your comfort technology product (social media, video games, favourite movie), consider how it satisfies (or stimulates?) your homemaking instincts.
        </p>
        
        <h2>weird and wacky and wonderful</h2>
        <p>
            Growing up alongside the Internet, I am nostalgic for earlier days:
            when the Tumblr gifsets were always handmade and frequently broken,
            when <a href="https://www.numuki.com/game/barbie-s-game-room/">Barbie's Game Room</a> was my homepage,
            when flash games would reset all your progress because you closed the tab.

            <br />I remember the flow-like state of digging through curious links, and then the eye-widening, cheek-heatening joy of finding another digital place that is just my kind of weird and wacky and wonderful.

            <br />I want that magic accessible for my children.
            <br />Which is why I made <a href="https://annas-abode.net/">Anna's Abode</a>, and why I wrote this.
        </p>
        
        <h2>questions for fellow cybercitizens</h2>
        <p>
            What is your relationship to being a digital citizen?
            <br />What would you like to see more of in this digital world?
            <br />Which of your responsibilities improve this digital world?
            <br />Where is your digital home? Where can I connect with you?
            <br />Your digital footprint leads to...?
        </p>
        <div className="red" style={{ paddingBottom: "5px" }}>
            <h1>thank you for reading</h1>
            <button className="red" onClick={() => navigate(-1)}>one more?</button>
        </div>
    

    </PageLayout>
    );
}

export default BYDH;
