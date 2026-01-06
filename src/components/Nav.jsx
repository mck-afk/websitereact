import React from "react";

const Nav = () => (
    <div>
        <ul role="menu" className="can-hover" style={{ width: 200 }}>
            <li role="menuitem" aria-haspopup="true">View</li>
            <li role="menuitem" aria-haspopup="true">
                Sort by
                <ul role="menu">
                <li role="menuitem"><a href="/home">Home</a></li>
                <li role="menuitem"><a href="/femalebodyliteracy">FemaleBodyLiteracy</a></li>
                
                </ul>
            </li>
            
        </ul>
        
                
                <a href="/"><button>Home</button></a>
                <a href="/femalebodyliteracy"><button>FemaleBodyLiteracy</button></a>
                <a href="/astroprogram"><button>AstroProgram</button></a>
                <a href="/weblog"><button>Weblog</button></a>
                <a href="/InterNet"><button>InterNet</button></a>
                <a href="/TheAbode"><button>Anna's Abode</button></a>
                <a href="/contact"><button>Contact</button></a>
        
        
    </div>
);

export default Nav;


