import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const SCSJ = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="yellow">stem cells and spiritual journeys</h1>
                <h2>a brief overview of woman's life phases</h2>
                <h4>02 July 2025 | menstruation, spirit, science</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>

            <h2><a href="https://en.wikipedia.org/wiki/Menstruation#cite_ref-16">about half of menstrual fluid is blood</a></h2>
        <p>
            And the other half includes <a href="https://knowablemagazine.org/content/article/health-disease/2024/menstrual-blood-stem-cell-research-could-yield-new-therapies">stem cells,</a> <a href="https://www.ncbi.nlm.nih.gov/books/NBK500020/">endometrial cells, vaginal secretions, and various biochemical molecules,</a> including at least <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3494145/">385 unique proteins.</a>
        </p> 
        <h2>Every Menstruation is a Spiritual Journey</h2>
        <p>Just as the moon has 4 phases, a woman's menstrual cycles has 4 phases. The gift of this phase of her life is that by paying attention to the qualitative and quantitive observations such as the length, heaviness, colour, texture, pain, emotions, and more, she will see patterns emerge that align with her life experiences and mirror her relationship to self.</p>
        <h2>Birth is 10 Menstruation Spiritual Journeys <i>at once</i></h2>
        <p>Pregnancy is a phase of life that typically lasts between 37-42 weeks (9-10 moon cycles). The gift of this phase is that, aside from a respite of the monthly cycling, she is experiencing her body in a completely new way, preparing to bring a child forth.</p>

        <h2>Menopause, the cessation of bleeds, characterises the integration of all of her spiritual journeys throughout her lifetime.</h2>
        <p>She takes care of herself. She has learnt through a lifetime. She reaps her rewards.</p>

            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default SCSJ;
