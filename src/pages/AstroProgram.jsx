import React from "react";
import PageLayout from "../components/PageLayout";
import ZodiacWheel from "../components/ZodiacWheel";

const AstroProgram = () => (
    <PageLayout>
        <div>
        <div className="purple">
            <h1>Astrology for Programmers</h1>
            <p>a playful exploration of Astrology ✧☊ through the lens of Programming > |</p>
        </div>
        
        <div id="tableOfContents">
            <h2>Prerequisites</h2>
            <ul>
                <li>The Date, Time, and Place of an event</li>
                
            </ul>
            <h2>Table of Contents</h2>
            <ul>
                <li><a href="#part1">Part 1 - Seeing from another Perspective</a></li>
                <li><a href="#part2">Part 2 - The Building Blocks</a></li>
                <li><a href="#part3">Part 3 - Application for Pattern Recognition</a></li>
            </ul>
            <h2>Disclaimer</h2>
            <p>This article focuses on Western Astrology as defined by <a href="https://en.wikipedia.org/wiki/Zodiac">Wikipedia</a>.
                <br />There are <a href="https://en.wikipedia.org/wiki/List_of_astrological_traditions,_types,_and_systems">many other Astrological modalities</a> which can pursued in further study.
                <br />All coding examples and interactivity are written in Javascript.
            </p>
        </div>
        <div id="part1">
            <h2 className="purple">Part 1 - Seeing from another Perspective</h2>
            <h3>1.1 Similarities</h3>
            <table>
                <thead>
                    <tr>
                        <th className="purple" style={{textAlign: "center"}}>Programming</th>
                        <th className="purple" style={{textAlign: "center"}}>Astrology</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>A <a href="#language">language</a>, consisting of keywords and syntax</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Used to interpret (and manipulate) instructions and patterns</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Enriched through mathematical calucalutions and application of rules</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Operate in intangible contexts:</td>
                    </tr>
                    <tr>
                        <td>Digital/Virtual</td>
                        <td>Celestial/Energetic</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Have denominations/specialisations:</td>
                    </tr>
                    <tr>
                        <td>C, C#, Javascript etc.</td>
                        <td>Vedic, Sideareal, Hindu etc.</td>
                    </tr>
                </tbody>
            </table>
            
            
        
            <h3>1.2 Resistance</h3>
            <p>Who taught you to dismiss Astrology? Why did they do that?</p>
            <p>It's okay. We've all been there. Capitalism is invested in shaping our beliefs about Astrology, because it is one of the ways we can imagine a world without Capitalism.</p>
            <p>Capitalism benefits from degrading and infantilising Astrology. It also does so to women, which could be one of the reasons it resonates.</p>
            
            <p>The thing about Magazine/Newspaper horoscopes is that, even if they were written with pure intentions, they would only be describing, at best 1/12th of the current situation they attempt to divine.</p>
            <p>Western Astrology is the practice of analysing the placements and relative angles of the planets in the sky, based on a particular viewpoint on earth.</p>
            <p>As Wikipedia succintly says: <a href="https://en.wikipedia.org/wiki/Astrology">"The horoscope visually expresses the set of relationships for the time and place of the chosen event."</a></p>
            <p>In other words, the value in pattern recognition of Astrology lies in the unique combination of multiple factors at a point in time, which are likely to influence the physical reality we move through.</p>
            <p>Like programming (and machine learning) which analyses multiple dimensions and finds patterns.</p>
            <p>The Zodiac is a set of 12 archetypes. it is a symbolic and narrative reflection of aspects/dimensions of the human experience.</p>
            <p>What this means is that, you and your astrology, contains multitudes that simply cannot be captured in 100 words in the back of a newspaper.</p>
            <p>Western Astrology and natal chart reading, because it is anlaysing the relationships at a certain point in time and space, can also be used for non-people divination too - such as financial markets, company cycles of boom and bust, and weather and poloitical events. We will look at these examples in Part 3.</p>
            
            <h3>1.3 Radio waves impact the world around you, regardless of your belief in them. Astrological forces are the same. Why not add this language to your toolkit?</h3>
            <p>astrology is a viewpoint for perception. Like the differences between programming languages forces you to structure your questions, manipulations differently. Astrology is another way of doing that.</p>
        
        </div>
        <div id="part2">
            <h2 className="purple">Part 2 - The Building Blocks</h2>
            <p>Programming languages are structured around two essential components: <span className="green">what it is (data)</span> and <span className="blue">manipulations of what it is (functions)</span>.</p>
        
            
            <table id="simpleTable">
                <tbody>
                <tr className="simpleRow">
                    <th className="purple"></th>
                    <th className="purple" style={{textAlign: "center"}}>Programming</th>
                    <th className="purple" style={{textAlign: "center"}}>Astrology</th>
                </tr>
                <tr className="simpleRow">
                    <td className="green" style={{textAlign: "right"}}><em>what it is</em></td>
                    <td className="green">Data/Properties</td>
                    <td className="green">Archetype/Zodiac</td>
                </tr>
                <tr className="simpleRow">
                    <td className="blue">manipulations of <em>what it is</em></td>
                    <td className="blue">Functions/Methods</td>
                    <td className="blue">Planets, Houses, Aspects</td>
                </tr>
                
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr className="detailRow" >
                    <th className="purple" style={{textAlign: "center"}}><a href="https://sourceacademy.org/sicpjs/1.1#p1"> 3 mechanisms of language from a 1984 programming textbook</a></th>
                    <th className="purple" style={{textAlign: "center"}}>Programming</th>
                    <th className="purple" style={{textAlign: "center"}}>Astrology</th>
                </tr>
                <tr className="detailRow">
                    <td className="green">1. primitive expressions</td>
                    <td className="green">the simplest elements of the language (what it is)</td>
                    <td className="green">12 archetypes that comprise the Zodiac</td>
                </tr>
                <tr className="detailRow">
                    <td className="blue">2. means of combination</td>
                    <td className="blue">compound elements can be built from the simple elements</td>
                    <td className="blue">Planets, Houses, Aspects</td>
                </tr>
                <tr className="detailRow">
                    <td className="blue">3. means of abstraction</td>
                    <td className="blue">compound elements can be named and manipulated as units</td>
                    <td className="blue">"Mercury Retrograde" or "Leo Sun"</td>
                </tr>
                </tbody>
            </table>
            
            <p>The 12 Zodiac signs are often depicted in a circle, likening their function as a compass for celestial navigation.</p>
            
            
            <ZodiacWheel 
                backgroundImageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Zodiac_%28PSF%29.png/500px-Zodiac_%28PSF%29.png"
            /><a href="https://en.wikipedia.org/wiki/Zodiac">Img Src: Wikipedia</a>


            <div>
                <p>The 12 Zodiac signs are instances of the Archetype object.</p>
                <code>Hello I amgoing to print the archetype class</code>
                <p>Properties</p>
                <p>archetype, planet, house</p>
                <p>and Methods</p>
                <p>embolden(), amplify(), illuminate(), express()</p>
            </div>
            <div id="12signtable"></div>
            <h3>2.3 Here's the Maths</h3>
            <p>Because the horoscopes are depicted as a calucation of the distance of pplanets between each iother - these angles are grouped into the following for ease of reference. The second Maths aspect here is that, for a Western Zodiac horoscope, each Zodiac sign is spilt in 30 degrees (addin12 = 360 degrees). The numbers themselves have numerological origins. </p>
        </div>
    
        <h3>Let's put this language into practice.</h3>
    </div>
    <div id="part3">
        <h2 className="purple">Part 3 - Application for Pattern Recognition</h2>
        <p>First thing to do is find a piece of software that will generate the Horoscope for us. These horoscopes are snapshots of the relationships in the sky at a moment in time. My personal preference is <a href="https://www.astro.com/cgi/chart.cgi?rs=2&usechpref=1&btyp=w2gw">astro.com</a> because it offers many options for customisation as your pattern recognition skills enhance.</p>
        <p>Then we input the date, time, and location of the event/birth.</p>
        <p>To validate your analysis, there are a multitude of websites out there offering their own interpretations, including the popular <a href="https://astro.cafeastrology.com/natal.php">Cafe Astrology</a>. But now that you know the basics, you can start to see the patterns and connections in your chart!</p>
        <p>Now we have our first horoscope!</p>
        <div id="12signtableexample"></div>

        <p>A <span className="green">Libra</span> <span className="blue">Sun</span> in the <span className="blue">12th House</span> can be broken down like this:
            <br /> Libra = Balance/Harmony
            <br /> Sun = Core Identity/Expression
            <br /> 12th House = Reflection/Subconscious/Dreaming
            <br /><br /> 
        </p>
        <h3 className="purple">Example Case Study: <a href="https://academic.oup.com/mind/article-abstract/LIX/236/433/986238?redirectedFrom=fulltext">Computing Machinery and Intelligence</a> - October 1 1950, 12:00 PM BST, Wilmslow England</h3>
                
        <div className="twoColumn">
            <img src="images/astro_turing.png" alt="Astrology Chart Turing Test October 1 1950" className="astroChart" />
            
            <div>
                <p>The 10th house has the most focus, which makes sense because Alan turing's Turing Test would become one of the most recogniable achievements of his career, and public image.</p>
                <p>The zodiac sign most associated with Technology is Aquarius. In this chart, Jupiter (the planet of luck and expansion) is in Aquarius, clearly indicating that this piece of work would be a breakthrough in terms of how we understand technology.</p>
                <p>One thing that stands out to me is the opposition between Jupiter in Aquarius and Pluto in Leo. This suggests there was a tension between these great breakthroughs of understanding, and the ways of expressing them to the people at the time. Whilst many artists conject over Turing's state of mind during his life, and esepically his feelings towards his work, I think this shows us that he was driven by a powerful force; to express these breakthroughs in ideas even when the language or mediums he was using were not quite 'final'.</p>
                <p>The thesis of this work is creating a disinction between the human and the machine. This is obvious in the Libra placements (where Libra is the archetpye of the 'other'). Neptune in libra flows through Turing in this test; asking what could we as a collective do to differentiate ourselves from machines.</p>
                <p>The inquisition into the nature of intelleignece feels very Virgo to me (archtpye of the Aligner). Speaking in simply words, that describe with uncanny boldness. at the time is may have seemed like a very shrewd and natural extension of the philsophy of computers and machine thinking.</p>
            </div>
        </div>
        <h3 className="purple">Example Case Study: <a href="https://arxiv.org/abs/1706.03762">Attention Is All You Need</a> - June 12 2017, 12:00 PM PST, Mountain View California, U.S.</h3>
                
        <div className="twoColumn">
            <img src="images/astro_attention.png" alt="Astrology Chart Attention Is All You Need June 12 2017" className="astroChart" />
            
            <div>
                <p></p>
                
            </div>
        </div>
        <h3 className="purple">Example Case Study: NVIDIA 3rd Quarter FY26 Financial Results - November 19 2025, 02:00 PM PT, Sunnyvale California, U.S.</h3>
                
        <div className="twoColumn">
            <img src="images/astro_2025_nvidia_third_quarter_results.png" alt="Astrology Chart NVIDIA November 19 2025" className="astroChart" />
            
            <div>
                <p>Now that's a lot of Scorpio energy! Scorpio, the ruler of power, transformation, intensity, finances.</p>
                <p>Despite the market's conservative bets, with some of the most influential market experts like The Big Short guy putting in his short position against the AI bubble.</p>
                <p>Similar to the previous chart, the collective planets appear right on the precipice of moving into their new signs, signalling the change in era. But for now, NVIDIA, and its astrological forces, are sticking strong to the current playbook.</p>
                <p>Sun conjunct Moon conjunct Mercury is a fascinating focus of power - that the core, both internal and external, is all aligned with the words and communications it is presenting to the world. Indeed, as the stock market rests on NVIDIA, they really can't afford to present an unaligned front, lest they go down with the ship.</p>
                <p>Furthermore, this trio of Scorpio energy is Trining Jupiter in Cancer; an auspicious aspect as Jupiter is the ruler of luck and expansion, and in nurturing Cancer, indeed all the stock market and investors around the world have been soothed by NVIDIA results presented at this moment in time.</p>
                <p>The trine, also opposes the Uranus (collective beliefs and innovation) in Taurus (power, money, depth, material security), indicating the the collective KNOWS this facade - KNOWS that this is a financial bubble, that these profits are inflated and manipulated - AND YET the collective will still accept these results as true because the alternative is too terrifying to consider.</p>
                <p>The energy focuses around the water elements, Scorpio, Pisces, and Cancer - which are known to be very emotional and potentially volatile; indicating that this Quarterly Announcement may be one of the most volatile one NVIDIA has ever presented (with the AI bubble lying on their back id say so.)</p>
                <p>Let's look at the Houses. The majority of the energy here is occurring in the 8th House of Catharsis. Indeed, the entire stock market breathed a sigh of relief when NIVIDIA annouced their results. The 8th house can also indicate mystery, death, transformation, taxes, inheritenace, sex, power. Who knows what was really going on behind the scenes.</p>
            
            </div>
        </div>
        <div className="purple">
            <h2>Conclusion</h2>
            <p>Astrology mirrors the two essential components of Programming languages: <span className="green">what it is (data)</span> and <span className="blue">manipulations of what it is (functions)</span>.</p>
            <p>Using pattern recognition, we can identify hidden/subconscious relationships that effect the people and world around us. We can use it as a tool for self reflection and understanding. We can use it to help us have compassion for the present moment.</p>
        
        </div>
        </div>
    </PageLayout>
);

export default AstroProgram;
