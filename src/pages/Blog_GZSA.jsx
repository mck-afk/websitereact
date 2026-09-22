import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const GZSA = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="purple">Why did Gen Z's play pretend as Secret Agents?</h1>
                <h2>longing to be acknowledged for bridging worlds</h2>
                <h4>20 September 2026 | gen Z, work, astrology</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            
            <h2>In James Bond's shoes</h2>
            <p>When I was younger, my favourite play pretend was to become a Secret Agent. I would dress in special clothes and use special props to carry out my special missions. </p>
            <p>Since growing up, I have met many people who, despite our differing upbringings, had a similar predilection for playing pretend as a Secret Agent. How brilliantly specific.</p>
            
            <p>As I do when I'm analysing things, I look to astrology.</p>
            <h2>Astrologically, Gen Z is <a href="https://www.chani.com/blogs/pluto-and-the-power-of-generations">defined</a> by Pluto in Sagittarius</h2>
            <p>Sagittarius is the sign of the centaur who is associated with adventure, communication, learning/teaching, spiritual/philosophical inquisition, and long journeys.</p>
            <p>Pluto is the planet of transformation, power, and the underworld. It is associated with deep change, regeneration, and the uncovering of hidden truths. </p>
            <p>When Pluto transits Sagittarius, it can bring about a collective desire for exploration, truth-seeking, and a quest for meaning. And the Secret Agent lifestyle meets these desires exquisitely:
                <ol>
                    <li>you get to explore (Sagittarius) the world; and in particular, restricted/secret places (Pluto)</li>
                    <li>you believe your missions are part of seeking the truth (Sagittarius) and justice (Pluto)</li>
                    <li>you are celebrated for your ability to navigate two worlds at once (Sagittarius *cough* centaur), especially when those worlds are in transformation (Pluto)</li>
                </ol>
                It is this third desire that I want to explore further with examples.
            </p>
            
            <h2>Gen Z wants to be valued for their artful bridging of worlds.</h2>

            <p>The most obivous example, is that, having been the generation that has grown up with the internet, we have constantly been navigating two worlds at once: <b>the physical world and the digital world.</b></p>

            <p>While the external world - the land and the outlines of countries - has all been mapped; the domain that remained was internal. Gen Z are explorers (Sagittarius) of their internal worlds (Pluto); and computers and the digital worlds within them are vessels, for your internal worlds to become external; and vice versa. A video game is a world to explore. A "post now" button is a world to explore. A forum; a video; a comment section; a blog post. All <a href="/#/Blog_ALCT">containers of worlds</a>.</p>

            <p>I grew alongside the computer; as I got bigger, the computers got smaller - thinner, lighter, more powerful. My computer literacy is something I can't remember a time before. I can't remember learning to recognised a hamburger icon as a menu. I can't remember, not reocgnising what a rubbish bin icon in my task bar means. That's perhaps the weirdest thing - I can't remember myself before this technical literacy. <br />
            I remember reading this quote that went something like this: "you have to adapt to the technology because it cannot adapt to you." and I wonder how much of what I think of expressing myself through technology is really me optimising my manipulation of it (or, it of me).</p>
            <p></p>

            <p>As we continue through these unprecedented times - through, as Anand Giridharadas describes as being "the chaos of the ending of something" - I can see in my peers a common frustration. The cracks in the systems are so blaringly obvious, that any time an older person is explaining how they understand it, we have already figured out how to improve it. A kind of problem-literacy. Different to my preivous example - I CAN remember a time before I knew what capitalism was - before I know when feminism, racism, slavery, oppression. I can remember the feelings of experiencing these things, before I had the words to describe them.</p>

            <h2>And I mean "artful"</h2>
            
            <p>The profession is specifically Secret Agent - a highly technical role that requires mastery of body and technology and environment to be successful in.</p>
            
            <p>Mastery of the <b>body</b>; of blending into a situation whilst remaining focused on the task at hand. A kind of mindfulness and consciousness.</p>

            <p>Mastery of the <b>environment</b>; of resourcefulness and creativity to use your surroundings to your advantage. I'm thinking about Po fighting Tai Lung in Kung Fu Panda (2008).</p>

            <p>Mastery of the <b>technology</b>; once you have the prior two, some quartermaster would come out of the door in the wall and hand you a sleek small suitcase with the latest gadgets to give you another advantage. Back when hiding a camera inside the tip of pen was a cool factoid and not a terrifying reality (*cough* cheap AI glasses). I never thought about the cost of using those technologies. Unfortunately James Bond doesn't go into that level of detail either.</p>

            <p>The artful bridging of worldsrefers to the innate style that Gen Z brings to this world-bridging. It is the flavour of their humour; the cutting-to-the-core of the issue; the coming equipped with words and concepts and inquisition and receipts; and perhaps most importantly, the reorientation to what really matters in life as human.</p>

            <h2>Bonus Desire: A Secret Agent *should be* safe from the surveillance state</h2>
            <p>Or perhaps I should say "with". The fantasy of being a Secret Agent also appealed because, at that point in my childhood, I thought power was being on the spying side of the surveillance state - was learning the rules I could break them efficiently to keep my loved ones safe. At that point, there was good guys and bad guys; and only the keen eyes of the good guys could detect the bad guys' intentions and spring into saving the world.</p>
            <p>Now, I'm not so sure that the ones doing the watching are the good guys after all.</p>

            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default GZSA;
