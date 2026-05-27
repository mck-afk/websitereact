import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const SPMA = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="yellow">imagination fight</h1>
                <h2>the normalisation of media consumption trains acceptance of disjointed narratives of reality</h2>
                <h4>27 May 2026 | technology, capitalism, mother</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>

            <h2>The title is twofold:</h2>
            <ol>
                <li>the fight over today's reality - "the war is over", "we will not rest", "the war will be over", "you haven't seen nothing yet"</li>
                <li>the fight over tomorrow's reality - how can we build a better, kinder, fairer world without collectively imagining it?</li>
            </ol>
            <p>You've been fighting your whole life. They've been training you to <a href="https://www.instagram.com/reel/DYSfin3R-xj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">colonise your culture</a>; commodify your connections; and consume your way to catharsis (psychosis). I promise you there is more to this world and our human experience than this.</p>

            <h2>Fiction as liberation</h2>
            <p>With the literacy we all take for granted, we can explore different perspectives and experiences, enrich our empathy, and <a href="https://wordsfortheyear.com/2020/03/23/why-bother-by-sean-thomas-dougherty/">grow beyond the harm done to us.</a> Fiction has the power to reshape our reality. And, with great power comes great responsibility.</p>

            <h2>Fiction as ammunition</h2>
            <p>Today, the fragmentation of our attention is not merely just to keep us addicted to apps that harvest our data - but also to prime us to accept sudden shifts in reality. In the book 1984, Big Brother has an entire workforce dedicated to editing the archives and historical records, such that what is announced as true today must have always been so. Another aspect of this is the concept of Doublethink: whereby you train yourself to simultaneously believe and not believe something, such that once the evidence is presented either way, you can selectively forget that it was ever not that way.</p>
            <p>I've noticed that my sense of self be influenced the more fiction I consume in a short time period. Almost as if my brain cannot tell the difference between the fiction and the real world - sometimes embodying certain beliefs, character traits, or mannerisms. It's easy enough to fob them off as fangirling behaviour and part of the meta-digestion meme-factory that every piece of content these days is subject to. But now that AI is holding the pen, what narratives will it craft for us?</p>
            <p>Furthermore, there have been <a href="https://www.quantamagazine.org/is-it-real-or-imagined-how-your-brain-tells-the-difference-20230524/">studies that the brain has difficulty distingushing the difference between fiction and reality</a>; such that your body responds as though the fiction is real. That's why <a href="https://hbr.org/2021/10/the-psychology-behind-why-we-love-or-hate-horror">horror</a> is a genre at all. And I wonder if through the exposure I've had, constantly hopping from one fictional timeline to another - am I attempting to create some psychic separation between my own life narrative, and the narratives I consume on a daily basis?</p>

            <h2>The Seam is the Umbilical Cord is the Pathway</h2>
            <p>Remembering where you came from - the sacrifices and resources and people and experiences that are embedded into you - is mapped into everything you do - the way you bleed, the way you practice beauty, the way you navigate chronic conditions, the way you react to care and accessibility. Every month, I  bleed, and am reminded that what exists around me today (crumbling as it is) has not always existed; and will soon be replaced. Every month, I bleed and remember my mother, and her mother, and their stories and life narratives that I am inextricably a part of and simultaneously a continuation of. I remember my thread in the cloth of humanity.</p>

            <h2>Self-mythologising as survival</h2>
            <p>To add onto this physical experience - why not indulge in the mental exercise of self-mythologising? May I suggest learning the backstory, the context that preceded you. The ancestors and their practices. The narratives they shared; the parables that guided their decisions. May I suggest fortifying yourself with the meanings of your names; the items of significance that you carry; the gifts that were embedded. May I suggest refusing to let your story be defined for you.</p>

            <h2>A disjointed narrative inquiry: that care can be an afterthought</h2>
            <p>What would our relationship to Work look like if the entire employed workforce had to spend one day a week in Care (eg. Childcare, Disability services, or Aged Care)? Every CEO, every Engineer, every Judge, every Financial Analyst and Consultant and Mcdonalds Server. Imagine the redistribution of energy. Imagine the tenderness with which we would treat everyone else we meet. Imagine your gifts integrated into your care work. Imagine laying down the burden of individualism.</p>

            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default SPMA;
