import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const COOR = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="green">cooperative reality</h1>
                <h2>a short story from a dream</h2>
                <h4>04 June 2026 | shortstory, technology, narrative</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <p>Isolated from nature and other people; a set of restrictive and self policing behaviours; alongside controlled sensory illusions. Living in an unreality.</p>
<p>
I knew we all knew that. <br />
As we stood or sat or sang or worked - the feeling that freedom was closer than ever before - simmered just beyond words. Just beyond actions. The eternal presence of the feeling frightened all of us. </p> 
<p>

There was a leader. The most devoted; a young woman raven haired pale skin. She wanted more than anything for it all to be true - for all her sacrifices and pliance to be worthwhile. <br />
There was an agitator. The rascal; a young man blond hair white skin broad features. I knew not to trust him and part of him hated me for it and another part of him forgave me for it.<br />
There was an ex; who was sweet talking and smirking and I surprised myself with my boldness, my rudeness that tore the veil. I was not embarrassed. </p>
<p>
Everything I thought I sensed was illusion.<br />
Except that thought. </p>
<p>
I felt its truth. I felt my intentions, unbound in words, and forgave the radiance of them.<br />
I was hurt and shunned. And it did not sway me. All paths lead to love.</p>
<p>
After the liberation, which I have no memory of, new overseers came in and replayed the atrocities on screens. Telling us that this was to be our memories - horror, pain, suffering - the way we betrayed each other every day, comatose in this unreality. <br />
We recognised the pattern. We had no doubt this time around. We held the kernel, met their eyes, and obliterated them in love, forgiveness, freedom. </p>

<p>The truth of cooperation; of care, was the one thing they could not train out of us and it carried us. And it founded our reality. </p>

        <div className="red" style={{ paddingBottom: "5px" }}>
            <h1>thank you for reading</h1>
            <button className="red" onClick={() => navigate(-1)}>one more?</button>
        </div>
    

    </PageLayout>
    );
}

export default COOR;
