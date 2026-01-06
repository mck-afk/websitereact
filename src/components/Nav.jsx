import React from "react";

const Nav = () => (
    <div className="win7" style={{float: "left"}}>
        <ul role="menu" className="can-hover" style={{ width: 200 }}>
            <li role="menuitem">
                <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=fbb8ff" style={{ left: 5, width: 15, height: 15 }}/>
                <a href="/">Home</a>
            </li>

            <li role="menuitem" aria-haspopup="true">
                <img src="https://img.icons8.com/?size=100&id=j48RtSRtbrYi&format=png&color=98dc9b" style={{ left: 3, width: 18, height: 18 }}/>
                
                Projects
                
                <ul role="menu">
                    <li role="menuitem">
                        <img src="https://img.icons8.com/?size=100&id=j48RtSRtbrYi&format=png&color=98dc9b" style={{ left: 3, width: 18, height: 18 }}/>
                        
                        <a href="/TheAbode">Anna's Abode</a>
                    </li>
                    <li role="menuitem">
                        <img src="https://img.icons8.com/?size=100&id=21829&format=png&color=ffd861" style={{ left: 3, width: 18, height: 18 }}/>
                        <a href="/femalebodyliteracy">FemaleBodyLiteracy</a>
                    </li>

                    <li role="menuitem">
                        <img src="https://img.icons8.com/?size=100&id=KGjqzPKDjWlh&format=png&color=ffb169" style={{ left: 5, width: 15, height: 15 }}/>
                        
                        <a href="/astroprogram">AstroProgram</a>
                    </li>
                </ul>
            </li>

            

            <li role="menuitem">
                <img src="https://img.icons8.com/?size=100&id=12629&format=png&color=ffa0a0" style={{ left: 5, width: 15, height: 15 }}/>
                <a href="/weblog">Weblog</a>
            </li>
            <li role="menuitem">
                <img src="https://img.icons8.com/?size=100&id=11202&format=png&color=b8e3ff" style={{ left: 3, width: 18, height: 18 }}/>
                
                <a href="/internet">InterNet</a>
            </li>
            
            <li role="menuitem">
                <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=d9b8ff" style={{ left: 5, width: 15, height: 15 }}/>
                
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
);

export default Nav;


