import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NoteNavContext = createContext();

export const NoteNavProvider = ({ children }) => {
  const navigate = useNavigate();
  const [movingNoteId, setMovingNoteId] = useState(null);

  // Reset animation state on browser navigation (back/forward)
  useEffect(() => {
    const handlePop = () => setMovingNoteId(null);
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const handleNoteClick = (noteId, redirectPath, external) => {
    setMovingNoteId(noteId);
    if (redirectPath) {
      setTimeout(() => {
        if (external) {
          window.location.href = redirectPath;
        } else {
          navigate(redirectPath);
        }
      }, 300);
    }
  };

  return (
    <NoteNavContext.Provider value={{ movingNoteId, handleNoteClick }}>
      {children}
    </NoteNavContext.Provider>
  );
};
