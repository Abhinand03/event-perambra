import React, { createContext, useContext, useState, useEffect } from "react";
import { DECORATIONS } from "../data/decorations";
import { DecorationItem } from "../types/decoration";

interface SavedContextType {
  savedIds: string[];
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;
  savedDecorations: DecorationItem[];
  isShortlistOpen: boolean;
  setIsShortlistOpen: (open: boolean) => void;
  clearSaved: () => void;
}

const SavedDecorationsContext = createContext<SavedContextType | undefined>(undefined);

export const SavedDecorationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("event_perambra_shortlist");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isShortlistOpen, setIsShortlistOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem("event_perambra_shortlist", JSON.stringify(savedIds));
    } catch {
      // ignore storage errors
    }
  }, [savedIds]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const clearSaved = () => setSavedIds([]);

  const savedDecorations = DECORATIONS.filter((item) => savedIds.includes(item.id));

  return (
    <SavedDecorationsContext.Provider
      value={{
        savedIds,
        toggleSave,
        isSaved,
        savedDecorations,
        isShortlistOpen,
        setIsShortlistOpen,
        clearSaved,
      }}
    >
      {children}
    </SavedDecorationsContext.Provider>
  );
};

export function useSavedDecorations(): SavedContextType {
  const context = useContext(SavedDecorationsContext);
  if (!context) {
    throw new Error("useSavedDecorations must be used within a SavedDecorationsProvider");
  }
  return context;
}
