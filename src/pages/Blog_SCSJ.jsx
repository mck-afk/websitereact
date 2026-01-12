import React from "react";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

const SCSJ = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1 className="green">build your own digital home</h1>
                <h2>heal your relationship to the digital world</h2>
                <h4>25 September 2025 | internet, technology, homemaking</h4>
                <button className="red" onClick={() => navigate(-1)}>back</button>
            </div>

        
            <div className="red" style={{ paddingBottom: "5px" }}>
                <h1>thank you for reading</h1>
                <button className="red" onClick={() => navigate(-1)}>one more?</button>
            </div>
        </PageLayout>
    );
}

export default SCSJ;
