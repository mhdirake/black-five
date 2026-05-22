'use client';

import { usePathname } from 'next/navigation';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children, userInfo }) => {
  const pathname = usePathname()

  const [user, setUser] = useState(userInfo);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};