import { createContext } from "react";

export const LoginContext = createContext({
  email: null,
  setEmail: (email: string) => {},
  user_id: null,
  type: null,
  setUser: (user: {user_id: string, type: string}) => {}
});
