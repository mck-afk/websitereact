import { useState } from "react";

const ORACLE_GIFS = [
  "oracle/1.gif",
  "oracle/2.gif",
  "oracle/3.gif",
  "oracle/4.gif",
  "oracle/5.gif",
  "oracle/6.gif",
  "oracle/7.gif"
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
    
      <div onClick={generateOracle}>
        <img
              src={selectedGif || "oracle/oracle.gif"}
              alt="Oracle"
            />
      </div>
    
  );
}

