import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const TRMR = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="blue">Tumblr Mother</h1>
                <h2>bringing back mummy blogging</h2>
                <h4>10 February 2026 | internet, mother, health</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <h2>Users of Tumblr during its peak will soon be entering, or have already entered, Motherhood.</h2>
            
            <p>
                <img src="images/tumblr.png" style={{ width: "600px" }} />
                <a href="https://medium.com/hackernoon/tumblr-is-tumbling-d6deb3bb831e">Source</a> | <a href="https://www.tumblr.com/unwrapping/93716151897/age-demographics-tumblr">Source</a>
            </p>
            
            <h2>if you recognise this image you may have increased risk of osteoporosis</h2>
            <p>
                <img src="https://64.media.tumblr.com/f3e9641d017c09807cec4551aaff036f/tumblr_inline_p6mjwiePKI1rnzqup_1280.pnj" style={{ width: "600px" }} />
                <a href="https://www.tumblr.com/sreegs/680347271262519296/chantrymouse-cishetsbeingcishet">Source</a>
            </p>
            
            <p></p>
            <p>If you've experienced <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5675561/">disorded eating or undernutrition</a> (particularly <a href="https://www.acute.org/resources/osteoporosis-osteopenia-eating-disorders">anorexia</a>), the strength and resiliency of your bones (bone mineral density) could be impacted when you <a href="https://pubmed.ncbi.nlm.nih.gov/12014704/">get pregnant</a> and again when you enter <a href="https://hub.menopause.org.au/Play?pId=5fc0cc92-bf79-45b4-9e1b-bad46bd439f0">menopause</a>.</p>
            
            <h2>the life and history of annabelle's social media relationships</h2>
            <p>I joined social media through an anonymous Tumblr account in my early teens, which I used as my primary social media platform for many years. In retrospect, I primarily used social media for exploration - of ideas, aesthetics, worldviews, lifestyles - of anything that I wouldn't have thought to Google.</p>
            <p>I consciously joined social media with my name and face on Instagram in 2020, and experienced a great surge of vitality, creativity, and community through the COVID-19 lockdowns and into the end of 2023. Reflecting now, the highlight of this time was the exponetional growth in sample size of motherhood. I hadn't had this interest during my time on Tumblr, which I still find interesting. I enjoyed connecting with mothers across geographies, backgrounds, value systems, and socioeconomic statuses. And I was grateful for the breadth in persepctive.</p>
            <p>I have severely reduced my social media usage since tradwives trended (2024), and while I know that kind of content continues outside of my feed, it represents a full-circle moment to my experience on social media. And, with the rise of AI-generated content, I'm at peace taking my attention elsewhere.</p>
            <p>I'm not really sure why I'm writing this, but I do know that writing it is helping me process my grief around the enshittification of social media. The costs of using social media for my exploration have become too high, and I am sad. I miss the creativity I experienced on Tumblr - where everyone felt safe to post their art no matter how shitty or obscure. I miss the enthusisasm I experienced on Instagram - where mothers were building homes and families and businesses and communities and bringing us along for the raw adventure. And... I know that every ending is also a beginning.</p>
            
            <h2>So former Tumblr users, soon to become Mothers - in which <a href="https://www.ystrickler.com/the-dark-forest-theory-of-the-internet/">Dark Forest</a> are we gathering?</h2>
            <p>I am <i>starving</i> for our half-baked thoughts, rage-fuelled rants, sobering realisations, and harrowing insights. I am <i>yearning</i> for <i>shitty</i> art made with love and madness and purpose and shared with freedom and vigor and abandon.</p>
            
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default TRMR;
