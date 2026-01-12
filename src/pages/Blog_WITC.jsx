import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const WITC = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="pink">"Where's that Computer?"</h1>
                <h2>"She's right behind you" - Hidden Figures (2016)</h2>
                <h4>01 November 2025 | feminism, technology, colophon</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <p>This dialogue paraphrased from Hidden Figures (2016) demonstrates my thesis: women have been involved in technology for as long as it has existed, and yet they are routinely forgotten, ignored, replaced, or written out of the story. No longer.</p>
            <h2>Hi! I'm Annabelle Grace McKenzie.</h2>
            <p>And I write for humans and <code>computers</code>. I’m an Australian, Gen Z, IT professional who cares about our relationships with technology. 👩‍💻</p>
            <img src="/images/profile.png" style={{maxWidth: "300px"}} />
            <p>While 99% of Australians use technology and access the internet <a href="https://www.acma.gov.au/sites/default/files/2024-12/How%20we%20use%20the%20internet%20-%20Executive%20summary%20and%20key%20findings.pdf">(ACMA.gov, 2024)</a>, women represent just 1/3 of the workforce supporting this industry <a href="https://www.wgea.gov.au/Data-Explorer/Industry">(WGEA.gov, 2024)</a>. The tools, skills, relationships, and imaginations we need to build a freer world for all, simply cannot come from just one group of people. This is education and call-to-action.</p>
            <p>Working as a software engineer means I see the ins and outs of digital systems; and I have the power to change them.<br />Living as a woman means I see a world in desperate need of different systems; and I am part of building them.</p>
            <p>This blog has never, and will never, contain artificially generated or modified content. My fingerprints are on every word (so your eyes should be too!) Welcome. ✍️</p>
            
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default WITC;
