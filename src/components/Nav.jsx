import React from "react";
import Marquee from "react-fast-marquee";
import Oracle from "../components/Oracle";
import { small } from "framer-motion/client";

const Nav = () => {
    // Theme switcher for 'Light' menu item
    const handleLightTheme = () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
        } else {
            document.body.classList.add('dark-theme');
        }
    };

    const [enjoyment, setEnjoyment] = React.useState(3);

    return (
        <div className="threeCol">
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft:'10px' }}>
                <div className="win7" style={{ width: 200 }}>
                    <br />
                    <ul role="menu" className="can-hover" style={{ width: 200 }}>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=e55bed" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/">Home</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=12629&format=png&color=d44141" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/#/weblog">WebLog</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=11202&format=png&color=3aa6ed" style={{ left: 3, width: 18, height: 18 }}/>
                            <a href="/#/internet">InterNet</a>
                        </li>
                        <li role="menuitem" aria-disabled="true" className="has-divider"></li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=21829&format=png&color=ed7b12" style={{ left: 3, width: 18, height: 18 }}/>
                            <a href="/#/femalebodyliteracy">BodyLiteracy</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=9913&format=png&color=ffcc00" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/#/CrochetComputer">CrochetComputer</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=j48RtSRtbrYi&format=png&color=66bd6a" style={{ left: 3, width: 18, height: 18 }}/>
                            <a href="/#/abode">Anna's Abode</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=101354&format=png&color=ad6cf8" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/#/astroprogram">AstroProgram</a>
                        </li>
                        
                        
                        <li role="menuitem" aria-disabled="true" className="has-divider"></li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=9313&format=png" style={{ left: 5, width: 15, height: 15 }}/>
                            <a style={{ cursor: 'pointer' }} onClick={handleLightTheme}>Light</a>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
            
            

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px' }}>
                <p></p>
                <div className="win7">
                    <select>
                        <option>How are you feeling?</option>
                        <option>5 - Incredible!</option>
                        <option>4 - Great!</option>
                        <option>3 - Pretty good</option>
                        <option>2 - Incredible! (I prefer the number 2)</option>
                        <option>1 - I hate interactivity</option>
                    </select>
                    <p></p>
                    <div className="window active" style={{ width: 300, textAlign: "center"}}>
                        <div className="title-bar">
                            <div className="title-bar-text">Yearly Patch Wizard</div>
                            <div className="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="window-body has-space">
                            <p>booting into 2026 with expected output:</p>
                            <Marquee direction="right" speed={50} pauseOnHover={true} style={{ fontFamily: 'italics' }}>
                            ⟡ bravery ⟡ vibrance ⟡ effervescence ⟡ boldness ⟡ real ⟡ rebirth ⟡ glittering ⟡ gilded ⟡ raw ⟡ flouresence 
                            </Marquee>
                            <div role="progressbar" className="marquee"></div>
                            <br />
                            <section style={{display: 'flex', justifyContent: 'flex-end', gap: 6}}>
                            <button>OK</button>
                            </section>
                        </div>
                        <div className="status-bar">
                            <p className="status-bar-field">ClassName: FireHorse</p>
                            <p className="status-bar-field">AlchemicalFormula: (♆&♄&⚷)→♈︎+(♅→♊︎)</p>
                        </div>
                        
                    </div>
                    
                    
                    <div style={{ display: 'none', maxWidth: 300, alignItems: 'center', gap: 0.5 }}>
                        
                        <p>Purposeful</p>
                        <input
                        type="range"
                        min="1"
                        max="5"
                        value={enjoyment}
                        onChange={e => setEnjoyment(Number(e.target.value))}
                        />
                        <p>Playful</p>
                    </div>
                </div>
                <p></p>
                <Oracle />
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft:'10px' }}>
                <p>
                    <br />Annabelle Grace McKenzie lives, works, and plays on the land of 
                    <a href="https://www.wurundjeri.com.au/"> the Wurundjeri Woi Wurrung people of the Kulin Nation</a>. She recognises their 
                    <a href="https://www.nma.gov.au/defining-moments/resources/evidence-of-first-peoples"> 65,000+ years </a>
                    of sovereignty and reciprocial living, and her duty as a guest upon it today; which includes the amplification of indigenous-oriented organisations including <a href="https://www.commonground.org.au/">Common Ground,</a> <a href="https://www.naccho.org.au/">NACCHO</a>, <a href="https://paytherent.net.au/">Pay The Rent,</a> and <a href="https://www.clothingthegaps.com.au/">Clothing the Gaps</a>.
                    <br /><br />
                    <span style={{ textDecoration: 'italic'}}>All rights reserved © 2026 Annabelle Grace McKenzie</span>
                    <br /><br />
                    This website is a human-hand-made virtual craft, and it may not be used to train large-language-models without prior written consent.
                </p>
                
                
                
            </div>
            
        </div>
    );
};

export default Nav;


