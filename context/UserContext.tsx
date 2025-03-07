import React, { createContext, useContext, useState } from "react";

type UserContextType = {
  name: string;
  setName: (name: string) => void;
  score: number;
  setScore: (value: React.SetStateAction<number>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  return (
    <UserContext.Provider value={{ name, setName, score, setScore }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
