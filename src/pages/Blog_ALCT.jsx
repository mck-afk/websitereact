import React from "react";
import PostItNote from "../components/PostItNote";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const ALCT = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="green">The Carrier Bag during Cancer Season</h1>
                <h2>The Mother within the Moon, Food, Cocoon, Book, Cockatoo, Soothsaying, Room</h2>
                <h4>22 July 2026 | astrology, technology, mother</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <div className="notepad">
                <p>Thesis: Mother imprints our understanding of 'Love as Container' (aka 'Carrier Bag'); and therefore, every bag we encounter henceforth is also, in its own way, a Mother to us. This is the collection of things I have encountered during this season that have, in their own ways, Mothered me.</p>
                <h2>Table of Contents</h2>
                <ul>
                    <li><HashLink to="#moon">Moon - lessons in triphasic cycles</HashLink></li>
                    <li><HashLink to="#food">Food - forever mother surrogate</HashLink></li>
                    <li><HashLink to="#cocoon">Cocoon - Coconut Crab as a convergent evolution specialist</HashLink></li>
                    <li><HashLink to="#books">Book - imagination exercises</HashLink></li>
                    <li><HashLink to="#cockatoo">Cockatoo - a symbolic mother</HashLink></li>
                    <li><HashLink to="#soothsaying">Soothsaying - the Goddesses wove Barbault's Basket</HashLink></li>
                    <li><HashLink to="#room">Room - mother is home at Anna's Abode</HashLink></li>
                </ul>
                <p>
                    Extending on <a href="https://youtu.be/5wFmQ9Td3Nk?si=1ai9LzHFW5se3QC6">Anna Howard's short video essay about "love as container"</a> where she presents an uplifting argument for "creating a carrier bag of expression & storytelling for yourself". Essentially a space, outside of you that you tend to; that holds all of your love. That exists beyond the influence the rest of the world: what others think, whether they care about it or not. This blog is one such example of a carrier bag. This blog post is another such example of a carrier bag. Here is my collection of fragments for and from this 2026 Cancer Season (June 21 to July 22).
                </p>
                <blockquote id="blogislovecontainer" className="note green">
                    <p style={{ fontSize: "larger" }}>
                        This blog post is a container! <br /><br /> It is made of love! <br /><br />It holds my love!<br /><br />Holds it for you!
                        
                        <cite className="actions">PS: even this note is a container!</cite>
                    </p>
                </blockquote>
                    
                
                <p>Building from the Carrier Bag Theory of Evolution put forward by Elizabeth Fisher in Women's Creation (McGraw-Hill, 1975), that "the first cultural device was probably a recipient... a container to hold". The Mother is the first container. And she is not a single entity; she is an ecosystem. her identity, as a woman, a mother, an ancestor is triad. Her body, child, adult, crone. Her relationship to food; gathering, holding, preparing, eating, shitting.</p>

                <p>If <a href="https://www.getyarn.io/yarn-clip/ae7b84a2-d78d-4081-9281-ee2b81a6a5e0">Ken thinks "horses are just men extenders"</a> then I argue: "bags are just hand extenders". Bags are bigger hands. And who in this world can stretch further than anyone else in order to carry more - an entire human more? Mothers.</p>

                <h2 id="moon">Moon - lessons in triphasic cycles</h2>


                <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "After the dark of the [new] Moon, the crescent Moon appears... shaped like a bowl... [and] linked with the virgin goddess Persephone... [and] also said to be the emblem of Artemis... the Lady of the Beasts... [whose] women, when possessed, would climb the hillsides in their lunar mania or ecstatic trance, and tear apart wild animals...[illuminating] the connection between <i>luna</i> and lunatic."
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://yourbookstore.io/p/luminaries-psychology-of-sun-moon-in">1992 The Luminaries by Liz Greene & Howard Sasportas</a>
                        </cite>
                    </p>
                </blockquote>
                
                
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>🌑 1 🌑</th>
                            <th>🌘 2 🌒</th>
                            <th>🌕 3 🌕</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Moon Phase</th>
                            <td>New Moon </td>
                            <td>Crescent Moon </td>
                            <td>Full Moon </td>
                        </tr>
                        <tr>
                            <th>Pregnancy</th>
                            <td>First Trimester</td>
                            <td>Second Trimester</td>
                            <td>Third Trimester</td>
                        </tr>
                        <tr>
                            <th>Phase of Life</th>
                            <td>Maiden</td>
                            <td>Mother</td>
                            <td>Crone</td>
                        </tr>
                        <tr>
                            <th>The Menstrual Cycle</th>
                            <td>Menstruation</td>
                            <td>Follicular</td>
                            <td>Luteal</td>
                        </tr>
                        <tr>
                            <th>Triple Goddesses</th>
                            <td colSpan={3}>Daughters of Allah, Ix Chel, Tridevi, Three Kadlu Sisters, Hecate, Morrigan, Three Fates</td>
                        </tr>
                        <tr>
                            <th>The Carrier Bag</th>
                            <td>Empty</td>
                            <td>Filling</td>
                            <td>Full</td>
                        </tr>
                        <tr>
                            <th>The Components of a Bag (<a href="https://www.clutchmade.com/post/anatomy-of-an-accessory-understanding-the-components-of-a-bag">inspiration</a>)</th>
                            <td>Material</td>
                            <td>Stitching</td>
                            <td>Handle</td>
                        </tr>
                        <tr>
                            <th>Image example</th>
                            <td>N/A</td>
                            <td><img src="https://peermag.org/content/uploads/2019/01/TombRaider_web.jpg" style={{ width: "100px" }} /><br /><a href="#/Blog_RBSS">Further Analysis</a></td>
                            <td><img src="/images/inanna.jpg" style={{ width: "100px" }} /></td>
                        </tr>
                    </tbody>
                </table>
                
                <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "The lunar cycle was called the Great Round, reflecting its connection with fate and with things always coming back again, endlessly repeating. All things which are mortal have their cycle, and it is a universal rather than an individual cycle, since individuals die but the species continues to regenerate itself."
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://yourbookstore.io/p/luminaries-psychology-of-sun-moon-in">1992 The Luminaries by Liz Greene & Howard Sasportas</a>
                        </cite>
                    </p>
                </blockquote>

                <h2 id="food">Food - forever mother surrogate</h2>

                <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "The Moon in myth governs... the body and the instincts, which is why these deities are usually female–it is out of the female body that we are all born and receive our first food."
                        <br /><br />
                        "A lot of things can be food surrogates, just as food itself is a mother surrogate on the personal as well as the archetypal level."
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://yourbookstore.io/p/luminaries-psychology-of-sun-moon-in">1992 The Luminaries by Liz Greene & Howard Sasportas</a>
                        </cite>
                    </p>
                </blockquote>
                 <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "If you haven't got something to put it in, food will escape you–even something as uncombative and unresourceful as an oat. You can put as many as you can in your stomach while they are handy, that being the primary container; but what about tomorrow morning...how do you get more than one stomachful and one handful home?"
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://yourbookstore.io/p/the-carrier-bag-theory-of-fiction">1986 The Carrier Bag Theory of Fiction by Ursula K. Le Guin</a>
                        </cite>
                    </p>
                </blockquote>
                <p>I adapted a baking recipe and it turned out great! I'm so proud of myself! I made miso brownies, based on <a href="https://www.seriouseats.com/bravetart-glossy-fudge-brownies">Bravetart's Glossy Fudge Brownies</a>. I used my growing instincts to balance out all the other ingredients because miso is a (kind of) wet ingredient. I am so proud of the result - delicious and cakey - which are my favourite ways to have them.</p>

                <h2 id="cocoon">Cocoon - Coconut Crab as a <a href="https://en.wikipedia.org/wiki/Convergent_evolution">Convergent Evolution</a> Specialist</h2>
                
                <p>
                    <a href="https://www.nhm.ac.uk/discover/coconut-crabs-bird-eating-giants-on-tropical-islands.html"><img src="https://www.nhm.ac.uk/content/dam/nhm-www/discover/coconut-crabs/coconut-crab-palm-tree-full-width.jpg.thumb.1920.1920.png" style={{ width: "400px" }} /></a>
                    <img src="/images/coconutcrabmother.png" style={{ width: "400px" }} /><a href="https://en.wikipedia.org/wiki/Coconut_crab">Source</a>
                </p>
                <p>
                    Perhaps the identifiable trait of a Mother carrier bag is the way it is built for a love, so intense, they are willing to risk death for life.
                </p>
                
                <p></p>

                <h2 id="books">Book - Blog</h2>
                <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "I would go so far as to say that the natural, proper, fitting shape of the novel might be that of a sack, a bag. A book holds words. Words hold things. They bear meanings. A novel is a medicine bundle, holding things in a particular, powerful relation to one another and to us."
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://communityofwriters.org/wp-content/uploads/2024/01/The-Carrier-Bag-Theory-of-Fiction.pdf">1986 The Carrier Bag Theory of Fiction by Ursula K. Le Guin</a>
                        </cite>
                    </p>
                </blockquote>

                <p>Bags of meaning that I reached into this month: 
                    <a href="https://yourbookstore.io/p/hexes-of-the-deadwood-forest-bold-surreal-feminist-ferociously-funny-service95"><img src="https://storage.googleapis.com/circlesoft/document/photos/004/637/982/large_temp_img.jpg20260603-29-762i8j?1780461800" className="book" /></a>
                    <a href="https://yourbookstore.io/p/welcome-to-your-new-life-774377"><img src="https://storage.googleapis.com/circlesoft/document/photos/002/203/701/large_9781863956451.jpg?1718115200" className="book" /></a>
                    <a href="https://yourbookstore.io/p/honey-3193076"><img src="https://storage.googleapis.com/circlesoft/document/photos/004/616/228/large_9780008759780.jpg?1781573045" className="book" /></a>
                    <a href="https://yourbookstore.io/p/the-healing-wisdom-of-africa-finding-life-purpose-through-nature-ritual-and-community"><img src="https://cdn2.penguin.com.au/covers/original/9780874779912.jpg" className="book" /></a>
                    <a href="https://yourbookstore.io/p/the-carrier-bag-theory-of-fiction"><img src="https://m.media-amazon.com/images/I/51305R+8mQL.jpg" className="book" /></a>
                </p>
                
                <p>I love reading. I have been reading and highlighting and transposing quotes into a private vault for myself to refer back to when I'm synthesising these resources. And, since reading the Carrier Bag Theory of Fiction, and Ursula K. Le Guin's proposal of the novel as a carrier bag, combined with the indigenous ways of thinking that Malidoma Patrice Somé describes where "Language, they insist, is an instrument of distance from meaning," I've been thinking about the purpose of a book; as more of an energy container. Some books I read and put down and some of them I carry like a lucky totem. There are books that have walked beside me; provided comfort and counsel. There have been times where the book I've been reading has influenced my life, has invited me to see from a different perspective, to make a different choice. I guess what I'm saying, and I know it has been said before, is that books comes into our lives for a reason. Akin to the Dagara belief that each Soul has a purpose that comes to the material world to gift of the community; a book has a purpose that comes into our personal worlds to give us a gift. Perhaps a book is more than the quotes that come out of it; just like a speech is more than its soundbites. Perhaps through my quoting, a book will start flirting with you. I like that thought.</p>
                <HashLink to="#blogislovecontainer">If a book can be a container, then a Blog can be one also.</HashLink>
                <p>And if words are love containers, then the act of writing might also be a <a href="#/Blog_HIWW">pathway of reclamation</a></p>

                <h2 id="cockatoo">Cockatoo - a symbolic mother</h2>
                <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "The glossy black cockatoo is a symbolic ‘mother’ figure in some Dreamtime narratives"
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://wwf.org.au/blogs/why-the-glossy-black-cockatoo-is-so-special-to-indigenous-australians/">WWF Australia: Why The Glossy Black Cockatoo is So Special To Indigenous Australians 14 June 2024</a>
                        </cite>
                    </p>
                </blockquote>
                <p>I heard the screech before I saw where it was coming from. I flinched-swapping seasons is nothing to sneeze at. Then my eyes found the source of the sound and I stood transfixed as three black birds-bigger than the crows and currawongs, danced through the air-stark against the blue sky. They dipped and spun and whirled and ascended, preparing to bring the wind in to buffer their speed before landing on the tippyty-toppity of the branches. More screeching. Happy screeches now. Or maybe they sound friendlier because I know the birds are more interested in food, than me. I smile as an empty branch, pecked clean, falls. I feel that a Mother messenger is with me.</p>
                <p>Later I will Google the meaning of a Black Cockatoo with a Yellow Tail and Cheeks, and I will find out the congruence: that they are seen as <a href="https://www.instagram.com/p/C_9sonSyjIN/?hl=en">"messengers or symbols of change and connection to the spiritual world. Their distinct call and striking appearance often signal important shifts in the environment or weather, reminding them of the relationship between people and nature."</a></p>
                <p>And all I can say is Thank You.</p>

                <h2 id="soothsaying">Soothsaying - the Goddesses wove Barbault's Basket</h2>
                <blockquote className="note green">
                    <p style={{ fontSize: "larger" }}>
                        "The July basket is the old gods coming into harmony, out in the open at last. The August star is the goddesses of childbirth, value, descent, correction, and the hearth completing the circle around them."
                        
                        <cite className="actions" style={{ fontSize: "smaller" }}>
                            <a href="https://substack.com/app-link/post?publication_id=1187601&post_id=206790176&isFreemail=true&r=1kta6v&token=eyJ1c2VyX2lkIjo5NTQyNDcyNywicG9zdF9pZCI6MjA2NzkwMTc2LCJpYXQiOjE3ODQwMzE4MjUsImV4cCI6MTc4NjYyMzgyNSwiaXNzIjoicHViLTExODc2MDEiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.HJBit84MZe_MF_S_SKZ65SnmvyrwZ3_eMVd1Gy0IltA">Barbault's Basket Is a Womb Carrying the New World by Alison Dale of Hearth and Spiral 14 June 2026</a>
                        </cite>
                    </p>
                </blockquote>
                <img src="https://ci3.googleusercontent.com/meips/ADKq_NawRuLRuRC4BJkdRaDAhb9VTm2CnO_sF9W0yTAavSPesEWYAWLzrIUdWLj9-MEyaMzGgP3YKCtwQcmalXzpZDbGd_LjwyHnbSx_LwT2H5bsOkAoyARysmQXGS8VoddxFvZ3j5UT8nfhXGdATXSEWKFQW-I2m-5_G_oHQ9uSU81x9FtQ7ysrGk8SJWHd6z5xcupAMX3SLNUSOBKnMqhRSVY9u-jtx3BCsYKflg5VFA7rg4zzV2vNj4KeddpglEtR64D5Goo4qDI2NBe3RBi_zRo0kl6vApDlkbApwT8ASYDUjUj0fzuy59kFW5fet58PfOx8Ymoh=s0-d-e1-ft#https://substackcdn.com/image/fetch/$s_!13r3!,w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F65f0b585-a0ac-4faf-a81a-fdeb0c7f6b3a_2136x1298.png" style={{ width: "400px" }} />
                <p>I've been subscribed to Alison for a few months now and I really enjoy her analysis and fresh insights. I was wondering where the feminine energies in this configuration were going to appear. I learnt many things, including how Chiron in Taurus is the seed of a new world that starts within the body; that Ishtar is Inanna is Venus; and that the asteroid Sauer (9248) represents "as the signature of engineering, of carefully planned trajectories, and of events that unfold the way they do because somebody designed them to".</p>
                <p>This inspired me to do my own analysis and I found that Hekate/Hecate (100) is also at 4 degrees in Pisces - the only water sign in the configuration, semisextiling Pluto in Aquarius and Neptune in Aries. A <a href="https://en.wikipedia.org/wiki/Astrological_aspect#Other_minor_aspects">Semisextile</a>, indicates an influence of energy that will be more subtle and sensual than perhaps we are used to attuning to. Perhaps this subtle energy is why I haven't seen anyone talking about her in this configuration yet. Regardless, I want to talk about her!</p>
                <p>I believe Hekate is here to bridge the gap between the raw power of the people, and the illusions of individuality that our <a href="https://en.wikipedia.org/wiki/The_WEIRDest_People_in_the_World">WEIRD</a> worlds are built around - to be the primordial soup, the cauldron that synthesising the ideas and tempers the ire of the many, individuals, reuniting them in remembrance of our original nature - all as one. Hekate is one of the Triple Goddesses mentioned earlier (meaning she IS a Mother), also associated with the moon (which we explored earlier too), and, to top it off, she is also considered a <a href="https://en.wikipedia.org/wiki/Hecate">protector of the household</a> ("home being another, larger kind of pouch or bag, a container for people" - Ursula). Hekate is holding Pluto and Neptune together, at the table, plied with nourishment so that they may see eye to eye, even just for a moment. Hekate chose this wine specifically - she spoke with Venus/Ishtar/Inanna and Juno, and once they had their plan they prepared the dinner table. They orchestrated the harmony. And, just as my damned Western/patriarchal bias has taught me to expect of 'good women', they faded into the background and let all the fanfare be about the masculine energies, laughing it up, while the fire was kept stoked; the wine goblets were kept full; the window shutters drawn at dusk; the lavatories routinely cleaned; the cutlery polished spotless; the food served hot and piping and sparkling.</p>

                <h2 id="room">Room - mother is home at Anna's Abode</h2>
                <a href="#/abode">
                <blockquote className="note green left">
                    <p style={{ fontSize: "larger" }}>
                        <h2>Anna's Abode</h2>
                        <p>
                            a framework for organising and exploring areas of life and creation</p>
                            <img src="images/abode.png" style={{ width: '100px'}} />
                            <table className="hiddenTable" style={{display: "none"}}>
                            <tbody>
                            <tr>
                                <td className="hiddenTable"></td>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                                <td className="hiddenTable"></td>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                                <td className="hiddenTable"></td>
                            </tr>
                            <tr>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                                <td className="hiddenTable"></td>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                                <td className="hiddenTable"></td>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                            </tr>
                            <tr>
                                <td className="hiddenTable"></td>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                                <td className="hiddenTable"></td>
                                <td className="hiddenTable"><img src="https://blob.gifcities.org/gifcities/S4TBQT6HDKHUUPY5WJ7UC7QGP74PG3PJ.gif" /></td>
                                <td className="hiddenTable"></td>
                            </tr>
                            </tbody>
                            </table>
                            <p>
                            a honeycomb home ⬡ </p>
                                        
                    </p>
                </blockquote>
                </a>
                <p>I've been working hard in the background, consolidating another one of my side projects that I feel ready to share with you here. It's called Anna's Abode, and it is the green. You can explore the rooms <a href="#/abode">here</a>.</p>
            </div>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
    

    </PageLayout>
    );
}

export default ALCT;
