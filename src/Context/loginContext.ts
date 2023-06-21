import { createContext } from "react";

export const LoginContext = createContext({
  email: null,
  id: null,
  type: null,
  setEmail: (email: string) => {},
  setId: (id: string) => {},
  setType: (type: string) => {},
});
