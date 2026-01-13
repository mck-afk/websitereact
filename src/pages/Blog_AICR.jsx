import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const AICR = () => {
    const navigate = useNavigate();
    

    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="blue">Could AI coding assistants be privatising code repair?</h1>
                <h2>I wonder whose labour they will be training on?</h2>
                <h4>10 November 2025 | artificialintelligence, technology, classwar</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>
            <h2><a href="https://www.youtube.com/watch?v=PtqlU_wT-oo">when it's free: you're the product.</a></h2>
            
            <p><span>The open source software development community is a shining example of what can be accomplished when you platform the </span><a href="https://evolutionaryanthropology.duke.edu/sites/evolutionaryanthropology.duke.edu/files/file-attachments/Hare_Survival%20of%20friendliest_Annu%20Rev%20Psych_2017.pdf" rel="nofollow ugc noopener">prosocial and reciprocal nature of humans</a><span>. 
                The </span><a href="https://en.wikipedia.org/wiki/Stack_Overflow" rel="nofollow ugc noopener">17 years of success</a><span> of </span><a href="https://stackoverflow.com/questions" rel="nofollow ugc noopener">Stack Overflow</a><span>, is a testament to the self-fortifying nature of </span><a href="https://openedtech.global/how-open-source-software-is-redefining-global-collaboration/" rel="nofollow ugc noopener">open collaboration</a><span>—‘You help me, I help you’. </span> however even that may have transitioned into a new form/medium, as <a href="https://data.stackexchange.com/stackoverflow/query/1926661#graph">Stack Overflow just recorded its lowest level of activity since launching in 2008.</a></p>
        
            <table style={{ width: "100%" }}>
            <thead>
                
                <tr>
                <th> </th>
                <th>Benefit</th>
                <th>Detriment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>Programmers</th>
                <td>
                    <ul>
                    <li><p>Convenience. <a href="https://docs.github.com/en/copilot/get-started/features" rel="nofollow ugc noopener">Auto-complete, catching typos, and making code changes from your chat</a><span> saves time and a second pair of eyes over your work can help point out things you originally didn’t see/consider. Of course, when you’ve done everything the AI suggests and it still doesn’t work, you’ll be off to the open source community for support. And this is where the </span><strong>detriment</strong><span> of using AI coding assistants exerts its more subtle influence.</span></p></li>
                    </ul>
                </td>
                <td>
                    <ul>
                    <li><p>From personal experience, there’s a unique kind of satisfaction (which I affectionately refer to as a ‘buzz’) when I repair my code with help from strangers on the internet. This ‘buzz’ contains a few different feelings:</p>
                        <ol>
                            <li><p>grateful—for this stranger, for the gift of their time, attention, and expertise</p></li>
                            <li><p>curious—as to their own problems they are trying to solve, and </p></li>
                            <li><p>inspired—maybe my time, attention, and expertise could help them!</p></li>
                        </ol>
                        
                    <li><p><span>AI coding assistants interrupt </span><strong>all</strong><span> of this and instead offer the veneer of individualism. Suddenly, I don’t have to consider </span><em>how</em><span> the help is arriving—the resources of time, attention, expertise that power repair—I can get everything I want without a second thought (*cough* colonialism). I also don’t have to consider crediting them, or employing my skills in exchange, because my AI coding assistants don’t have their own projects (though they certainly have their own problems). I’ve also noticed an emotional difference. I am blunter, more direct, and more frustrated when it doesn't work. Indeed, </span><strong>the AI is training me too</strong><span>.</span></p></li>
                    </li>
                    </ul>
                </td>
                </tr>
                <tr>
                <th>Corporations</th>
                <td>
                    <ul>
                        <li>Reduced transparency and accountability to the coding and software engineering community - especially its critics and hackers.</li>
                        <li>Debugging is insulated within the corporation/product and our data privacy policies. Our errors and vulnerabilities will not be broadcasted on the internet, and we can be instantly alerted to any unexpected behaviour.</li>
                        <li>Every time they use it is is <a href="https://github.com/google-gemini/gemini-cli/blob/main/docs/tos-privacy.md" rel="nofollow ugc noopener">free labour refining our products</a>. Of course they can <a href="https://www.cnet.com/tech/services-and-software/anthropic-will-soon-use-your-chats-with-claude-for-ai-training/" rel="nofollow ugc noopener">opt-out</a>, but they value <i>convenience</i> so they won't. As long as nobody talks about it too much to get confused by the <a href="https://github.com/orgs/community/discussions/152229" rel="nofollow ugc noopener">mixed messages and lies by omission</a>.</li>
                    
                    
                    </ul>
                </td>
                <td>
                    <ul>
                    <li><p><span>There is no detriment to corporations, aside from the licensing/infrastructure costs of the AI, but </span><a href="https://www.investopedia.com/dow-jones-today-10072025-11825437" rel="nofollow ugc noopener">money</a><span> isn’t </span><a href="https://www.bloomberg.com/news/features/2025-10-07/openai-s-nvidia-amd-deals-boost-1-trillion-ai-boom-with-circular-deals" rel="nofollow ugc noopener">real</a><span> these days anyway.</span></p></li>
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>

            
            <p>Just like all innovations, AI coding assistants come with two sides of a coin; that two things can be true at once. It can be a convenient programming partner who catches your mistake uppercAses; AND, it can be using your labour to refine itself whilst reducing transparency and accountability for corporations and their leaders. </p>
            <p>Do your actions align with your values? Do you want more convenience? Community? Creativity?</p>

            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default AICR;
