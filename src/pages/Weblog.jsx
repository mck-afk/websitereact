import React from "react";
import PageLayout from "../components/PageLayout";

const Weblog = () => (
    <PageLayout>
        <h1><a href="https://en.wikipedia.org/wiki/Blog">web log</a></h1>

        <div id="badges" >
            <a href="https://notbyai.fyi/"><img src="/images/notai1.svg" alt="not ai" style={{ paddingRight: "20px" }} /></a>
            <a href="https://subscribeopenly.net/subscribe/?url=https://annabelle-grace-mckenzie.com/weblog"><img src="/images/rssicon.png" alt="rss icon" style={{ maxWidth: "30px" }} /></a>
            <a href="https://en.wikipedia.org/wiki/RSS"><img src="/images/infoicon.png" alt="rss info icon" style={{ maxWidth: "20px" }} /></a>
            
        </div>

        <div id="articleDFD" className="article blue">
            <h2 className="articleTitle">
                Dear Future Daughter
            </h2>
            <p className="articleText">
                submission to WhyNot
                
            </p>
            <p className="articleMetadata">
                    01 December 2025 | capitalism, mother, external
                </p>
        </div>

        <div id="articleCAGM" className="article pink">
            <h2 className="articleTitle">
                ComputHer by Annabelle Grace McKenzie
            </h2>
            <p className="articleText">
                subscribe to my Substack
                
            </p>
            <p className="articleMetadata">
                    07 October 2025 | technology, women, external
                </p>
        </div>

        <div id="articleBYDH" className="article green">
            <h2 className="articleTitle">
                build your own digital home
            </h2>
            <p className="articleText">
                heal your relationship to the digital world
                
            </p>
            <p className="articleMetadata">
                    25 September 2025 | internet, technology, homemaking
                </p>
        </div>

        <div id="articleWWWW" className="article purple">
            <h2 className="articleTitle">
                world-wide word-weaving
            </h2>
            <p className="articleText">
                the loom walked so computers could run
                
            </p>
            <p className="articleMetadata">
                    13 August 2025 | internet, language, weaving
                </p>
        </div>

        <div id="articleFWFM" className="article orange">
            <h2 className="articleTitle">
                fifth wave feminism: motherwork
            </h2>
            <p className="articleText">
                motherwork is the root of all capital
                
            </p>
            <p className="articleMetadata">
                    07 August 2025 | mother, work, feminism
                </p>
        </div>

        <div id="articleSCSJ" className="article yellow">
            <h2 className="articleTitle">
                stem cells for a spiritual journey
            </h2>
            <p className="articleText">
                its not really just blood...
                
            </p>
            <p className="articleMetadata">
                    02 July 2025 | menstruation, spirit, science
                </p>
        </div>

        <div id="article" className="article red">
            <h2 className="articleTitle">
                coming soon
            </h2>
            <p className="articleText">
                more poetry percolating...
                
            </p>
            <p className="articleMetadata">
                    xx xxx xxxx | xxxxxxx
                </p>
        </div>
        
    </PageLayout>
);

export default Weblog;
