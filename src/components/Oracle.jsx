import { useState } from "react";

const ORACLE_GIFS = [
  "oracle/1.gif",
  "oracle/2.gif",
  "oracle/3.gif",
  "oracle/4.gif",
  "oracle/5.gif",
  "oracle/6.gif",
  "oracle/7.gif",
  "oracle/8.gif",
  "oracle/9.gif",
  "oracle/10.gif",
  "oracle/11.gif",
  "oracle/12.gif",
  "oracle/13.gif",
  "oracle/14.gif",
  "oracle/15.gif",
  "oracle/16.gif",
  "oracle/17.gif",
  "oracle/18.gif",
  "oracle/19.gif",
  "oracle/20.gif"
];

export default function Oracle() {
  const [selectedGif, setSelectedGif] = useState(null);

  const generateOracle = () => {
    const randomIndex = Math.floor(
      Math.random() * ORACLE_GIFS.length
    );

    setSelectedGif(ORACLE_GIFS[randomIndex]);
  };

  return (
    
      <div onClick={generateOracle} style={{ cursor: "pointer" }}>
        <img
              src={selectedGif || "oracle/oracle.gif"}
              alt="Oracle"
            />
      </div>
    
  );
}

