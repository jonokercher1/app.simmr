import React, { createContext, FC, useState } from 'react';
import { Self } from '../../api/getSelf/getSelf.types';

interface AuthContext {
  user?: Self;
  setUser: (user?: Self) => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<Self>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
