import React from "react";
import PageLayout from "../components/PageLayout";
import { HashLink } from 'react-router-hash-link';

const InterNet = () => (
    <PageLayout>
        <div className="blue">
            <h1>InterNet</h1>
            <p>
                links to books, articles, inspirations, people, gatherings, media, movements, and other treasured connections 🔗
            </p>
            <p>
                <a href="https://en.wikipedia.org/wiki/Anna%27s_Archive">AnnasArchive</a> | <a href="https://gutenberg.net.au/">Project Gutenberg Australia</a>
            </p>
        </div>

        <h2>Table of Contents</h2>
        <ul>
            <li>Books</li>
            <ul>
                <li><HashLink to="#nonfiction">Non-Fiction (life imitates art)</HashLink></li>
                <li className="blue"><HashLink to="#fiction">Fiction (art imitates life)</HashLink></li>
                <li><HashLink to="#memoir">Biography (life is art)</HashLink></li>
            </ul>
            <li className="blue"><HashLink to="#articles">Articles</HashLink></li>
            <li><HashLink to="#worldbuildings">Worldbuildings</HashLink></li>
            <li className="blue"><HashLink to="#websites">Websites</HashLink></li>
            <li><HashLink to="#people">People</HashLink></li>
            <li><HashLink to="#crafts">Crafts</HashLink></li>
        </ul>

        <div>
            <h2>Books (chronological)</h2>
            <div className="threeCol">
                <div id="nonfiction">
                    <h3>Non-Fiction (life imitates art)</h3>
                    <dl>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/002/798/876/large_temp_img.jpg20250817-50-ia4ztv?1755409680" /><a href="https://yourbookstore.io/p/a-vindication-of-the-rights-of-woman-187002">Vindication of the Rights of Woman by Mary Wollstonecraft 1792</a></dt>
                        <dd>"Education deserves emphatically to be termed cultivation of the mind which teaches young people how to begin to think."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/525/161/large_temp_img.jpg20260319-1-r4cnhj?1773916045" /><a href="https://yourbookstore.io/p/the-master-s-tools-will-never-dismantle-the-master-s-house">The Masters Tools will Never Dismantle the Masters House by Audre Lorde 1979</a></dt>
                        <dd>"For the master's tools will never dismantle the master's house. They may allow us temporarily to beat him at his own game, but they will never enable us to bring about genuine change. And this fact is only threatening to those women who still define the master's house as their only source of support."</dd>
                        <dt><img className="book" src="https://cdn11.bigcommerce.com/s-vrffsdcwm/products/223907/images/242460/1086977__63081.1750260648.386.513.jpg?c=2" /><a href="https://www.scribd.com/document/443992025/Brenda-Laurel-Utopian-Entrepreneur-pdf">Utopian Entrepreneur by Brenda Laurel 2001</a></dt>
                        <dd>"The computer ought to be human, too. As human as language. As human as a thumb, a talisman, a fairy tale, a song... Yes, we made the computer, but in its role as a cultural symbol, the computer also defines us."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/605/860/large_9780241532539.jpg?1774349129" /><a href="https://yourbookstore.io/p/caliban-and-the-witch-women-the-body-and-primitive-accumulation-2142013">Caliban and the Witch: Women, the Body and Primitive Accumulation by Silvia Federici 2004</a></dt>
                        <dd>"By denying women control over their bodies, the state deprived them of the most fundamental condition for physical and psychological integrity and degraded maternity to the status of forced labour."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/001/942/373/large_temp_img.jpg20251031-44-oxwwib?1761869050" /><a href="https://yourbookstore.io/p/the-will-to-change-men-masculinity-and-love">The Will to Change by bell hooks 2004</a></dt>
                        <dd>"Asked to give up the true self in order to realize the patriarchal ideal, boys learn self-betrayal early and are rewarded for these acts of soul murder.”</dd>
                        <dt><img className="book" src="https://www.quarterlyessay.com.au/sites/default/files/styles/cover_large/public/covers/qe29_0.jpg?itok=_tJl9U75" /><a href="https://www.quarterlyessay.com.au/essay/2008/03/love-and-money">Quarterly Essay 29 Love and Money by Anne Manne 2008</a></dt>
                        <dd>"In a nutshell, we have foolishly arrived at a society where there is an economic disincentive to have and care for children, but an economic incentive to restrict fertility and instead invest in one's own skills and income. It is the irrationality of rational economics. It is falling fertility, however, above all else, which gives women a political bargaining chip of a new and powerful kind. Policy makers, formerly deaf to mothers' needs, will have no choice but to listen."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/187/536/large_9781803414300.jpg?1768777214" /><a href="https://yourbookstore.io/p/capitalist-realism-is-there-no-alternative-2503977">Capitalist Realism by Mark Fisher 2009</a></dt>
                        <dd>"The fact that capitalism has colonized the dreaming life of the population is so taken for granted that it is no longer worthy of comment."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/002/686/152/large_9781408857694.jpg?1718161254" /><a href="https://yourbookstore.io/p/unspeakable-things-sex-lies-and-revolution">Unspeakable Things by Laurie Penny 2014</a></dt>
                        <dd>"What the stereotype of the bra-burning, hairy-legged feminist is really supposed to suggest is that feminism, that politics itself, makes a woman ugly."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/953/023/large_temp_img.jpg20260214-33-hlmowl?1771046834" /><a href="https://yourbookstore.io/p/come-as-you-are-the-surprising-new-science-that-will-transform-your-sex-life">Come As You Are by Emily Nagoski 2015</a></dt>
                        <dd>"The day you were born, the world had a choice about what to teach you about your body... I'm working to create a world that doesn't lie to women about their bodies anymore."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/566/790/large_temp_img.jpg20220322-1-17mzfhf?1718166081" /><a href="https://yourbookstore.io/p/why-women-have-better-sex-under-socialism-and-other-arguments-for-economic-independence-1670855">Why Women Have Better Sex Under Socialism by Kristen Ghodsee 2018</a></dt>
                        <dd>"In general state socialist governments reduced women's economic dependence on men by making men and women equal recipients of services from the socialist state. These policies helped to decouple love and intimacy from economic considerations."<br /> "Although they may not realize it, sexual economics theorists basically embrace a long-standing socialist critique of capitalism: that it commodifies all human interactions and reduces women to chattel."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/956/705/large_temp_img.jpg20240517-1-vmadm3?1718167100" /><a href="https://yourbookstore.io/p/man-made-how-the-bias-of-the-past-is-being-built-into-the-future">Man-Made: How the bias of the past is being built into the future by Tracey Spicer 2023</a></dt>
                        <dd>"."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/335/764/large_9780241721308.jpg?1760308510" /><a href="https://yourbookstore.io/p/the-serviceberry-an-economy-of-gifts-and-abundance">The Serviceberry by Robin Wall Kimmerer 2024</a></dt>
                        <dd>"The Serviceberries show us another model, one based upon reciprocity rather than accumulation, where wealth and security come from the quality of our relationships, not from the illusion of self-sufficiency."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/356/364/large_temp_img.jpg20260118-28-gy6fiv?1768778430" /><a href="https://yourbookstore.io/p/girl-on-girl-how-pop-culture-turned-women-against-themselves">Girl on Girl: How Pop Culture Turned a Generation of Women Against Themselves by Sophie Gilbert 2025</a></dt>
                        <dd>"Culture teaches us everything. And what I keep coming back to now is how few cultural representations there still are of women seeking and wielding power."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/353/330/large_9781471190490.jpg?1760918400" /><a href="https://yourbookstore.io/p/the-new-age-of-sexism-how-the-ai-revolution-is-reinventing-misogyny">The New Age of Sexism: How the AI Revolution is Reinventing Misogyny by Laura Bates 2025</a></dt>
                        <dd>"On the surface, this is a book about technology. But, at its root, it isn't about technology at all."</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/278/788/original_temp_img.jpg20260218-44-jvxnw6?1771383581" /><a href="https://yourbookstore.io/p/vulture-capitalism-corporate-crimes-backdoor-bailouts-and-the-death-of-freedom-2834172">Vulture Capitalism by Grace Blakeley 2025</a></dt>
                        <dd>"The choice isn't 'free markets' or 'planning'. Planning and free markets exist alongside one another in capitalist societies - indeed in any society. The choice is whether the planning that inevitably does take place in any complex social system is democratic or oligarchic... Capitalism is a hybrid system based on a fusion between markets and planning."</dd>
                    </dl>

                </div>
                <div className="blue" id="fiction">
                    <h3>Fiction (art imitates life)</h3>
                    <dl>
                        <dt><img className="book" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Christie%27s_auction_scan_of_Frankenstein_1818.jpg/500px-Christie%27s_auction_scan_of_Frankenstein_1818.jpg" /><a href="https://yourbookstore.io/p/frankenstein-popular-penguins">Frankenstein: or, The Modern Prometheus by Mary Wollstonecraft Shelley 1818</a></dt>
                        <dd>obsession creates reality, despite compassion in the face of cruelty.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/077/368/large_9781328869333.jpg?1718101170" /><a href="https://yourbookstore.io/p/1984-hb">1984</a> by George <a href="https://www.goodreads.com/book/show/62802741-wifedom">and</a> <a href="https://www.goodreads.com/book/show/52745524-eileen">Eileen</a> Orwell 1949</dt>
                        <dd>there is a reason this book has become such a cultural phenomenon. it is astounding, relevant, and haunting.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/568/631/large_temp_img.jpg20251022-33-g7uutp?1761096268" /><a href="https://yourbookstore.io/p/parable-of-the-sower-a-powerful-tale-of-a-dark-and-dystopian-future">Parable of The Sower by Octavia E. Butler 1993</a></dt>
                        <dd>set in 2024-2027, Olamina leads with compassion while a president called Donner destroys the country.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/347/128/large_9780439023528.jpg?1773177171" /><a href="https://yourbookstore.io/catalog/search?utf8=%E2%9C%93&keyword=the+hunger+games&search_type=core%5Ekeyword">The Hunger Games (all of them!) by Suzanne Collins 2008-</a></dt>
                        <dd>just war politics, social contracts, propaganda.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/002/627/950/large_9781786693068.jpg?1718147610"/><a href="https://yourbookstore.io/p/walkaway">Walkaway by Cory Doctorow 2017</a></dt>
                        <dd>keep one eye on the meta-commentary.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/379/171/large_9781408890042.jpg?1765262550" /><a href="https://yourbookstore.io/p/circe-1584057">Circe by Madeline Miller 2018</a></dt>
                        <dd>everything you need is within you. you have your gift and you have what it costs.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/593/785/large_temp_img.jpg20240315-1-jyh0m?1718129702" /><a href="https://yourbookstore.io/p/nervous-conditions">Nervous Conditions by Tsitsi Dangarembga 2021</a></dt>
                        <dd>coming-of-age under cultural imperialism within the female body.</dd>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/139/425/large_9781529920567.jpg?1752736479" /><a href="https://yourbookstore.io/p/chain-gang-all-stars-a-novel">Chain-Gang All-Stars by Nana Kwame Adjei-Brenyah 2023</a></dt>
                        <dd>powerful commentary on the sickening spectacle that is violence.</dd>
                    </dl>
                
                </div>
                <div id="memoir">
                    <h3>Biography (life is art)</h3>
                    <dl>
                        <dt><a href="https://yourbookstore.io/p/thick-and-other-essays"><img className="book" src="https://m.media-amazon.com/images/I/61h3TdW1eYL._AC_UF1000,1000_QL80_.jpg" />Thick and Other Essays by Tressie McMillan Cottom 2019</a></dt>
                        <dt><a href="https://yourbookstore.io/p/trick-mirror-reflections-on-self-delusion-1797949"><img className="book" src="https://thumbs.readings.com.au/7I4E1oguZw18VMEeNs5aK4V6xAY=/0x500/https://readings-v4-production.s3.amazonaws.com/assets/b64/dec/861/b64dec8611a3fc509156c616fdc39984de1b2682/978000829495320230103-4-m9e50u.jpg" />Trick Mirror: Reflections on Self-Delusion by Jia Tolentino 2020</a></dt>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/018/468/large_temp_img.jpg20260314-1-odm4ho?1773455881" /><a href="https://yourbookstore.io/p/braiding-sweetgrass-indigenous-wisdom-scientific-knowledge-and-the-teachings-of-plants">Braiding Sweetgrass by Robin Wall Kimmerer 2020</a></dt>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/003/589/096/large_9780141996479.jpg?1757214930" /><a href="https://yourbookstore.io/p/my-grandmother-s-hands-racialized-trauma-and-the-pathway-to-mending-our-hearts-and-bodies">My Grandmother's Hands by Resmaa Menakem 2021</a></dt>
                        <dt><a href="https://yourbookstore.io/p/black-friend-essays-2812977"><img className="book" src="https://m.media-amazon.com/images/I/51TAwpIbIDL._AC_UF1000,1000_QL80_.jpg" />Black Friend: Essays by Ziwe Fumudoh 2023</a></dt>
                        <dt><img className="book" src="https://storage.googleapis.com/circlesoft/document/photos/004/019/756/large_temp_img.jpg20241219-1-zcbppn?1734584454" /><a href="https://yourbookstore.io/p/the-woman-in-me">The Woman in Me by Britney Spears 2023</a></dt>
                        <dt><img className="book" src="/images/ismatu.png" /><a href="https://www.threadings.io/the-uses-of-insanity-an-overture/">The Uses of Insanity (an Overture) by Ismatu Gwendolyn 2026</a></dt>
                        
                    </dl>
                </div>
            </div>
            
        </div>

        <div className="blue" id="articles">
            <h2>Articles</h2>
            <dl>
                <dt><a href="https://woemaniyah.substack.com/p/why-brown-daughters-dont-burn-the">Why Brown Daughters Don’t Burn The House Down</a></dt>
                <dd>Swarna Bhatnagar</dd>
                <dt><a href="https://abiawomosu.substack.com/p/what-they-call-niche-is-the-only">What They Call 'Niche' Is the Only Thing That Scales | Eighteen women who’ve never met are building the only AI infrastructure that works.</a></dt>
                <dd>Abi Awomosu</dd>
                <dt><a href="https://pudding.cool/2026/02/womens-sizing/">women's clothing sizing choas: the fashion industry doesn't make sizes for you</a></dt>
                <dd>The Pudding</dd>
                <dt><a href="https://www.wheresyoured.at/the-ai-bubble-is-an-information-war/">The AI Bubble Is An Information War</a></dt>
                <dd>Ed Zitron</dd>
                <dt><a href="https://publicdomainreview.org/essay/typing-for-love-or-money/">Typing for Love or Money: The Hidden Women's Labor behind Modern Literary Masterpieces</a></dt>
                <dd>Christine Jacobson</dd>
                <dt><a href="https://www.theguardian.com/news/ng-interactive/2026/jan/11/how-grok-nudification-tool-went-viral-x-elon-musk">'Add blood, forced smile': how Grok's nudification tool went viral</a></dt>
                <dd>Amelia Gentleman and Helena Horton</dd>
                <dt><a href="https://www.citationneeded.news/it-matters-i-care/">It matters. I care.</a></dt>
                <dd>Molly White</dd>
                <dt><a href="https://dark.properties/recommoning/">Introducing: Recommoning</a></dt>
                <dd>Dark Properties</dd>
                <dt><a href="https://www.threadings.io/youve-been-traumatized-into-hating/">you've been traumatized into hating reading (and it makes you easier to oppress)</a></dt>
                <dd>Ismatu Gwendolyn</dd>
                <dt><a href="https://www.threadings.io/the-strip-club-did-indeed-make-me-bonkers/">The strip club did indeed make me bonkers!</a></dt>
                <dd>Ismatu Gwendolyn</dd>
                <dt><a href="https://www.abc.net.au/news/2025-09-21/antinatalism-child-free-climate-change-human-suffering-baby/105695328">The case against babies</a></dt>
                <dd>Bri Lee</dd>
                <dt><a href="https://factordaily.com/the-crying-shame-of-image-based-abuse/">The crying shame of image-based abuse</a></dt>
                <dd>Rohini Lakshané</dd>
                <dt><a href="https://www5.austlii.edu.au/au/journals/UNSWLawJlStuS/2022/25.html">"You Won't Believe What She Does!"</a></dt>
                <dd>Stephanie Tong</dd>
                <dt><a href="https://publications.lawschool.cornell.edu/lawreview/wp-content/uploads/sites/2/2024/08/Adler-final.pdf">Arousal by Algorithm</a></dt>
                <dd>Amy Adler</dd>
                
            </dl>
        </div>
        <div id="worldbuildings">
            <h2>Worldbuildings</h2>
            <h3>Melbourne/Naarm</h3>
            <ul>
                <li><a href="https://www.instagram.com/wordcraft.wren/">Wordcraft</a></li>
                <li><a href="https://authentikora.com/index.html">Authentikora</a></li>
                <li><a href="https://www.instagram.com/subtlebodies.space/">Tea in ceremony</a></li>
                <li><a href="https://www.eclecticahub.com/">Eclectica Hub</a></li>
                <li><a href="https://www.generationwomenaus.com/next-show/melbourne">Generation Women</a></li>
            </ul>
            <h3>Online/Digital</h3>
            <ul style={{"listStyleType": "none", margin: 0, padding: 0}}>
                <li><a href="https://sfpc.study/"><img src="/images/sfpc.png" style={{ maxWidth: "25px" }} /> The School for Poetic Computation</a></li>
                <li><a href="https://www.recurse.com/"><img src="/images/recurse.png" style={{ maxWidth: "25px" }} /> Recurse Center</a></li>
                <li><a href="https://www.dair-institute.org/"><img src="https://cdn.sanity.io/images/wc2kmxvk/rebrand/d6387b27a49793826f94fc79416482bf8f9ec3a7-54x56.svg" style={{ maxWidth: "25px" }} /> Dair Institute</a></li>
                <li><a href="https://shado-mag.com/education/toolkits/"><img src="https://shado-mag.com/wp-content/uploads/2024/11/shado-logo-anim-mob-240.gif" style={{ maxWidth: "25px" }} /> Shado Mag's Radical Futures Toolkits</a></li>
            </ul>
        </div>


        <div className="blue" id="websites">
            <h2>Websites</h2>
            <ul>
                <li><a href="https://maggieappleton.com/garden-history">Maggie Appleton</a></li>
                <li><a href="https://inkcaps.neocities.org/home/">Inkcaps</a></li>
                <li><a href="https://petrapixel.neocities.org/">PetraPixel</a></li>
                <li><a href="https://maxbo.me/html-in-hyde/index.html">HTML in Hyde</a></li>
                <li><a href="https://localghost.dev/links/">LocalGhost</a></li>
                <li><a href="https://www.mcsweeneys.net/">McSweeney's Internet Tendency</a></li>
                <li><a href="https://theshovel.com.au/">The Shovel</a></li>
                <li><a href="https://theonion.com/">The Onion</a></li>
                <li><a href="https://www.door.link/">[ door ]</a></li>
                <li><a href="https://www.liberationtoolbox.io/">Liberation Toolbox</a></li>
                <li><a href="https://www.computerhistory.org/timeline/computers/">Computer Timeline History</a></li>
                <li><a href="https://www.shelaghlewins.com/tablet_weaving/TW01/TW01.htm">The Ancient Craft of Tablet Weaving</a></li>
                <li className="green"><a href="https://annas-abode.net/">Anna's Abode</a></li>
                <li><a href="https://ossinsight.io/">Open Source Software Insight</a></li>
                <li><a href="https://noncompliant.fun/">noncompliantfun</a></li>
                <li><a href="https://structuredlabs.github.io/threebodyproblem/">Three Body Problem Sandbox</a></li>
                <li><a href="https://susam.net/wander/">Wander the Small Web by Susam</a></li>
                <li><a href="https://marginalia-search.com/">Marginalia Search</a></li>
            </ul>
        </div>

        <div id="people">
            <h2>People</h2>
            <ul>
                <li><a href="https://www.threadings.io/">Ismatu Gwendolyn</a></li>
                <li><a href="https://abiawomosu.substack.com/">Abi Awomosu</a></li>
                <li><a href="https://woemaniyah.substack.com/">Swarna Bhatnagar</a></li>
                <li><a href="https://carolinesinders.com/">Caroline Sinders</a></li>
                <li><a href="https://www.lizthe.dev/">LizTheDeveloper</a></li>
                <li><a href="https://www.tiktok.com/@aarchor/video/7553809097213136142">AArchor</a></li>
                <li><a href="https://www.instagram.com/inspiredtowrite/">Amie McNee</a></li>
                <li><a href="https://www.instagram.com/exploreyourcore_/">Elise Marcianti</a></li>
            </ul>
        </div>

        <div id="crafts" className="blue">
            <h2>Crafts</h2>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=41FHinAHCOs"> Crochet Rubber Duck</a></li>
                <li><a href="https://www.youtube.com/watch?v=mL26rcvLNwo"> Crochet "Spiral Sun" Granny Square</a></li>
            </ul>
        </div>

    </PageLayout>
);

export default InterNet;
