import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const TBUC = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="yellow">Misdirected Longings for Body Literacy</h1>
                <h2>anorexia and bodybuilding come from the same wound</h2>
                <h4>19 September 2026 | body, feminism, capitalism</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            
            <h2>Humans crave Body Literacy; and will find any way to reach it - even if it is maladaptive</h2>
            <p>This is a napkin sketch of how I think we got here.</p>
                <pre style={{ whiteSpace: "pre", fontFamily: '"Courier New", monospace', lineHeight: 1.5, margin: "1rem 0" }}>
{`
           capitalism treats the body as something to be consumed/used/optimised
                                          │
                                          ▼
    human encounters this violence; recognises it occurs to bodies outside of the 'ideal'
                                          │
                                          ▼
                human attempts to protect itself/rebel/control what it can
                                          │
                                          │
                              ┌───disordered eating───┐
                              │                       │ 
                              ▼                       ▼ 
            Body percieved as Female             Body percieved as Male
                              │                       │
                              │                       │
            decrease / anorexia / thinness       increase / bodybuild / looksmaxxing
                              │                       │
                              └───────────┬───────────┘
                                          ▼
                A human longing for bodily autonomy and body literacy
`}
                </pre>
                
            <p>What if every maladaptation was really an encrypted message from your body, asking to be paid attention - even negative attention? I've been reading recently parenting books and they speak at length about how a child who misbehaves will continue to if the behavor elicts a reaction because any attention is stimluating.</p>
            <p>When I think if it like this - it seems inevitable that capitalism would get to this point of wellness-maxxing. When you put people in a system that rewards competition; of course we would end up overstimulated in the grocery aisle with 50 different shampoos. </p>
            <h2>So if this is the extreme side of this maladaptation - what could we imagine is on the other side?</h2>
            <p>A world in which my daughter grows up interpeting the signals and signs from her own body. She recognises what her body is communicating to her - she understand her limits - she challenges herself to grow - she rests when she feels she needs to. <br /> A world in which she recognises that food is medicine, and she builds a nourishing relationships with her food - with all the elemnets of food prepration and consumption. She feels reverence and respect and gratitude and awe towards her food and towards her body and their symbiosis.</p>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default TBUC;
