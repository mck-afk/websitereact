import React from "react";
import PageLayout from "../components/PageLayout";

const FemaleBodyLiteracy = () => (
  <PageLayout>
    
  <div>
    <h1 className="yellow">Female Body Literacy</h1>
        <p>A fun, accessible, deep dive into the science of female reproductive anatomy and hormones, through a lifetime.</p>
        <img 
          src="/images/fbl.png" 
          alt="FemaleBodyLiteracy Presentation Screen"
          style={{maxWidth: 500, maxHeight: 500}}
          />
        <p>Body Literacy is feeling hungry and knowing that eating is an effective response. 🍲<br /><br /> 
        When a 🩸 is late, wouldn't it be nice to default to something other than fear?</p>
        <img 
          src="/images/fbl_1.png" style={{maxWidth: 500, maxHeight: 500}}
          alt="FemaleBodyLiteracy Presentation Screen"
          
        />
        <p>This workshop willl answer questions like:

            
        </p>
        <ul style={{textAlign: "left"}}>
                <li style={{textAlign: "left"}}>What happens in the 4 phases of the menstrual cycle?</li>
                <li style={{textAlign: "left"}}>Are humans the only species who menstruate?</li>
                <li style={{textAlign: "left"}}>Why should I care about ovulation?</li>
                <li style={{textAlign: "left"}}>What choices of contraception are available to me?</li>
                <li style={{textAlign: "left"}}>How can I support those going through menopause?</li>
            </ul> 
        <img src="/images/fbl_preso.png" style={{maxWidth: 500, maxHeight: 500}} />

        <p style={{fontStyle: "italic"}}>Disclaimer: <br />
            I am not a medical expert. I have no medical training. 
            I encourage doing your own research and consulting with your healthcare team. 
            I am simply a nerd who believes that this information can improve all our lives.
        </p>
        
  </div>

  </PageLayout>
);

export default FemaleBodyLiteracy;
