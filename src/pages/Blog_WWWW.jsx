import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const WWWW = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="green">the loom walked so computers could run</h1>
                <h2>world-wide word-weaving</h2>
                <h4>25 September 2025 | internet, technology, homemaking</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <h2>before written word there was cloth</h2>
            <p>Throughout history, humans across the globe have been weaving to keep their bodies warm and their information secure. A weave is made up of two parts: a Warp (longitudinal/vertical) and a Weft (lateral/horizontal).</p>
        
            <img/>
            <p><a href="https://en.wikipedia.org/wiki/Weaving">Source: Wikipedia</a></p>
            <p>
                When the weave is complete, the threads become greater than the sum of their parts—cloth. 
                They receive a new name and a new purpose as they transition from collection to composition. 
                Certain rituals and beliefs can assist with this transition, such as the <a href="https://www.navajorug.com/pages/deliberate-imperfection-you-bet">Navajo weavers who deliberately incorporate imperfections to honor the Gods, and in particular their teacher, Spiderwoman.</a>
            </p>
            
            <h2>to compose a computer</h2>
            <p>In <a href="https://en.wikipedia.org/wiki/Jacquard_machine">1804 the Jacquard Loom</a> was patented as an automated weaving solution because it used punch cards that <a href="https://www.youtube.com/watch?v=GS2IK0dSFZ4">dictated the state of the pin</a> (up/on/1 or down/off/0) to produce repeatable patterns and sequences. </p>

            <p>
                In the 1820’s, <a href="https://en.wikipedia.org/wiki/Charles_Babbage">“using a principle openly borrowed from the Jacquard loom”, Charles Babbage</a> invented the first mechanical computer that could perform calculations called the Difference Engine. The basic architecture was similar to that of a modern computer, in that it was a composition of on or off switches (1 or 0 respectively).
            </p>

            <p>
                During <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">1842-1843, Ada Lovelace became the first computer programmer</a>, translating from French into English Luigi Menabrea’s paper about Charles Babbage’s Analytical Engine, and <a href="https://www.fourmilab.ch/babbage/sketch.html">writing notes three times longer than the translation itself</a>, including a method for calculating a sequence of Bernoulli numbers.
            </p>
            <p>Babbage’s machines were not reproducible, so human computation remained best practice, and by 1943, most human computers were women.



“What’s the status of that computer?”
“She’s right behind you...”

Hidden Figures (2016) </p>

            <p>
                In the <a href="https://en.wikipedia.org/wiki/Apollo_Guidance_Computer">1960’s, as part of the Apollo 11 Space Mission</a>, weaving was the foundation of both compute and storage. <a href="https://www.sciencenews.org/article/core-memory-weavers-navajo-apollo-raytheon-computer-nasa">Navajo weavers were making NASA’s microchips in Shiprock</a>, whilst <a href="https://www.sciencenews.org/article/core-memory-weavers-navajo-apollo-raytheon-computer-nasa">“Little Old Lady” programmers were threading metal wires through tiny ferrite rings</a> to create <a href="https://en.wikipedia.org/wiki/Core_rope_memory">‘core rope memory’</a>.
            </p>

            <p><a href="https://archive.computerhistory.org/resources/access/text/2017/01/102770254-05-01-acc.pdf">Source: Fairchild Semiconductor</a></p>
            <p>
                The next major weaving-related technological innovation came in <a href="https://en.wikipedia.org/wiki/Tim_Berners-Lee">1990’s when Tim Berners-Lee invented the World Wide Web</a> with “the original idea... was that it should be a collaborative space where you can communicate through sharing information”. Irrevocably, the internet as we know it today was woven.
            </p>

            <h2>the rules of word-weaving</h2>
            <p>As our current scientific knowledge stands, what separates human languages from the languages of our mammal cousins is the structures of abstraction which enable us to communicate <a href="https://jeremylent.wordpress.com/2010/08/23/language-weaving-a-net-of-symbols/">counterfactual information</a>.

One of the simplest ways we can do this is through the structure of our sentences—the positioning of the words, within the weave of the sentence.

For example: 



“Imagine a red apple.”

Here we are communicating counterfactual information; this ‘red apple’ is not literally in front of us right now. 

But then: 



“Imagine a purple…”

Without a noun to for the adjective, this is not a full sentence. 
Without the information you were epxecting you’ve stumbled across the liminal space where the noun can be everything and nothing at once—<a href="https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat">Schrödinger’s</a> word.

In this incomplete word-weave, reality AND imagination are suspended for a moment.

This is what the internet feels like to me, and is what I mean when I say:</p>
<h2>we are suspended in the weave</h2>
<p>The internet is a self-referential web of relationally defined information. While most of our language has its origins in factual information (an apple, the colour purple), the internet by design contains within it the opportunity to use its self-referential features to create information ABOUT the information—also known as metadata.</p>
<p>There is an infinite amount of information we can add to a piece of information to add context, since the internet does not come with certain parameters that might be assumed in the physical world such as gravity or density. And because we don’t need to take a breath between sentences, we could ignore sentence syntax and simply keep adding an infinite amount of “and’s” onto a sentence and rely on the reader to make it make sense.</p>
<p>Like this blog for example. The sum of parts might seem messy to some and coherent to others. Maybe I’ve hidden syntactical rebellions to further demonstrate my points. Actually, it’s not a ‘maybe’—it’s a ‘definitely and deliberately’.

Just like the threads of a weave, each word within a sentence within a paragraph within a publication, contribute to the composition of the piece and more broadly its place in the internet.</p>


            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default WWWW;
