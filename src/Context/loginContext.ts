import { createContext } from "react";

export const LoginContext = createContext({
  email: null,
  setEmail: (email: string) => {},
});
