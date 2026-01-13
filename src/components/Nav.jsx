import React from "react";


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
            {/* First column */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft:'10px' }}>
                <div className="win7" style={{ width: 200 }}>
                    <br />
                    <ul role="menu" className="can-hover" style={{ width: 200 }}>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=fbb8ff" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/">Home</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=12629&format=png&color=ffa0a0" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/weblog">Weblog</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=11202&format=png&color=b8e3ff" style={{ left: 3, width: 18, height: 18 }}/>
                            <a href="/internet">InterNet</a>
                        </li>
                        <li role="menuitem" aria-disabled="true" className="has-divider"></li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=21829&format=png&color=ffd861" style={{ left: 3, width: 18, height: 18 }}/>
                            <a href="/femalebodyliteracy">FemaleBodyLiteracy</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=9913&format=png&color=ffb169" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/TechNewsSynth">TechNewsSynth</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=j48RtSRtbrYi&format=png&color=98dc9b" style={{ left: 3, width: 18, height: 18 }}/>
                            <a href="https://annas-abode.net/">Anna's Abode</a>
                        </li>
                        <li role="menuitem">
                            <img src="https://img.icons8.com/?size=100&id=101354&format=png&color=d9b8ff" style={{ left: 5, width: 15, height: 15 }}/>
                            <a href="/astroprogram">AstroProgram</a>
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
            {/* Second column */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px' }}>
                <div className="win7">
                    <div className="window active" style={{ width: 300, textAlign: "center"}}>
                        <div className="title-bar">
                            <div className="title-bar-text">Patch Wizard</div>
                            <div className="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="window-body has-space">
                            <p>installing 2026</p>
                            <div role="progressbar" className="marquee"></div>
                            <br />
                            <section style={{display: 'flex', justifyContent: 'flex-end', gap: 6}}>
                            <button>OK</button>
                            
                        </section>
                        
                        </div>
                        <div className="status-bar">
                            <p className="status-bar-field">ClassName: FireHorse</p>
                            <p className="status-bar-field">PrepareFor: Boldness</p>
                            <p className="status-bar-field">AlchemicalFormula: (♆&♄&⚷)→♈︎+(♅→♊︎)</p>
                        </div>
                        
                    </div>
                    
                    <div style={{ maxWidth: 300, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        
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
                    
                    <select>
                        <option>How are you feeling?</option>
                        <option>5 - Incredible!</option>
                        <option>4 - Great!</option>
                        <option>3 - Pretty good</option>
                        <option>2 - Incredible! (I prefer the number 2)</option>
                        <option>1 - I hate interactivity</option>
                    </select>
                </div>
            </div>
            {/* Third column (double size) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft:'10px' }}>
                <p>
                    Annabelle Grace McKenzie lives, works, and plays on the land of the
                    <a href="https://www.wurundjeri.com.au/"> the Wurundjeri Woi Wurrung people of the Kulin Nation.</a>
                    <br />She recognises their 
                    <a href="https://www.nma.gov.au/defining-moments/resources/evidence-of-first-peoples"> 65,000+ years </a>
                    of sovereignty and reciprocial living, and her duty as a guest upon it today.
                    <br /><br />
                    <span>All rights reserved © 2026 Annabelle Grace McKenzie</span>
                    <br /><br /><a href="mailto:annabelle@annabelle-grace-mckenzie.com">annabelle@annabelle-grace-mckenzie.com</a>
                </p>
            </div>
        </div>
    );
};

export default Nav;


